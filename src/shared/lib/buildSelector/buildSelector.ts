import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { StateSchema } from "@/app/providers/StoreProvider";

type TSelectorArgs<T> = (state: StateSchema) => T;
type TSelectorResult<T> = [() => T, TSelectorArgs<T>];

export const buildSelector = <T>(selector: TSelectorArgs<T>): TSelectorResult<T> => {
	const useSelectorHook = () => {
		return useSelector(selector);
	};

	return [useSelectorHook, selector];
};

type TCreateSelectorParams = Parameters<typeof createSelector>;

export const buildCreateSelector = (...args: TCreateSelectorParams) => {
	const createSelectorApp = createSelector(...args);

	const useSelectorHook = () => {
		return useSelector(createSelectorApp);
	};

	return [useSelectorHook, createSelectorApp];
};
