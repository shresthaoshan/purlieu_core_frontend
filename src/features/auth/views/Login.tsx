import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { AuthCredentials } from "../../../types/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import * as authApi from "../../../api/auth.api";

const Login = () => {
	const [creds, setCreds] = useState<AuthCredentials>(() => ({ email: "", password: "" }));

	const dispatch = useDispatch();

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		dispatch(authApi.login(creds.email, creds.password));
	};

	const onChange =
		(field: "email" | "password"): ChangeEventHandler<HTMLInputElement> =>
		(e) => {
			setCreds({
				...creds,
				[field]: e.target.value,
			});
		};

	return (
		<motion.div
			key="page__auth__login"
			initial={{ opacity: 0, x: 70 }}
			exit={{ opacity: 0, x: -70 }}
			animate={{ opacity: 1, x: 0 }}
			className="auth__login"
		>
			<div className="auth__login-header">
				<h1>Login</h1>
				<small>Continue where you left off...</small>
			</div>
			<form onSubmit={onSubmit}>
				<div className="form__field">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="admin@domain.com"
						required
						autoComplete="none"
						autoCorrect="off"
						onChange={onChange("email")}
					/>
				</div>
				<div className="form__field">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="8 characters*"
						required
						autoComplete="none"
						autoCorrect="off"
						onChange={onChange("password")}
					/>
				</div>
				<p className="help">Forgot Password?</p>
				<div className="controls">
					<button type="submit">Login</button>
					<p>
						New here? <Link to="/auth/register">Register</Link> instead.
					</p>
				</div>
			</form>
		</motion.div>
	);
};

export default Login;
