import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { articlesListActions, articlesListSelectors } from "@/entities/Article";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

const {
	getArticlesListInitedQP,
	getArticlesListSortQP,
	getArticlesListTypeQP,
	getArticlesListSearchQP,
	getArticlesListOrderQP,
} = articlesListSelectors;

export const useQueryParams = () => {
	const dispatch = useAppDispatch();
	const [URLSearchParams, SetURLSearchParams] = useSearchParams();

	const _inited = useSelector(getArticlesListInitedQP);
	const type = useSelector(getArticlesListTypeQP);
	const order = useSelector(getArticlesListOrderQP);
	const sort = useSelector(getArticlesListSortQP);
	const search = useSelector(getArticlesListSearchQP);

	useEffect(() => {
		console.log("effect 2");
		const typeParam = URLSearchParams.get("type");
		const orderParam = URLSearchParams.get("order");
		const sortParam = URLSearchParams.get("sort");
		const searchParam = URLSearchParams.get("search");

		if (typeParam) {
			dispatch(articlesListActions.setType(typeParam));
		}

		if (orderParam) {
			dispatch(articlesListActions.setOrder(orderParam));
		}

		if (sortParam) {
			dispatch(articlesListActions.setSort(sortParam));
		}

		if (searchParam) {
			dispatch(articlesListActions.setSearch(searchParam));
		}

		dispatch(articlesListActions.setInited(true));
	}, [dispatch, URLSearchParams]);

	useEffect(() => {
		console.log("effect 3");
		if (_inited) {
			SetURLSearchParams({
				order,
				sort,
				type,
				...(search ? { search } : {}),
			});
		}
	}, [order, sort, type, search, _inited]);
};
