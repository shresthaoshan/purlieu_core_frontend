import { useState } from "react";
import { AppDispatch } from "../../store";
import { History, HistoryRedux } from "../../types/history";

import api from "../../utils/api.util";
import useAuth from "../../features/auth/hooks/useAuth";

export const useHistoryApi = () => {
	const { accessToken } = useAuth();
	const [histories, setHistories] = useState<HistoryRedux>({
		data: [],
		status: "IDLE",
	});

	api.interceptors.request.use((config) => {
		config.headers = {
			...config.headers,
			Authorization: `Bearer ${accessToken}`,
		};
		return config;
	});

	const fetchByApp = (appId: string) => async (dispatch: AppDispatch) => {
		try {
			setHistories({
				...histories,
				status: "LOADING",
			});
			const { data } = await api.get<History[]>(`/apps/${appId}/history`);
			setHistories({
				data,
				status: "LOADED",
				error: "",
			});
		} catch (e: any) {
			setHistories({
				data: [],
				status: "FAILED",
				error: e.message,
			});
		}
	};

	return {
		fetchByApp,
		histories,
	};
};
