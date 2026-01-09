// src/routes/public.route.tsx
import { Navigate } from "react-router-dom";
import { PATHS } from "./paths";
import type { JSX } from "react";

export default function PublicRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = false; // lấy từ context/store

  if (isAuthenticated) {
    return <Navigate to={PATHS.HOME} replace />;
  }

  return children;
}
