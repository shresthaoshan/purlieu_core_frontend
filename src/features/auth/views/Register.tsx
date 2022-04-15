import React, { ChangeEventHandler, FormEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as authApi from "../../../api/auth.api";
import { useAppSelector } from "../../../store";
import { AuthCredentials } from "../../../types/auth";
import useAuth from "../hooks/useAuth";

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
		<div className="auth__login">
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
		</div>
	);
};

export default Register;
