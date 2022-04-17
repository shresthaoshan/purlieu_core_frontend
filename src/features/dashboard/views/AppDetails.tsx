import React, { useEffect, useState, ChangeEventHandler } from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import { appActions } from "../../../store/slices/apps.slice";
import { useApps } from "../hooks/useApps";
import DashboardHeading from "../widgets/DashboardHeading";

import { CApp } from "../../../types/apps";

import "../styles/appdetails.styles.scss";
import { format } from "date-fns";
import { AiOutlineEdit } from "react-icons/ai";

const AppDetails = () => {
	const { appId = "" } = useParams();

	const { appDetail } = useApps();
	const [localData, setLocalData] = useState<CApp>(() => appDetail);

	const [editName, setEditName] = useState<boolean>(false);
	const [editCallback, setEditCallback] = useState<boolean>(false);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(appActions.selectApp(appId));
	}, [appId]);

	useEffect(() => {
		setLocalData(appDetail);
	}, [appDetail]);

	const localUpdate =
		(field: "name"): ChangeEventHandler<HTMLInputElement> =>
		(e) => {
			setLocalData({
				...localData,
				[field]: e.target.value,
			});
		};

	return (
		<div className="apps details">
			<DashboardHeading
				title={"Details"}
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
			<div className="detail__field">
				<div className="columns">
					<div className="meta">
						<p className="label">Application Name</p>
						{editName ? (
							<form>
								<div className="form__field">
									<input type="text" required value={localData.name} onChange={localUpdate("name")} />
									<div className="controls">
										<button type="submit">Update</button>
										<button className="secondary" onClick={() => setEditName(false)}>
											Cancel
										</button>
									</div>
								</div>
							</form>
						) : (
							<h3>
								{appDetail.name}
								<span onClick={() => setEditName(true)}>
									<AiOutlineEdit />
								</span>
							</h3>
						)}
					</div>
					<div className="date">
						<p className="label">Registered On:</p>
						<h4>{appDetail.registeredOn ? format(new Date(appDetail.registeredOn), "do MMM yyyy") : "Not specified."}</h4>
					</div>
					<div className="meta">
						<p className="label">Callback Url</p>
						{editCallback ? (
							<form>
								<div className="form__field">
									<input
										type="text"
										placeholder="*https://somedomain.com/webhook"
										value={localData.callbackUrl || ""}
										onChange={localUpdate("name")}
									/>
									<div className="controls">
										<button type="submit">Update</button>
										<button className="secondary" onClick={() => setEditCallback(false)}>
											Cancel
										</button>
									</div>
								</div>
							</form>
						) : (
							<h4>
								{appDetail.callbackUrl || <i>Not set!</i>}
								<span onClick={() => setEditCallback(true)}>
									<AiOutlineEdit />
								</span>
							</h4>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppDetails;
