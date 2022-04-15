import React, { MouseEventHandler, useState } from "react";
import { useAppDispatch } from "../../../store";
import { authActions } from "../../../store/slices/auth.slice";
import useAuth from "../../auth/hooks/useAuth";

import { m } from "framer-motion";

const ProfileMenu = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const { email } = useAuth();

	const dispatch = useAppDispatch();

	const updateMenuVisibility = () => setShowMenu(!showMenu);

	const onLogout: MouseEventHandler = (e) => {
		console.log({ msg: "Clicked..." });
		e.preventDefault();
		e.stopPropagation();
		dispatch(authActions.logout());
	};

	return (
		<>
			<div className="control__profile" onClick={updateMenuVisibility}>
				<img src={`https://avatars.dicebear.com/api/miniavs/${email}.svg`} alt={email} />
				{showMenu ? (
					<m.div className="control__profile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<ul>
							<li className="label">Actions</li>
							<li onClick={onLogout}>Logout</li>
						</ul>
					</m.div>
				) : null}
			</div>
		</>
	);
};

export default ProfileMenu;
