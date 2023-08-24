import { fetchArticles } from "@/entities/Article";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { articlesActions } from "@/entities/Article/model/slice/articlesSlice";
import { useSelector } from "react-redux";
import { getArticlesQueryParams } from "@/entities/Article/model/selectors/articles";

export const useFetchArticlesData = () => {
	const dispatch = useAppDispatch();
	const [URLSearchParams, SetURLSearchParams] = useSearchParams();

	const queryParams = useSelector(getArticlesQueryParams);

	useEffect(() => {
		const typeParam = URLSearchParams.get("type");
		const orderParam = URLSearchParams.get("order");
		const sortParam = URLSearchParams.get("sort");
		const searchParam = URLSearchParams.get("search");
	
		if (typeParam) {
			dispatch(
				articlesActions.setType(typeParam)
			);
		}
	
		if (orderParam) {
			dispatch(
				articlesActions.setOrder(orderParam)
			);
		}
	
		if (sortParam) {
			dispatch(
				articlesActions.setSort(sortParam)
			);
		}
	
		if (searchParam) {
			dispatch(
				articlesActions.setSearch(searchParam)
			);
		}


		dispatch(
			articlesActions.setInited(true)
		);
		

	}, []);


	useEffect(() => {
		if (queryParams?._inited) {
			queryParams && SetURLSearchParams(
				{
					order: queryParams.order,
					sort: queryParams.sort,
					type: queryParams.type,
					...(queryParams.search ? { search: queryParams.search } : {})
				}
			);
	
			dispatch(
				fetchArticles({})
			);
		}

	}, [queryParams]);	
};