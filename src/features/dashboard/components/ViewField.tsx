import React from "react";
import { Outlet } from "react-router-dom";

const ViewField = () => {
	return (
		<main className="viewfield">
			<Outlet />
		</main>
	);
};

export default ViewField;
