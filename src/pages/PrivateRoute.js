import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function PrivateRoute({ isLoggedIn, children }) {
  if (isLoggedIn) {
    return children;
  } else {
    toast.error("Login First");
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
