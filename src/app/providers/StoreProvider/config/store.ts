import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./stateSchema";
import { counterReducer } from "entities/Counter";
import { loginFormReducer } from "features/AuthByUsername";
import { userReducer } from "entities/User";



export const createReduxStore = (initialState?: StateSchema) => (
	configureStore({
		reducer: {
			counter: counterReducer,
			user: userReducer,
			loginForm: loginFormReducer 
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware(),
		devTools: __IS_DEV__,
		preloadedState: initialState,
	})
);