import api from "../../../utils/api.util";

import { useAppDispatch } from "../../../store";
import { authActions } from "../../../store/slices/auth.slice";
import { decodeAccessToken } from "../../../utils/tokens.utils";

export const useRefreshToken = () => {
	const dispatch = useAppDispatch();

	const refreshToken = async () => {
		dispatch(authActions.loading());
		const _refreshToken: string = localStorage.getItem("refreshToken") ?? "";
		try {
			const { data } = await api.post("/admin/token-refresh", { refreshToken: _refreshToken });
			const { accessToken, refreshToken } = data as any;
			const { email: decodedEmail, verified } = decodeAccessToken(accessToken);
			dispatch(authActions.login({ accessToken, refreshToken, email: decodedEmail, verified }));
			localStorage.setItem("refreshToken", refreshToken);
			return accessToken as string;
		} catch (e: any) {
			console.log({ error: e });
			dispatch(authActions.logout());
		}
	};

	return { refreshToken };
};
export default useRefreshToken;
