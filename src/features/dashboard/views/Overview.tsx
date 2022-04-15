import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ViewField from "../components/ViewField";

import "../styles/dashboard.styles.scss";

const Overview = () => {
	return (
		<div className="dashboard">
			<Header />
			<Sidebar />
			<ViewField />
		</div>
	);
};

export default Overview;
