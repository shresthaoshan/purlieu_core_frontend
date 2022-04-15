import React, { MouseEventHandler } from "react";
import { useAppDispatch } from "../../../store";
import { authActions } from "../../../store/slices/auth.slice";
import useAuth from "../../auth/hooks/useAuth";

const ProfileMenu = () => {
	const { email } = useAuth();

	const dispatch = useAppDispatch();

	const onLogout: MouseEventHandler = (e) => {
		console.log({ msg: "Clicked..." });
		e.preventDefault();
		e.stopPropagation();
		dispatch(authActions.logout());
	};

	return (
		<>
			<div className="control__profile">
				<img src={`https://avatars.dicebear.com/api/miniavs/${email}.svg`} alt={email} />
				<div className="control__profile-menu">
					<ul>
						<li className="label">Actions</li>
						<li onClick={onLogout}>Logout</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default ProfileMenu;
