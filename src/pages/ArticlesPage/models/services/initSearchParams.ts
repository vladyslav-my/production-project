import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { fetchArticles } from "@/entities/Article";
import { getArticlePageLimit, getArticlePageOrder, getArticlePagePage, getArticlePageSearch, getArticlePageSort, getArticlePageType } from "../selectors";
import { ArticlesPageActions } from "../slice/articlesPageSlice";
import { Type } from "../types/ArticlesPageSchema";


export const initSearchParams = createAsyncThunk<any, any, ThunkConfig<any>>(
	"articlesPage/initSearchParams", 
	async (searchParams, { getState, dispatch }) => {
		const [URLSearchParams, SetURLSearchParams] = searchParams;
		
		const pageParam = URLSearchParams.get("page");
		const orderParam = URLSearchParams.get("order");
		const sortParam = URLSearchParams.get("sort");
		const searchParam = URLSearchParams.get("search");

		if (pageParam) {
			dispatch(
				ArticlesPageActions.setPage(pageParam)
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
		
		const page = getArticlePagePage(getState());
		const order = getArticlePageOrder(getState());
		const sort = getArticlePageSort(getState());
		const type = getArticlePageType(getState());
		const search = getArticlePageSearch(getState());
		const limit = getArticlePageLimit(getState());

		SetURLSearchParams(
			{ 
				page,
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
);