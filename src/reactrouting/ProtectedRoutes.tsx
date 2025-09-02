import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  roles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, roles }) => {
  const { role } = useAuth();

  if (!role) return <Navigate to="/reactrouter/login" replace />;
  if (!roles.includes(role)) return <Navigate to="/reactrouter" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
