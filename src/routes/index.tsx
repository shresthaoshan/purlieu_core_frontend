import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthModule from "../features/auth";

// auth
import Login from "../features/auth/views/Login";
import Register from "../features/auth/views/Register";
import useAuth from "../features/auth/hooks/useAuth";
import useRefreshToken from "../features/auth/hooks/useRefreshToken";

// normal
import Overview from "../features/dashboard/views/Overview";
import Apps from "../features/dashboard/views/Apps";
import RegisterApp from "../features/dashboard/views/RegisterApp";
import AppDetails from "../features/dashboard/views/AppDetails";
import Transactions from "../features/dashboard/views/Transactions";
import LoggedInView from "../views/LoggedInView";

const AppRoutes = () => {
	const { status: authStatus } = useAuth();
	const { refreshToken } = useRefreshToken();

	useEffect(() => {
		console.log("Attempting auto log-in...");
		refreshToken();
	}, []);

	return (
		<>
			<div className={`load__block ${authStatus === "LOADING" ? "active" : ""}`}>
				<div className="spinner"></div>
			</div>
			<Routes>
				<Route index element={<Navigate to="dashboard" />} />
				<Route element={<LoggedInView />}>
					<Route path="dashboard" element={<Overview />}>
						<Route path="apps" element={<Apps />} />
						<Route path="apps/register" element={<RegisterApp />} />
						<Route path="apps/:appId" element={<AppDetails />} />
						<Route path="transactions" element={<Transactions />} />
						<Route path="preferences" />
					</Route>
				</Route>
				{/* Auth */}
				<Route path="auth" element={<AuthModule />}>
					<Route index element={<Navigate to="login" />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>
			</Routes>
		</>
	);
};

export default AppRoutes;
