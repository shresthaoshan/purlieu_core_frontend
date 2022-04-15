import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { iAuth, initialState } from ".";

export const login: CaseReducer<iAuth, PayloadAction<{ accessToken: string; refreshToken: string; email: string }>> = (state, action) => {
	state.status = "LOGGEDIN";
	state.error = "";
	state.email = action.payload.email;
	state.accessToken = action.payload.accessToken;
	state.refreshToken = action.payload.refreshToken;
};

export const register: CaseReducer<iAuth> = (state) => {
	state.status = "REGISTERED";
	state.error = "";
};

export const error: CaseReducer<iAuth, PayloadAction<string>> = (state, action) => {
	state.status = "FAILED";
	state.error = action.payload;
};

export const logout: CaseReducer<iAuth> = (state) => {
	state.accessToken = initialState.accessToken;
	state.email = initialState.email;
	state.refreshToken = initialState.refreshToken;
	state.error = initialState.error;
	state.status = "LOGGEDOUT";
	return state;
};
