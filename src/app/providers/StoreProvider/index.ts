import { StateSchema, ReducersList, ThunkConfig } from "./config/StateSchema";
import { AppDispatch, RootState } from "./config/store";
import StoreProvider from "./ui/StoreProvider";

export { StoreProvider };

export type {
	StateSchema, ReducersList, AppDispatch, RootState, ThunkConfig,
};
