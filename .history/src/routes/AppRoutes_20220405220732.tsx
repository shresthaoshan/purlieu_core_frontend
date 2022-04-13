import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DashBoard } from "../views/DashBoard";
import { Login } from "../views/Login";
import { SignUp } from "../views/SignUp";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<DashBoard />} /> */}
      <Route path="/Signup" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/dashboard/account" element={<DashBoard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
