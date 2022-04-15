import React from "react";
import { Outlet } from "react-router-dom";

const ViewField = () => {
	return (
		<main className="viewfield">
			<h3>ViewField</h3>
			<Outlet />
		</main>
	);
};

export default ViewField;
