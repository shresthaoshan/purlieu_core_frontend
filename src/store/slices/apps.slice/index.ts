import { createSlice } from "@reduxjs/toolkit";
import { CApp } from "../../../types/apps";

import * as reducers from "./reducers";

export interface rApp {
	apps: CApp[];
	appDetail: CApp;
	status: "HASDATA" | "LOADING" | "FAILED" | "IDLE";
	error?: string;
}

export const initialState: rApp = {
	apps: [],
	appDetail: {
		adminId: "",
		id: "",
		name: "",
		registeredOn: "",
		callbackUrl: "",
	},
	status: "IDLE",
};

const appSlice = createSlice({
	name: "apps",
	initialState,
	reducers,
});

export const appReducer = appSlice.reducer;
export const appActions = appSlice.actions;
