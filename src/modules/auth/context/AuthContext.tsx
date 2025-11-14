import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { CustomerAuthHttpService, LoginPayload, SignupPayload, LoginResponse } from "@api/endpoints/customer-auth.endpoints";
import { toast } from "sonner";

type Customer = {
  id: string;
  email: string;
  name?: string;
  role: string;
  organizationId: string;
};

type AuthContextType = {
  customer: Customer | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  signup: (payload: SignupPayload) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = "gcci_auth_token";
const CUSTOMER_KEY = "gcci_customer";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    const storedCustomer = localStorage.getItem(CUSTOMER_KEY);

    if (storedToken && storedCustomer) {
      try {
        setToken(storedToken);
        setCustomer(JSON.parse(storedCustomer));
      } catch (error) {
        console.error("Failed to parse stored customer data:", error);
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(CUSTOMER_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const login = useCallback(async (payload: LoginPayload) => {
    try {
      setIsLoading(true);
      const response: LoginResponse = await CustomerAuthHttpService.login(payload);

      // Store token and customer data
      localStorage.setItem(TOKEN_KEY, response.token);
      localStorage.setItem(CUSTOMER_KEY, JSON.stringify(response.customer));

      setToken(response.token);
      setCustomer(response.customer);

      toast.success(response.message || "Login successful");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Invalid credentials");
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signup = useCallback(async (payload: SignupPayload) => {
    try {
      setIsLoading(true);
      const response = await CustomerAuthHttpService.signup(payload);

      toast.success(response.message || "Signup successful. Please check your email to confirm your account.");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to create account");
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(CUSTOMER_KEY);
    setToken(null);
    setCustomer(null);

    toast.success("You have been successfully logged out");
  }, []);

  const value: AuthContextType = {
    customer,
    token,
    isAuthenticated: !!token && !!customer,
    isLoading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
