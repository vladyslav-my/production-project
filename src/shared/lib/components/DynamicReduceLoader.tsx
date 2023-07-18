import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager, StateSchemaKey } from "@/app/providers/StoreProvider/config/StateSchema";


type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicReduceLoaderProps {
	children: ReactNode,
	removeAfterUnmount?: boolean,
	reducers: any,
}


export const DynamicReduceLoader: FC<DynamicReduceLoaderProps> = ({ children, reducers, removeAfterUnmount }) => {
	const dispatch = useDispatch();
	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		const cortageEntries = Object.entries(reducers) as ReducersListEntry[];
		cortageEntries.forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});

		return () => {
			if (removeAfterUnmount) {
				cortageEntries.forEach(([name, reducer]: ReducersListEntry) => {
					store.reducerManager.remove(name);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
	}, []);

	return children;
};

