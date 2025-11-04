
import { api } from '@api/config';
import { ICustomer } from '@modules/auth/index.types'; 

export type CustomerApiResponse<T> = {
  message: string;
  response: T;
};

export type CustomerLoginPayload = {
  email: string;
  password: string;
};

export type CustomerSignupPayload = CustomerLoginPayload & {
  name: string;
};

export class CustomerAuthHttpService {
  static async login(loginPayload: CustomerLoginPayload) {
    const {
      data: { response: customer, message },
    } = await api.post<CustomerApiResponse<ICustomer>>('/customer/login', loginPayload);
    
  
    return { customer, message };
  }


  static async signup(signupPayload: CustomerSignupPayload) {
    const {
      data: { response: customer, message },
    } = await api.post<CustomerApiResponse<ICustomer>>('/customer/signup', signupPayload);
    
    return { customer, message };
  }
}