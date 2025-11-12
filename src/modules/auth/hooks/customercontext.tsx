import { createContext, ReactNode, useEffect, useState, useCallback } from 'react';
import { ICustomer } from '../index.types';


const CUSTOMER_USER_KEY = 'gcci_customer';
const CUSTOMER_TOKEN_KEY = 'gcci_customer_token';

type CustomerAuthContextType = {
  customer: ICustomer | null;
  logout: () => void;
  setCustomer: (userData: ICustomer) => void;
  refresh: boolean;
  addCustomerToStorage: (data: ICustomer) => void;
};

export const CustomerAuthContext = createContext<CustomerAuthContextType | undefined>(undefined);

export const CustomerAuthProvider = ({ children }: { children: ReactNode }) => {
  const [customer, setCustomer] = useState<ICustomer | null>(null);
  const [refresh, setRefresh] = useState(true);

  // Load state from local storage on initial mount
  useEffect(() => {
    setRefresh(true);
    const storedCustomer = localStorage.getItem(CUSTOMER_USER_KEY);
    const token = localStorage.getItem(CUSTOMER_TOKEN_KEY);

    if (storedCustomer && token) {
      // Re-attach the token for session validation in Axios interceptors
      const customerData = JSON.parse(storedCustomer);
      setCustomer({ ...customerData, access_token: token } as ICustomer);
    } else if (storedCustomer || token) {
      // If one part is missing (security check failed), clear the session
      localStorage.removeItem(CUSTOMER_USER_KEY);
      localStorage.removeItem(CUSTOMER_TOKEN_KEY);
    }
    setRefresh(false);
  }, []);

  const logout = useCallback(() => {
    setCustomer(null);
    localStorage.removeItem(CUSTOMER_USER_KEY);
    localStorage.removeItem(CUSTOMER_TOKEN_KEY);
    
  }, []);

  const addCustomerToStorage = useCallback((data: ICustomer) => {
    // Store user data (excluding token)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { access_token, ...customerToStore } = data; 
    
    localStorage.setItem(CUSTOMER_USER_KEY, JSON.stringify(customerToStore));
    localStorage.setItem(CUSTOMER_TOKEN_KEY, data.access_token);
    setCustomer(data);
  }, []);

  return (
    <CustomerAuthContext.Provider value={{ customer, logout, setCustomer, refresh, addCustomerToStorage }}>
      {children}
    </CustomerAuthContext.Provider>
  );
};