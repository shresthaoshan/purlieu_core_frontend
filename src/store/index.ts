import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth.slice";

const store = configureStore({
	reducer: combineReducers({
		authReducer,
	}),
	devTools: true,
});

export default store;
