import { FC, ReactNode } from "react";
import { StateSchema } from "../config/stateSchema";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";

interface StoreProviderProps {
	children: ReactNode,
	initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
	
	const store = createReduxStore(initialState);
	
	return (
		<Provider store={store}>
			{ children }
		</Provider>
	);
};