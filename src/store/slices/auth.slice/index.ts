import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";

export interface iAuth {
	email: string;
	status: "LOGGEDIN" | "REGISTERED" | "LOGGEDOUT" | "FAILED" | "IDLE";
	error?: string;
	accessToken: string;
	refreshToken: string;
}

const initialState: iAuth = {
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
