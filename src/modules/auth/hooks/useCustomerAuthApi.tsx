import { CustomerAuthHttpService } from '@api/endpoints/customer-auth.endpoints';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast'; 
import { useNavigate } from 'react-router-dom';

import { useCustomerAuth } from './useCustomerAuth'; 
import { CustomerLoginPayload, CustomerSignupPayload } from '@api/endpoints/customer-auth.endpoints'; 
import { ICustomer } from '../index.types'; 

interface ApiErrorResponse {
    response?: {
        data?: {
            message?: string;
        };
    };
    message?: string;
}


type CustomerAuthResponse = { customer: ICustomer; message: string; };


export function useCustomerLoginApi() {
  const { addCustomerToStorage } = useCustomerAuth();
  const navigate = useNavigate();

  const loginMutation = useMutation<CustomerAuthResponse, ApiErrorResponse, CustomerLoginPayload>({
    mutationFn: (payload) => CustomerAuthHttpService.login(payload),

    onSuccess(data) {
      addCustomerToStorage(data.customer); 
      toast.success(data.message || 'Login successful!');
      navigate('/customer/dashboard');
    },

    onError: (error) => {
      const errorMessage = error.response?.data?.message || error.message || 'Login failed. Please verify credentials.';
      toast.error(errorMessage);
    },
  });

  return {
    login: loginMutation.mutate,
    loginAsync: loginMutation.mutateAsync,
    isLoading: loginMutation.isPending,
    isError: loginMutation.isError,
    isSuccess: loginMutation.isSuccess,
    error: loginMutation.error,
    data: loginMutation.data?.customer,
  };
}


export function useCustomerSignupApi() {
    const { addCustomerToStorage } = useCustomerAuth();
    const navigate = useNavigate();

    const signupMutation = useMutation<CustomerAuthResponse, ApiErrorResponse, CustomerSignupPayload>({
        mutationFn: (payload) => CustomerAuthHttpService.signup(payload),
        
        onSuccess(data) {
            addCustomerToStorage(data.customer); 
            toast.success(data.message || 'Account created! Logging you in...');
            navigate('/customer/dashboard');
        },
        
        onError: (error) => {
            const errorMessage = error.response?.data?.message || error.message || 'Registration failed.';
            toast.error(errorMessage);
        },
    });

    return {
        signup: signupMutation.mutate, 
        signupAsync: signupMutation.mutateAsync, 
        isLoading: signupMutation.isPending,
        isError: signupMutation.isError,
        isSuccess: signupMutation.isSuccess,
        error: signupMutation.error,
        data: signupMutation.data?.customer,
    };
}