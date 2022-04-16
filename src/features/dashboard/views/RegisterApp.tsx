import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import DashboardHeading from "../widgets/DashboardHeading";

import "../styles/registerapp.styles.scss";
import { AppRegisterDetails } from "../../../types/apps";
import { useAppDispatch } from "../../../store";
import { useAppsApi } from "../../../api/apps.api";

const RegisterApp = () => {
	const [appDeets, setAppDeets] = useState<AppRegisterDetails>({
		name: "",
	});

	const dispatch = useAppDispatch();
	const appsApi = useAppsApi();
	const navigate = useNavigate();

	const updateAppDeets =
		(field: "name" | "callbackUrl"): ChangeEventHandler<HTMLInputElement> =>
		(e) => {
			setAppDeets({
				...appDeets,
				[field]: e.target.value,
			});
		};

	const onSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		dispatch(appsApi.register(appDeets)).then(() => {
			navigate("/dashboard/apps");
		});
	};

	return (
		<div className="apps">
			<DashboardHeading
				title="Register New App"
				actions={
					<>
						<Link to="/dashboard/apps">
							<span>
								<AiOutlineAppstore size={20} />
							</span>
						</Link>
					</>
				}
			/>
			<div className="register">
				<div className="form">
					<form onSubmit={onSubmit}>
						<div className="form__field">
							<label htmlFor="appName">Application Name</label>
							<input
								type="text"
								id="appName"
								name="appName"
								required
								value={appDeets.name}
								onChange={updateAppDeets("name")}
							/>
						</div>

						<div className="form__field">
							<label htmlFor="callbackUrl">Webhook URL (optional)</label>
							<input
								type="url"
								id="callbackUrl"
								name="callbackUrl"
								value={appDeets.callbackUrl}
								onChange={updateAppDeets("callbackUrl")}
							/>
						</div>
						<div className="controls">
							<button type="submit">Register</button>
						</div>
					</form>
				</div>
				<div className="info">
					<h5>Webhook URl</h5>
					<p>If webhook url is set, the url is called on each successful transaction verification.</p>
					<p>
						It is important to set up a webhook callback service in your application to automatically update the transaction
						data in real time.
					</p>
					<p>You can set or change the url later from the apps dashboard as well.</p>
				</div>
			</div>
		</div>
	);
};

export default RegisterApp;
