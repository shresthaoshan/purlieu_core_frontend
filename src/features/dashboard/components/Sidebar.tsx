import React from "react";

import NavigationLink from "../widgets/NavigationLink";

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<ul>
				<li>
					<NavigationLink to="apps" label="Apps" />
				</li>
				<li>
					<NavigationLink to="transactions" label="Transactions" />
				</li>
				<li>
					<NavigationLink to="preferences" label="Preferences" />
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
