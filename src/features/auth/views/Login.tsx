import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="auth__login">
			<div className="auth__login-header">
				<h1>Login</h1>
				<small>Continue where you left off...</small>
			</div>
			<form>
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
						placeholder="8 characters*"
						required
						autoComplete="none"
						autoCorrect="off"
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
		</div>
	);
};

export default Login;
