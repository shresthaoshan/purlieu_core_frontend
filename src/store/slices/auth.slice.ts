import { createSlice } from "@reduxjs/toolkit";

interface iAuth {
	email: string;
	apiKey: string;
	status: "LOGGEDIN" | "LOGGEDOUT" | "FAILED" | "IDLE";
	error?: string;
}

const initialState: iAuth = {
	email: "",
	apiKey: "",
	status: "IDLE",
};

const authSlice = createSlice<iAuth, {}, "auth">({
	name: "auth",
	initialState,
	reducers: {},
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
