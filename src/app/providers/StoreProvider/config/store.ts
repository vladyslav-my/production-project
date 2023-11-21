import {
	CombinedState, Reducer, ReducersMapObject, configureStore,
} from "@reduxjs/toolkit";
import { articlesListReducer } from "@/entities/Article";
import { counterReducer } from "@/entities/Counter";
import { ProfileReducer } from "@/entities/Profile";
import { userReducer } from "@/entities/User";
import { $api } from "@/shared/api/api";
import { rtkApi } from "@/shared/api/rtkApi";
import { createReducerManager } from "./reducerManager";
import { ExtraArgumentType, StateSchema } from "./StateSchema";

export const createReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		[rtkApi.reducerPath]: rtkApi.reducer,
		counter: counterReducer,
		user: userReducer,
		profile: ProfileReducer,
		articlesList: articlesListReducer,
	};

	const extraArgument: ExtraArgumentType = {
		api: $api,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: { extraArgument },
		}).concat(rtkApi.middleware),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
export type RootState = ReturnType<ReturnType<typeof createReduxStore>["getState"]>;
