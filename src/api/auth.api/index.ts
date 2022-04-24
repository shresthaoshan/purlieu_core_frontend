import { Dispatch } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";
import { authActions } from "../../store/slices/auth.slice";
import api from "../../utils/api.util";
import { decodeAccessToken } from "../../utils/tokens.utils";

export const login = (email: string, password: string) => async (dispatch: Dispatch) => {
	dispatch(authActions.loading());
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
	dispatch(authActions.loading());
	try {
		await api.post("/admin/register", { email, password });
		dispatch(authActions.register());
	} catch (e: any) {
		dispatch(authActions.error(e.message));
	}
};

export const tokenRefresh = (refreshToken: string) => async (dispatch: AppDispatch) => {
	dispatch(authActions.loading());
	try {
		const { data } = await api.post("/admin/token-refresh", { refreshToken });
		const { accessToken, refreshToken: _refToken } = data as any;
		const { email: decodedEmail } = decodeAccessToken(accessToken);
		dispatch(authActions.login({ accessToken, refreshToken: _refToken, email: decodedEmail }));
	} catch (e: any) {
		dispatch(authActions.error(e.message));
	}
};

export const tokenValidate = (accessToken: string, refreshToken: string) => async (dispatch: AppDispatch) => {
	dispatch(authActions.loading());
	try {
		await api.post("/admin/token-validate", null, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		dispatch(authActions.validated());
	} catch (e: any) {
		dispatch(tokenRefresh(refreshToken));
	}
};
