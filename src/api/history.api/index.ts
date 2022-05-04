import { useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import { AppDispatch } from "../../store";
import { History, HistoryRedux } from "../../types/history";

export const useHistoryApi = () => {
	const api = useAxios(true);
	const [histories, setHistories] = useState<HistoryRedux>({
		data: [],
		status: "IDLE",
	});

	const fetchByApp = async (appId: string) => {
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
