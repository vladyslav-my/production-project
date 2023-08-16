import { CombinedState, Reducer, ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "@/shared/api/api";
import { NavigateOptions, To } from "react-router-dom";
import { ExtraArgumentType } from "./StateSchema";
import { articlesPageReducer } from "@/pages/ArticlesPage";



export const createReduxStore = (
	initialState?: StateSchema, 
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: (to: To, options?: NavigateOptions | undefined) => void
) => {

	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
		articlesPage: articlesPageReducer
	};

	const extraArgument: ExtraArgumentType = {
		api: $api,
		navigate
	};


	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {	extraArgument }
		})
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store; 
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
export type RootState = ReturnType<ReturnType<typeof createReduxStore>["getState"]>;


