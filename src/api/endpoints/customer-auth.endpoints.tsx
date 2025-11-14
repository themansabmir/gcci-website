import { api } from "@api/config";

// Types based on backend DTOs
export type SignupPayload = {
  // Organization details
  organizationName: string;
  city: string;
  address: string;
  state: string;
  country: string;
  pin_code: string;
  mobile_number: string;
  gst_number: string;
  pan_number: string;
  // Admin customer details
  email: string;
  password: string;
  name?: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type ForgotPasswordPayload = {
  email: string;
};

export type ResetPasswordPayload = {
  token: string;
  newPassword: string;
};

export type ConfirmAccountPayload = {
  token: string;
};

export type InviteCustomerPayload = {
  email: string;
  role?: "admin" | "customer";
};

// Response types
export type SignupResponse = {
  message: string;
  organizationId: string;
  customerId: string;
  vendorId: string;
  vendorExists: boolean;
};

export type LoginResponse = {
  message: string;
  token: string;
  customer: {
    id: string;
    email: string;
    name?: string;
    role: string;
    organizationId: string;
  };
};

export type MessageResponse = {
  message: string;
};

export class CustomerAuthHttpService {
  /**
   * Signup - Register organization and admin customer
   */
  static async signup(payload: SignupPayload): Promise<SignupResponse> {
    const { data } = await api.post<SignupResponse>("/customer", payload);
    return data;
  }

  /**
   * Login - Authenticate customer
   */
  static async login(payload: LoginPayload): Promise<LoginResponse> {
    const { data } = await api.post<LoginResponse>("/customer/login", payload);
    return data;
  }

  /**
   * Forgot Password - Send password reset email
   */
  static async forgotPassword(payload: ForgotPasswordPayload): Promise<MessageResponse> {
    const { data } = await api.post<MessageResponse>("/customer/forgot-password", payload);
    return data;
  }

  /**
   * Reset Password - Reset password with token
   */
  static async resetPassword(payload: ResetPasswordPayload): Promise<MessageResponse> {
    const { data } = await api.post<MessageResponse>("/customer/reset-password", payload);
    return data;
  }

  /**
   * Confirm Account - Verify email address
   */
  static async confirmAccount(payload: ConfirmAccountPayload): Promise<MessageResponse> {
    const { data } = await api.post<MessageResponse>("/customer/confirm-account", payload);
    return data;
  }

  /**
   * Invite Customer - Invite new customer to organization (requires auth)
   */
  static async inviteCustomer(payload: InviteCustomerPayload): Promise<MessageResponse> {
    const { data } = await api.post<MessageResponse>("/customer/invite", payload);
    return data;
  }
}
