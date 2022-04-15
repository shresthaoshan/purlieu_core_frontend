import React from "react";
import { Outlet } from "react-router-dom";
import AppLogo from "../../components/widgets/AppLogo";
import { useAppSelector } from "../../store";

import "./styles/auth.styles.scss";

const AuthModule = () => {
	const { error } = useAppSelector((state) => state.authReducer);
	return (
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
	);
};

export default AuthModule;
