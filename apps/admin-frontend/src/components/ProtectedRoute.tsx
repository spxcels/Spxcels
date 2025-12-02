import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();

  // ⏳ Wait for AuthContext to finish loading
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen text-xl text-white">
        Checking authentication...
      </div>
    );
  }

  // ❌ If user is NOT logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Authenticated → allow access
  return <>{children}</>;
}
