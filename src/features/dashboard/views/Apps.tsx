import React, { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../../store";
import { useApps } from "../hooks/useApps";

import "../styles/apps.styles.scss";
import { Link } from "react-router-dom";
import { useAppsApi } from "../../../api/apps.api";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoIosRefresh } from "react-icons/io";
import { HiOutlineRefresh } from "react-icons/hi";
import { FiAlertTriangle } from "react-icons/fi";
import DashboardHeading from "../widgets/DashboardHeading";

const Apps = () => {
	const { apps, status } = useApps();

	const appsApi = useAppsApi();

	const dispatch = useAppDispatch();

	useEffect(() => {
		// if (!apps.length)
		dispatch(appsApi.fetchAll());
		// eslint-disable-next-line
	}, []);

	const reFetchApps = () => dispatch(appsApi.fetchAll());

	const getAvatarUrl = useCallback((seed: string) => {
		return `https://avatars.dicebear.com/api/initials/${seed}.svg`;
	}, []);

	return (
		<div className="apps">
			<DashboardHeading
				title="Apps"
				actions={
					<>
						<span onClick={reFetchApps}>
							{status === "HASDATA" ? (
								<IoIosRefresh size={20} />
							) : status === "LOADING" ? (
								<HiOutlineRefresh size={20} />
							) : status === "FAILED" ? (
								<FiAlertTriangle size={20} />
							) : null}
						</span>
					</>
				}
			/>
			<div className="grid">
				{/* app items */}
				{status === "HASDATA"
					? apps.map((app, index) => (
							<Link to={app.id}>
								<div key={`app_item_${index}`} className="app__item">
									<img src={getAvatarUrl(app.name)} alt="icon" />
									<h4>{app.name}</h4>
								</div>
							</Link>
					  ))
					: null}

				{/* register app icon */}
				{status === "HASDATA" && apps.length < 8 ? (
					<div className="app__item">
						<div className="add_icon">
							<div className="icon">
								<AiOutlineAppstoreAdd size={40} />
							</div>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Apps;
