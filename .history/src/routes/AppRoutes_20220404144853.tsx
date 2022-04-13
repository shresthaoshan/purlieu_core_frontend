import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h2>Home</h2>} />
      <Route path="**" element={<Navigate to="/" />} />
    </Routes>
  );
};
