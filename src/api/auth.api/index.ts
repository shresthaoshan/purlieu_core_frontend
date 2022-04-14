import { Dispatch } from "@reduxjs/toolkit";
import { authActions } from "../../store/slices/auth.slice";
import api from "../../utils/api.util";
import { decodeAccessToken } from "../../utils/tokens.utils";

export const login = (email: string, password: string) => async (dispatch: Dispatch) => {
	try {
		const { data } = await api.post("/admin/login", { email, password });
		const { accessToken, refreshToken } = data as any;
		const { email: decodedEmail } = decodeAccessToken(accessToken);
		dispatch(authActions.login({ accessToken, refreshToken, email: decodedEmail }));
	} catch (e: any) {
		dispatch(authActions.error(e.message));
	}
};

export const register = (email: string, password: string) => async (dispatch: Dispatch) => {
	try {
		await api.post("/admin/register", { email, password });
		dispatch(authActions.register());
	} catch (e: any) {
		dispatch(authActions.error(e.message));
	}
};
