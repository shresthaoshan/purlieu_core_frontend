import React, { ReactNode } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface NavigationLinkProps {
	key?: string;
	to: string;
	label: string;
	icon?: ReactNode;
	end?: boolean;
}

const NavigationLink = ({ to, label, icon, ...otherProps }: NavigationLinkProps) => {
	return (
		<NavLink to={to} {...otherProps}>
			<div className="label">
				<span className="icon">{icon}</span>
				{label}
			</div>
			<div className="indicator">
				<MdOutlineArrowForwardIos />
			</div>
		</NavLink>
	);
};

export default NavigationLink;
