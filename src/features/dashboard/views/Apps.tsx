import React, { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../../store";
import { useAppsApi } from "../../../api/apps.api";
import { useApps } from "../hooks/useApps";

import { Link } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoIosRefresh } from "react-icons/io";
import { HiOutlineRefresh } from "react-icons/hi";
import { FiAlertTriangle } from "react-icons/fi";

import DashboardHeading from "../widgets/DashboardHeading";

import "../styles/apps.styles.scss";

const Apps = () => {
	const { apps, status } = useApps();

	const appsApi = useAppsApi();

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!apps.length) dispatch(appsApi.fetchAll());
		// eslint-disable-next-line
	}, []);

	// disallow refetching when loading
	const reFetchApps = () => status !== "LOADING" && dispatch(appsApi.fetchAll());

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
							<Link key={`app_item_${index}`} to={app.id}>
								<div className="app__item">
									<img src={getAvatarUrl(app.name)} alt="icon" />
									<h4>{app.name}</h4>
								</div>
							</Link>
					  ))
					: null}

				{/* register app icon */}
				{(status === "HASDATA" || status === "FAILED") && apps.length < 8 ? (
					<Link to="register">
						<div className="app__item">
							<div className="add_icon">
								<div className="icon">
									<AiOutlineAppstoreAdd size={40} />
								</div>
							</div>
						</div>
					</Link>
				) : null}
			</div>
		</div>
	);
};

export default Apps;
