import {
	AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";
import { CombinedState } from "redux";
import { ArticlesPageSchema } from "@/pages/ArticlesPage";
import { LoginFormSchema } from "@/features/AuthByUsername";
import { ArticleDetailsSchema, ArticlesListSchema } from "@/entities/Article";
import { CounterSchema } from "@/entities/Counter";
import { IProfileSchema } from "@/entities/Profile";
import { UserSchema } from "@/entities/User";
import { rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	articlesPage: ArticlesPageSchema;
	loginForm?: LoginFormSchema;
	profile?: IProfileSchema;
	articleDeteils?: ArticleDetailsSchema;
	articlesList?: ArticlesListSchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ExtraArgumentType {
	api: AxiosInstance;
	navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ExtraArgumentType;
	state: StateSchema;
}

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
};
