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
		</div>
	);
};

export default Header;
