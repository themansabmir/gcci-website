import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { router } from './app/router';
import { CustomerAuthProvider } from './modules/auth/hooks/customercontext';

export default function App() {
    return (
        <CustomerAuthProvider>
            <RouterProvider router={router} />
            <Toaster position="top-right" />
        </CustomerAuthProvider>
    );
}
