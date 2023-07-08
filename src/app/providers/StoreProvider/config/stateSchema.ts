import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginFormSchema } from "features/AuthByUsername";
import {
	AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from "@reduxjs/toolkit";
import { CombinedState } from "redux";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";
import { ProfileSchema } from "entities/Profile/model/types/Profile";
import { RootState } from "./store";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginFormSchema;
    profile?: ProfileSchema;
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
}