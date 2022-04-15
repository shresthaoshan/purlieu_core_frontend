import React from "react";
import AppLogo from "../../../components/widgets/AppLogo";

import ProfileMenu from "../widgets/ProfileMenu";

const Header = () => {
	return (
		<div className="header">
			<AppLogo />
			<div className="controls">
				<ProfileMenu />
			</div>
			<div className="sep">
				<h2>Cclask</h2>
			</div>
		</div>
	);
};

export default Header;
