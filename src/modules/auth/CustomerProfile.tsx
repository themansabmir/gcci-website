import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CustomerAuthHttpService } from "@/api/endpoints/customer-auth.endpoints";
import { customerProfileSchema, CustomerProfileFormValues } from "./index.types";
import { useAuth } from "./context/AuthContext";

export default function CustomerProfile() {
  const navigate = useNavigate();
  const { customer, isAuthenticated, isLoading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<CustomerProfileFormValues>({
    resolver: zodResolver(customerProfileSchema),
    defaultValues: {
      name: customer?.name || "",
    },
  });

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    CustomerAuthHttpService.getProfile()
      .then(({ response }) => {
        form.reset({ name: response.name || "" });
        setIsEditing(false);
      })
      .catch((error: any) => {
        const message = error?.response?.data?.message || "Failed to load profile";
        toast.error(message);
      });
  }, [form, isAuthenticated, isLoading, navigate]);

  const onSubmit = async (values: CustomerProfileFormValues) => {
    try {
      const { response, message } = await CustomerAuthHttpService.updateProfile({ name: values.name });
      form.reset({ name: response.name || "" });
      toast.success(message || "Profile updated successfully");
      setIsEditing(false);
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to update profile";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
            <p className="text-gray-600">View and update your account details.</p>
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="font-medium">Email</span>
              <span>{customer?.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Role</span>
              <span className="capitalize">{customer?.role}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Name</span>
              <button
                type="button"
                className="text-sm text-primary hover:underline disabled:cursor-default disabled:text-gray-500"
                onClick={() => setIsEditing(true)}
                disabled={isEditing}
              >
                {form.watch("name") || "-"}
              </button>
            </div>
          </div>

          {isEditing && (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4 border-t border-gray-200">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-2">
                  <Button type="submit" className="flex-1">
                    Save Changes
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
