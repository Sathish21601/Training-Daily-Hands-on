import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

export default function Require() {
  let context = useContext(AuthContext);
  return context.isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}
