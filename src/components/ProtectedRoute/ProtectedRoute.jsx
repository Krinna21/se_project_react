import React from "react";
import { Navigate } from "react-router-dom";
import "./ProtectedRoute.css";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("jwt");

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
