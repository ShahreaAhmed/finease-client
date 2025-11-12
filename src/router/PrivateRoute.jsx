import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const FullPageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
    <span className="ml-3 text-lg text-gray-700">Loading...</span>
  </div>
);

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <FullPageLoader></FullPageLoader>;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
