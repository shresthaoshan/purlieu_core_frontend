import { AxiosError } from "axios";
import useAuth from "../features/auth/hooks/useAuth";
import useRefreshToken from "../features/auth/hooks/useRefreshToken";

import { useEffect } from "react";
import api, { _axiosConfig } from "../utils/api.util";

export const useAxios = (authorised: boolean = false) => {
	const { accessToken } = useAuth();
	const { refreshToken } = useRefreshToken();

	useEffect(() => {
		const requestInterceptor = api.interceptors.request.use(
			(config) => {
				if (!authorised) return config;
				config.headers = {
					...config.headers,
					Authorization: `Bearer ${accessToken}`,
				};
				return config;
			},
			(error) => Promise.reject(error)
		);

		const responseInterceptor = api.interceptors.response.use(
			(response) => response,
			async (error: AxiosError) => {
				console.log({ error });

				if (!authorised) return Promise.reject(error);

				const errResponse = error.response?.data?.details;

				if (errResponse?.name === "TOKEN_ERROR" && errResponse?.code === 403) {
					const prevConfig = error.config;
					const _accessToken = await refreshToken();
					prevConfig.headers = {
						...prevConfig.headers,
						Authorization: `Bearer ${_accessToken}`,
					};
					return api(prevConfig);
				}

				return Promise.reject(error);
			}
		);

		return () => {
			api.interceptors.request.eject(requestInterceptor);
			api.interceptors.response.eject(responseInterceptor);
		};
	}, [accessToken]);

	return api;
};
