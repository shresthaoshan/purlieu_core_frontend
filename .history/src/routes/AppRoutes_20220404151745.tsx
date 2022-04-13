import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DashBoard } from "../views/DashBoard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/signup" element={<DashBoard />} />
      <Route path="/Logip" element={<DashBoard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
