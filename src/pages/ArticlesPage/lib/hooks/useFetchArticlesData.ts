import { fetchArticles } from "@/entities/Article";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useAllSelector } from "./useAllSelector";
import { Type } from "../../models/types/ArticlesPageSchema";
import { useEffect } from "react";
import { ArticlesPageActions } from "../../models/slice/articlesPageSlice";
import { useSearchParams } from "react-router-dom";

export const useFetchArticlesData = () => {
	const dispatch = useAppDispatch();
	const [URLSearchParams, SetURLSearchParams] = useSearchParams();


	const {
		page,
		order,
		sort,
		type,
		search,
		limit,
		inited
	} = useAllSelector();


	useEffect(() => {
		const pageParam = URLSearchParams.get("page");
		const orderParam = URLSearchParams.get("order");
		const sortParam = URLSearchParams.get("sort");
		const searchParam = URLSearchParams.get("search");
	
		if (pageParam) {
			dispatch(
				ArticlesPageActions.setPage(Number(pageParam))
			);
		}
	
		if (orderParam) {
			dispatch(
				ArticlesPageActions.setOrder(orderParam)
			);
		}
	
		if (sortParam) {
			dispatch(
				ArticlesPageActions.setSort(sortParam)
			);
		}
	
		if (searchParam) {
			dispatch(
				ArticlesPageActions.setSearch(searchParam)
			);
		}


		if (!inited) {
			dispatch(
				ArticlesPageActions.setInited(true)
			);
		}


	}, []);


	useEffect(() => {
		if (inited) {
			SetURLSearchParams(
				{
					order,
					sort,
					type,
					...(search ? { search } : {})
				}
			);
	
	
			dispatch(
				fetchArticles({
					_expand: "user",
					_limit: limit,
					_page: page,
					_order: order,
					_sort: sort,
					_type: type !== Type.ALL ? type : undefined,
					_q: search ? search : undefined
				})
			);
		} 

	}, [ 
		page,
		order,
		sort,
		type,
		search,
		limit,
		inited
	]);
};