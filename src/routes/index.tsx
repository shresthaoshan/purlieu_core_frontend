import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AuthModule from "../features/auth";

// auth
import Login from "../features/auth/views/Login";
import Register from "../features/auth/views/Register";

// normal
import { Home } from "../views/Home";

const AppRoutes = () => {
	const location = useLocation();

	return (
		<Routes location={location}>
			<Route index element={<Navigate to="auth/login" />} />
			{/* Auth */}
			<Route path="auth" element={<AuthModule />}>
				<Route index element={<Navigate to="login" />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
