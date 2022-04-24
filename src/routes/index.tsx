import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AuthModule from "../features/auth";
import { IoIosRefresh } from "react-icons/io";

// auth
import Login from "../features/auth/views/Login";
import Register from "../features/auth/views/Register";
import { useAppDispatch, useAppSelector } from "../store";
import * as authApi from "../api/auth.api";

// normal
import Overview from "../features/dashboard/views/Overview";
import Apps from "../features/dashboard/views/Apps";
import RegisterApp from "../features/dashboard/views/RegisterApp";
import AppDetails from "../features/dashboard/views/AppDetails";
import Transactions from "../features/dashboard/views/Transactions";

const AppRoutes = () => {
	const location = useLocation();

	const dispatch = useAppDispatch();
	const { status: authStatus, accessToken, refreshToken, error } = useAppSelector((state) => state.authReducer);

	useEffect(() => {
		console.log("Auth Validating...", accessToken.length);
		if (accessToken.length) dispatch(authApi.tokenValidate(accessToken, refreshToken));
	}, []);

	return (
		<>
			<div className={`load__block ${authStatus === "LOADING" ? "active" : ""}`}>
				<div className="spinner"></div>
			</div>
			<Routes location={location}>
				{authStatus === "LOGGEDIN" ? (
					<>
						<Route index element={<Navigate to="dashboard" />} />
						<Route path="dashboard" element={<Overview />}>
							<Route path="apps" element={<Apps />} />
							<Route path="apps/register" element={<RegisterApp />} />
							<Route path="apps/:appId" element={<AppDetails />} />
							<Route path="transactions" element={<Transactions />} />
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
		</>
	);
};

export default AppRoutes;
