import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { loginFormReducer } from "features/AuthByUsername";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";



export const createReduxStore = (
	initialState?: StateSchema, 
	asyncReducers?: ReducersMapObject<StateSchema>,
) => {

	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer
	};


	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});

	//@ts-ignore
	store.reducerManager = reducerManager;

	return store; 
};

