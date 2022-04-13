import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/s"
        element={
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
            enim. At nobis cum ullam reprehenderit? Totam, veniam! Quam
            laudantium, aliquid dolore, expedita ut quidem quod molestiae
            blanditiis nisi hic molestias.
          </h2>
        }
      />
      <Route path="**" element={<Navigate to="/" />} />
    </Routes>
  );
};
