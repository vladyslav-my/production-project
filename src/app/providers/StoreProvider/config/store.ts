import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./stateSchema";
import { counterReducer } from "entities/Counter";



export const createReduxStore = (initialState?: StateSchema) => (
	configureStore({
		reducer: {
			counter: counterReducer
		},
		devTools: __IS_DEV__,
		preloadedState: initialState,
	})
);