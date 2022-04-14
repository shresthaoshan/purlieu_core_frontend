import axios, { AxiosRequestConfig } from "axios";

const _config: AxiosRequestConfig = {
	baseURL: process.env.API_URL ?? "http://localhost:3012/api",
};

const api = axios.create(_config);

export default api;
