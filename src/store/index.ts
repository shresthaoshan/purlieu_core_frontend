import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistCombineReducers } from "redux-persist";
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { setupListeners } from "@reduxjs/toolkit/query";

// reducersb
import { authReducer } from "./slices/auth.slice";
import { appReducer } from "./slices/apps.slice";
import { historyReducer, historyReducerPath } from "./api/history.api";

// combine reducers and persist
const rootReducer = persistCombineReducers(
	{
		key: "root",
		version: 1,
		storage,
	},
	{
		authReducer,
		appReducer,
		[historyReducerPath]: historyReducer,
	}
);

const serializableCheck = {
	ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
};

const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck }).concat(historyApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

export const persistor = persistStore(store);
