import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import LandingPage from '../../modules/website';
import Login from '../../modules/auth/Login';
import Signup from '../../modules/auth/Signup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><LandingPage /></Layout>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default router;