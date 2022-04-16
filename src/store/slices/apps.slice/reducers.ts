import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { rApp } from ".";
import { CApp } from "../../../types/apps";

export const fetchAll: CaseReducer<rApp, PayloadAction<CApp[]>> = (state, action) => {
	state.apps = action.payload;
	state.error = "";
	state.status = "HASDATA";
};
export const fetchOne: CaseReducer<rApp, PayloadAction<CApp>> = (state, action) => {
	state.appDetail = action.payload;
	state.error = "";
	state.status = "HASDATA";
};

export const loading: CaseReducer<rApp> = (state) => {
	state.status = "LOADING";
	state.error = "";
};

export const error: CaseReducer<rApp, PayloadAction<string>> = (state, action) => {
	state.status = "FAILED";
	state.error = action.payload;
};
