import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";
import { useState } from "react";
import { Package } from "lucide-react";

const signupSchema = z.object({
  // Organization details
  organizationName: z.string().min(2, "Organization name must be at least 2 characters"),
  city: z.string().min(2, "City is required"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  state: z.string().min(2, "State is required"),
  country: z.string().min(2, "Country is required"),
  pin_code: z.string().min(4, "PIN code must be at least 4 characters"),
  mobile_number: z.string().min(10, "Mobile number must be at least 10 digits"),
  gst_number: z.string().min(15, "GST number must be at least 15 characters"),
  pan_number: z.string().min(10, "PAN number must be at least 10 characters"),
  // Admin customer details
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name must be at least 2 characters").optional(),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function Signup() {
  const { signup, isLoading } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      organizationName: "",
      city: "",
      address: "",
      state: "",
      country: "",
      pin_code: "",
      mobile_number: "",
      gst_number: "",
      pan_number: "",
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (values: SignupFormValues) => {
    try {
      setIsSubmitting(true);
      await signup(values);
      // Redirect to login after successful signup
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Package className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join GCCI Today</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Register your organization and start managing your cargo with India's leading logistics platform
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="shadow-xl">
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Organization Details Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Organization Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="organizationName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Organization Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="ABC Logistics Pvt Ltd" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gst_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>GST Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="22AAAAA0000A1Z5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pan_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>PAN Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="AAAAA0000A" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mobile_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 9876543210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="123, Business Park, Sector 5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City *</FormLabel>
                          <FormControl>
                            <Input placeholder="Mumbai" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State *</FormLabel>
                          <FormControl>
                            <Input placeholder="Maharashtra" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country *</FormLabel>
                          <FormControl>
                            <Input placeholder="India" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pin_code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>PIN Code *</FormLabel>
                          <FormControl>
                            <Input placeholder="400001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Admin User Details Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Admin User Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="admin@company.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Password *</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Minimum 8 characters" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading || isSubmitting} size="lg">
                  {isLoading || isSubmitting ? "Creating Organization..." : "Register Organization"}
                </Button>
              </form>
            </Form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
