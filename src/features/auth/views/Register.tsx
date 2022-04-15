import React, { ChangeEventHandler, FormEventHandler, useEffect, useState } from "react";
import { AuthCredentials } from "../../../types/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import useAuth from "../hooks/useAuth";
import * as authApi from "../../../api/auth.api";

import { motion } from "framer-motion";

const Register = () => {
	const [creds, setCreds] = useState<AuthCredentials>(() => ({ email: "", password: "" }));
	const { status } = useAuth();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (status === "REGISTERED") {
			navigate("/auth/login");
		}
	}, [status]);

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		dispatch(authApi.register(creds.email, creds.password));
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
			key="page__auth__register"
			initial={{ opacity: 0, x: 70 }}
			exit={{ opacity: 0, x: -70 }}
			animate={{ opacity: 1, x: 0 }}
			className="auth__login"
		>
			<div className="auth__login-header">
				<h1>Register</h1>
				<small>Doorway to unified services...</small>
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
						onChange={onChange("email")}
					/>
				</div>
				<div className="form__field">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Minimum 8 characters*"
						required
						autoComplete="none"
						minLength={8}
						onChange={onChange("password")}
					/>
				</div>
				<div className="controls">
					<button type="submit">Register</button>
					<p>
						Already have an account? <Link to="/auth/login">Login</Link>.
					</p>
				</div>
			</form>
		</motion.div>
	);
};

export default Register;
