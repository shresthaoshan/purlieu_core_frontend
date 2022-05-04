import { Dispatch } from "@reduxjs/toolkit";
import { authActions } from "../../store/slices/auth.slice";
import { decodeAccessToken } from "../../utils/tokens.utils";
import api from "../../utils/api.util";

export const login = (email: string, password: string) => async (dispatch: Dispatch) => {
	dispatch(authActions.loading());
	try {
		const { data } = await api.post("/admin/login", { email, password });
		const { accessToken, refreshToken } = data as any;
		const { email: decodedEmail, verified } = decodeAccessToken(accessToken);
		dispatch(authActions.login({ accessToken, refreshToken, email: decodedEmail, verified }));
		localStorage.setItem("refreshToken", refreshToken);
	} catch (e: any) {
		dispatch(authActions.error(e.message));
	}
};

export const register = (email: string, password: string) => async (dispatch: Dispatch) => {
	dispatch(authActions.loading());
	try {
		const { data } = await api.post("/admin/register", { email, password });
		const { accessToken, refreshToken } = data as any;
		const { email: decodedEmail, verified } = decodeAccessToken(accessToken);
		dispatch(authActions.login({ accessToken, refreshToken, email: decodedEmail, verified }));
	} catch (e: any) {
		dispatch(authActions.error(e.message));
	}
};
