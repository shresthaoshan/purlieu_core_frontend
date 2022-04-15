import React from "react";

import NavigationLink from "../widgets/NavigationLink";

import { AiOutlineAppstore, AiOutlineSetting, AiOutlineUnorderedList } from "react-icons/ai";

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<ul>
				<li>
					<NavigationLink to="apps" label="Apps" icon={<AiOutlineAppstore size={22} />} />
				</li>
				<li>
					<NavigationLink to="transactions" label="Transactions" icon={<AiOutlineUnorderedList size={22} />} />
				</li>
				<li>
					<NavigationLink to="preferences" label="Preferences" icon={<AiOutlineSetting size={22} />} />
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
