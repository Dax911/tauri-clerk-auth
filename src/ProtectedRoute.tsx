// ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isSignedIn } = useUser();

  return isSignedIn ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
