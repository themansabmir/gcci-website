import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/app/layout/MainLayout";
import LandingPage from "../../modules/website";
import Login from "../../modules/auth/Login";
import Signup from "../../modules/auth/Signup";
import ResetPassword from "../../modules/auth/ResetPassword";
import ConfirmAccount from "../../modules/auth/ConfirmAccount";
import ForgotPassword from "../../modules/auth/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "confirm-account",
        element: <ConfirmAccount />,
      },
    ],
  },
]);

export default router;
