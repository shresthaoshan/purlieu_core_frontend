import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { rAuth, initialState } from ".";

export const login: CaseReducer<rAuth, PayloadAction<{ accessToken: string; refreshToken: string; email: string }>> = (state, action) => {
	state.status = "LOGGEDIN";
	state.error = "";
	state.email = action.payload.email;
	state.accessToken = action.payload.accessToken;
	state.refreshToken = action.payload.refreshToken;
};

export const register: CaseReducer<rAuth> = (state) => {
	state.status = "REGISTERED";
	state.error = "";
};

export const loading: CaseReducer<rAuth> = (state) => {
	state.status = "LOADING";
	state.error = "";
};

export const error: CaseReducer<rAuth, PayloadAction<string>> = (state, action) => {
	state.status = "FAILED";
	state.error = action.payload;
};

export const logout: CaseReducer<rAuth> = (state) => {
	state.accessToken = initialState.accessToken;
	state.email = initialState.email;
	state.refreshToken = initialState.refreshToken;
	state.error = initialState.error;
	state.status = "LOGGEDOUT";
	return state;
};
