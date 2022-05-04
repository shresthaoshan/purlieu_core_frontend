import axios, { AxiosRequestConfig } from "axios";

export const _axiosConfig: AxiosRequestConfig = {
	baseURL: process.env.API_URL ?? "http://localhost:3012/api",
};

const api = axios.create(_axiosConfig);

export default api;
