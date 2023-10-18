import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
	getArticlesListTypeQP, getArticlesListSortQP, getArticlesListSearchQP, getArticlesListOrderQP, getArticlesListPageQP, getArticlesListViewMode, getArticlesListInitedQP,
} from "../selectors/articlesList";
import { articlesListActions } from "../slice/articlesListSlice";
import { ViewMode } from "../types/ArticlesListSchema";

export const useQueryParams = () => {
	const dispatch = useAppDispatch();
	const [URLSearchParams, SetURLSearchParams] = useSearchParams();

	const _inited = useSelector(getArticlesListInitedQP);
	const type = useSelector(getArticlesListTypeQP);
	const order = useSelector(getArticlesListOrderQP);
	const sort = useSelector(getArticlesListSortQP);
	const search = useSelector(getArticlesListSearchQP);
	const page = useSelector(getArticlesListPageQP);
	const viewMode = useSelector(getArticlesListViewMode);

	useEffect(() => {
		const typeParam = URLSearchParams.get("type");
		const orderParam = URLSearchParams.get("order");
		const sortParam = URLSearchParams.get("sort");
		const searchParam = URLSearchParams.get("search");

		if (typeParam) {
			dispatch(
				articlesListActions.setType(typeParam),
			);
		}

		if (orderParam) {
			dispatch(
				articlesListActions.setOrder(orderParam),
			);
		}

		if (sortParam) {
			dispatch(
				articlesListActions.setSort(sortParam),
			);
		}

		if (searchParam) {
			dispatch(
				articlesListActions.setSearch(searchParam),
			);
		}

		dispatch(
			articlesListActions.setInited(true),
		);
	}, [dispatch, URLSearchParams]);

	useEffect(() => {
		if (_inited) {
			SetURLSearchParams(
				{
					order,
					sort,
					type,
					...(search ? { search } : {}),
				},
			);
		}
	}, [order, sort, type, search, _inited, SetURLSearchParams]);
};
