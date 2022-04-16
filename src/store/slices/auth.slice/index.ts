import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";

export interface rAuth {
	email: string;
	status: "LOGGEDIN" | "REGISTERED" | "LOGGEDOUT" | "LOADING" | "FAILED" | "IDLE";
	error?: string;
	accessToken: string;
	refreshToken: string;
}

export const initialState: rAuth = {
	email: "",
	accessToken: "",
	refreshToken: "",
	status: "IDLE",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers,
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
