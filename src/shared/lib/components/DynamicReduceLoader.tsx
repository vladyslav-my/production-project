import { Reducer } from "@reduxjs/toolkit";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import {
	ReduxStoreWithManager,
	StateSchemaKey,
} from "@/app/providers/StoreProvider/config/StateSchema";

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicReduceLoaderProps {
	children: ReactNode;
	removeAfterUnmount?: boolean;
	reducers: any;
}

export const DynamicReduceLoader: FC<DynamicReduceLoaderProps> = ({
	children,
	reducers,
	removeAfterUnmount,
}) => {
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
				cortageEntries.forEach(([name]: ReducersListEntry) => {
					store.reducerManager.remove(name);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
	}, [dispatch, removeAfterUnmount, store.reducerManager, reducers]);

	return children;
};
