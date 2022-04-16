import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AuthModule from "../features/auth";

// auth
import Login from "../features/auth/views/Login";
import Register from "../features/auth/views/Register";
import { useAppSelector } from "../store";

// normal
import Overview from "../features/dashboard/views/Overview";
import Apps from "../features/dashboard/views/Apps";
import RegisterApp from "../features/dashboard/views/RegisterApp";

const AppRoutes = () => {
	const location = useLocation();

	const authStatus = useAppSelector((state) => state.authReducer.status);

	return (
		<Routes location={location}>
			{authStatus === "LOGGEDIN" ? (
				<>
					<Route index element={<Navigate to="dashboard" />} />
					<Route path="dashboard" element={<Overview />}>
						<Route path="apps" element={<Apps />} />
						<Route path="apps/register" element={<RegisterApp />} />
						<Route path="transactions" />
						<Route path="preferences" />
					</Route>
				</>
			) : (
				<>
					<Route index element={<Navigate to="auth/login" state={{ from: location }} />} />
					<Route path="/*" element={<Navigate to="auth/login" state={{ from: location }} />} />
				</>
			)}
			{/* Auth */}
			{authStatus !== "LOGGEDIN" ? (
				<Route path="auth" element={<AuthModule />}>
					<Route index element={<Navigate to="login" />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>
			) : (
				<Route path="auth/*" element={<Navigate to="/" replace state={{ from: location }} />} />
			)}
		</Routes>
	);
};

export default AppRoutes;
