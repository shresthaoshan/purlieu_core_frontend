import React, { MouseEventHandler, useEffect, useState } from "react";
import { useAppDispatch } from "../../../store";
import { authActions } from "../../../store/slices/auth.slice";
import useAuth from "../../auth/hooks/useAuth";

import { VscSignOut } from "react-icons/vsc";

import { AnimatePresence, motion } from "framer-motion";

const ProfileMenu = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const { email } = useAuth();

	const dispatch = useAppDispatch();

	const updateMenuVisibility = () => setShowMenu(!showMenu);

	const onLogout: MouseEventHandler = (e) => {
		e.preventDefault();
		e.stopPropagation();
		dispatch(authActions.logout());
	};

	useEffect(() => {
		const handler = () => showMenu && setShowMenu(false);

		document.addEventListener("click", handler);

		return () => {
			document.removeEventListener("click", handler);
		};
	});

	return (
		<>
			<div className="control__profile" onClick={updateMenuVisibility}>
				<img src={`https://avatars.dicebear.com/api/miniavs/${email}.svg`} alt={email} />
				<AnimatePresence>
					{showMenu ? (
						<motion.div
							key="profile__menu_control_anim"
							className="control__profile-menu"
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, scale: 0 }}
						>
							<ul>
								{/* <li className="label">Logged in as:</li> */}
								<li className="label info">{email}</li>
								<hr />
								<li className="label">Actions</li>
								<li onClick={onLogout}>
									<VscSignOut size={20} /> Logout
								</li>
							</ul>
						</motion.div>
					) : null}
				</AnimatePresence>
			</div>
		</>
	);
};

export default ProfileMenu;
