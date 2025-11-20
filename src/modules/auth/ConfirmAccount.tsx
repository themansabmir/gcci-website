import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CustomerAuthHttpService } from "@/api/endpoints/customer-auth.endpoints";
import { toast } from "sonner";

export default function ConfirmAccount() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const token = useMemo(() => searchParams.get("token"), [searchParams]);

  useEffect(() => {
    const confirm = async () => {
      if (!token) {
        setIsError(true);
        setStatusMessage("Invalid or missing confirmation link. Please request a new one.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await CustomerAuthHttpService.confirmAccount({ token });
        const message = response.message || "Account confirmed successfully. You can now login.";
        setStatusMessage(message);
        toast.success(message);
      } catch (error: any) {
        const message = error?.response?.data?.message || "Failed to confirm account. Please try again.";
        setIsError(true);
        setStatusMessage(message);
        toast.error(message);
      } finally {
        setIsLoading(false);
      }
    };

    confirm();
  }, [token]);

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Confirming Your Account</h1>
            <p className="text-gray-600">
              {isLoading ? "Please wait while we verify your email address." : statusMessage || "Account confirmation complete."}
            </p>
          </div>

          {!isLoading && (
            <div className="flex flex-col items-center space-y-4 mt-4">
              <Button onClick={handleGoToLogin} className="w-full" variant={isError ? "destructive" : "default"}>
                Go to Login
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
