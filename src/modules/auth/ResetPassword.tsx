import { useNavigate, useSearchParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useMemo } from "react";
import { CustomerAuthHttpService } from "@/api/endpoints/customer-auth.endpoints";
import { toast } from "sonner";
import { resetPasswordSchema, ResetPasswordFormValues } from "./index.types";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const token = useMemo(() => searchParams.get("token"), [searchParams]);

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: ResetPasswordFormValues) => {
    if (!token) {
      toast.error("Invalid or missing invitation link. Please request a new invitation.");
      return;
    }

    try {
      setIsSubmitting(true);
      await CustomerAuthHttpService.resetPassword({ token, newPassword: values.password });
      toast.success("Your password has been set successfully. Please log in.");
      navigate("/login");
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to set password. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isTokenMissing = !token;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Set Your Password</h1>
            <p className="text-gray-600">Create a new password to complete your invitation to the GCCI portal.</p>
          </div>

          {isTokenMissing ? (
            <p className="text-center text-sm text-red-600">
              The invitation link is invalid or expired. Please contact your administrator to request a new invitation.
            </p>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Minimum 8 characters" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm New Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Re-enter your new password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting || isTokenMissing} size="lg">
                  {isSubmitting ? "Setting Password..." : "Set Password"}
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
