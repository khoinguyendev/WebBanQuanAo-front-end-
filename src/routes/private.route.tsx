// src/routes/private.route.tsx
import { Navigate } from "react-router-dom";
import { PATHS } from "./paths";
import type { JSX } from "react";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = true; // lấy từ context/store

  if (!isAuthenticated) {
    return <Navigate to={PATHS.LOGIN} replace />;
  }

  return children;
}
