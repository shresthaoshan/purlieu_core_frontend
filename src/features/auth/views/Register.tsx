import React, { FormEventHandler } from "react";
import { Link } from "react-router-dom";

const Register = () => {
	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		// @todo call api
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
						autoCorrect="off"
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
						autoCorrect="off"
						minLength={8}
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
