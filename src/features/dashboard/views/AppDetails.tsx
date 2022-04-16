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

	const [editProperties, setEditProperties] = useState<{ name: boolean; url: boolean }>({
		name: false,
		url: false,
	});

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

	const editField = (field: "name" | "url") => () => {
		let _edit = editProperties;
		_edit[field] = !_edit[field];

		console.log({ _edit });

		setEditProperties({
			...editProperties,
			[field]: !editProperties[field],
		});
	};

	return (
		<div className="apps details">
			<DashboardHeading
				title={"Details"}
				actions={
					<>
						<Link to="/dashboard/apps">
							<span onClick={editField("name")}>
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
						{editProperties.name ? (
							<form>
								<div className="form__field">
									<input type="text" value={localData.name} onChange={localUpdate("name")} />
									<div className="controls">
										<button type="submit">Update</button>
									</div>
								</div>
							</form>
						) : (
							<h3>
								{appDetail.name}
								<span>
									<AiOutlineEdit />
								</span>
							</h3>
						)}
					</div>
					<div className="date">
						<p className="label">Registered On:</p>
						<h4>{format(new Date(appDetail.registeredOn), "do MMM yyyy")}</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppDetails;
