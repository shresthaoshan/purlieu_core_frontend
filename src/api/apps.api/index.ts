import { useAxios } from "../../hooks/useAxios";
import { AppDispatch } from "../../store";
import { appActions } from "../../store/slices/apps.slice";
import { AppRegisterDetails, CApp } from "../../types/apps";

export const useAppsApi = () => {
	const api = useAxios(true);

	const fetchAll = () => async (dispatch: AppDispatch) => {
		try {
			dispatch(appActions.loading());
			const { data } = await api.get<CApp[]>("/apps/list");
			if (!data) throw new Error("No data.");
			dispatch(appActions.fetchAll(data));
		} catch (e: any) {
			dispatch(appActions.error(e.config?.response?.error || e.message));
		}
	};
	const fetchOne = (appId: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(appActions.loading());
			const { data } = await api.get<CApp>(`/apps/${appId}`);
			dispatch(appActions.fetchOne(data));
		} catch (e: any) {
			dispatch(appActions.error(e.config?.response?.error || e.message));
		}
	};

	const register = (appDetails: AppRegisterDetails) => async (dispatch: AppDispatch) => {
		try {
			dispatch(appActions.loading());
			const { data } = await api.post(`/apps/create`, appDetails);
			console.log({ data });
			dispatch(fetchAll());
		} catch (e: any) {
			dispatch(appActions.error(e.config?.response?.error || e.message));
		}
	};

	return {
		fetchAll,
		fetchOne,
		register,
	};
};
