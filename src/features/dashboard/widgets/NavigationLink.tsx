import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { NavLink } from "react-router-dom";

interface NavigationLinkProps {
	key?: string;
	to: string;
	label: string;
}

const NavigationLink = ({ to, label, ...otherProps }: NavigationLinkProps) => {
	return (
		<NavLink to={to} {...otherProps}>
			{label}
			<div className="indicator">
				<MdOutlineArrowForwardIos />
			</div>
		</NavLink>
	);
};

export default NavigationLink;
