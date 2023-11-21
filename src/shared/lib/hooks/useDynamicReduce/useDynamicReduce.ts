import { Reducer } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import {
	ReduxStoreWithManager,
	StateSchemaKey,
} from "@/app/providers/StoreProvider/config/StateSchema";

type ReducersListEntry = [StateSchemaKey, Reducer];

export const useDynamicReduce = (reducers: any, removeAfterUnmount: boolean) => {
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
};
