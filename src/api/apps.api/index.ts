import { Dispatch } from "@reduxjs/toolkit";
import useAuth from "../../features/auth/hooks/useAuth";
import { appActions } from "../../store/slices/apps.slice";
import { CApp } from "../../types/apps";
import api from "../../utils/api.util";

export const useAppsApi = () => {
	const { accessToken } = useAuth();

	api.interceptors.request.use((config) => {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${accessToken}`,
		};
		return config;
	});

	const fetchAll = () => async (dispatch: Dispatch) => {
		try {
			dispatch(appActions.loading());
			const { data } = await api.get<CApp[]>("/apps/list");
			dispatch(appActions.fetchAll(data));
		} catch (e: any) {
			dispatch(appActions.error(e.config?.response?.error || e.message));
		}
	};
	const fetchOne = (appId: string) => async (dispatch: Dispatch) => {
		try {
			dispatch(appActions.loading());
			const { data } = await api.get<CApp>(`/apps/${appId}`);
			dispatch(appActions.fetchOne(data));
		} catch (e: any) {
			dispatch(appActions.error(e.config?.response?.error || e.message));
		}
	};

	return {
		fetchAll,
		fetchOne,
	};
};
