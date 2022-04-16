import { useAppSelector } from "../../../store";

export const useApps = () => {
	return useAppSelector((state) => state.appReducer);
};
