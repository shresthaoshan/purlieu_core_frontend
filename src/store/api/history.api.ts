import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { History } from "../../types/history";

const baseUrl = process.env.API_URL ?? "http://localhost:3012/api";

export const historyApi = createApi({
	reducerPath: "transactions",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getHistoryByAppId: builder.query<History[], string>({
			query: (id: string) => `/apps/${id}/history`,
		}),
	}),
});

export const { useGetHistoryByAppIdQuery, useLazyGetHistoryByAppIdQuery } = historyApi;

export const historyReducer = historyApi.reducer;
export const historyReducerPath = historyApi.reducerPath;
export const historyApiMiddleware = historyApi.middleware;
