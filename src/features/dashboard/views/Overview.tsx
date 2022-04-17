import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ViewField from "../components/ViewField";

import "../styles/dashboard.styles.scss";

const Overview = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("apps");
	}, []);

	return (
		<div className="dashboard">
			<Header />
			<Sidebar />
			<ViewField />
		</div>
	);
};

export default Overview;
