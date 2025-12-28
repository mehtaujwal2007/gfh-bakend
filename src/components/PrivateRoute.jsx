// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log("🧪 Checking token in PrivateRoute:", token); // Add this

  if (!token) {
    console.log("🔒 No token, redirecting to login");
    return <Navigate to="/login" replace />;
  }

  console.log("✅ Token found, access granted");
  return children;
};

export default PrivateRoute;
