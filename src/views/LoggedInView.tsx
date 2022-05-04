import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../features/auth/hooks/useAuth";

const LoggedInView = () => {
	const { status } = useAuth();
	const location = useLocation();

	return status === "LOGGEDIN" ? <Outlet /> : <Navigate to="/auth/login" replace state={{ from: location }} />;
};

export default LoggedInView;
