import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/app/layout/MainLayout";
import LandingPage from "../../modules/website";
import Login from "../../modules/auth/Login";
import Signup from "../../modules/auth/Signup";

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
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
