// src/routes/index.tsx
import { useRoutes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import PrivateRoute from "./private.route";
import PublicRoute from "./public.route";
import { PATHS } from "./paths";

import NotFound from "@/pages/NotFound";
import Home from "@/pages/home/Home";
import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

export default function AppRoutes() {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        { path: PATHS.HOME, element: <Home /> },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: PATHS.LOGIN,
          element: (
            <PublicRoute>
              <Login />
            </PublicRoute>
          ),
        },
        {
          path: PATHS.REGISTER,
          element: <Register />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
}
