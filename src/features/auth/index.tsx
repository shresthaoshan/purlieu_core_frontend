import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store";

import AppLogo from "../../components/widgets/AppLogo";

import "./styles/auth.styles.scss";
import useAuth from "./hooks/useAuth";

const AuthModule = () => {
	const { status, error } = useAuth();
	return status !== "LOGGEDIN" ? (
		<div className="auth__page">
			<div className="auth__container">
				<AppLogo />
				<Outlet />
				{/* add exist to classname  */}
				<div className={`auth__error ${error && "exist"}`}>{error && <p className="error">Credentials invalid.</p>}</div>
				<div className="auth__footer">
					<p>
						Contact <a href="mailto:oshan.shr22@gmail.com">administration</a>.
					</p>
					<p className="copyright">&copy; Purlieu | All rights reserved.</p>
				</div>
			</div>
		</div>
	) : (
		<Navigate to="/dashboard/apps" replace />
	);
};

export default AuthModule;
