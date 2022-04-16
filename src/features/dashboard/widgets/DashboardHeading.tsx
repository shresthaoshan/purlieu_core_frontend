import React, { ReactNode } from "react";

interface DashboardHeadingProps {
	title: string;
	actions?: ReactNode;
}

const DashboardHeading = ({ title, actions }: DashboardHeadingProps) => {
	return (
		<div className="dashboard__header">
			<h2>{title}</h2>
			<div className="actions">{actions}</div>
		</div>
	);
};

export default DashboardHeading;
