import { z } from "zod";

// --- Zod Schemas ---
export const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }).min(1, { message: "Email is required" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

export const customerSignupSchema = z.object({
  name: z.string().min(2, { message: "Full Name is required." }),
  companyName: z.string().min(2, { message: "Company Name is required." }),

  email: loginSchema.shape.email,
  password: loginSchema.shape.password,

  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string().min(8, { message: "Confirm Password must be at least 8 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const customerProfileSchema = z.object({
  name: z.string().min(2, { message: "Full Name is required." }),
});

export type LoginPayload = z.infer<typeof loginSchema>;
export type CustomerSignupFormValues = z.infer<typeof customerSignupSchema>;
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
export type CustomerProfileFormValues = z.infer<typeof customerProfileSchema>;

export interface ICustomer {
  id: string;
  email: string;
  name: string;
  access_token: string;
  is_active: boolean;
}
