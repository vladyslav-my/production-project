import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import {
	getArticlesListLimitQP,
	getArticlesListOrderQP,
	getArticlesListPageQP,
	getArticlesListSearchQP,
	getArticlesListSortQP,
	getArticlesListTypeQP,
	getArticlesListViewMode,
} from "../../model/selectors/articlesList";
import { articlesListActions } from "../../model/slice/articlesListSlice";
import { Article } from "../../model/types/Article";
import { ViewMode } from "../../model/types/ArticlesListSchema";

export const fetchArticlesList = createAsyncThunk<Article[], any, ThunkConfig<string>>(
	"articlesList/fetchArticles",
	async (params, {
		extra, rejectWithValue, getState, dispatch,
	}) => {
		try {
			let limit = getArticlesListLimitQP(getState());
			const order = getArticlesListOrderQP(getState());
			const sort = getArticlesListSortQP(getState());
			const type = getArticlesListTypeQP(getState());
			const search = getArticlesListSearchQP(getState());
			let page = getArticlesListPageQP(getState());
			const viewMode = getArticlesListViewMode(getState());

			if (params.replace) {
				dispatch(articlesListActions.setPage(1));
			} else {
				dispatch(articlesListActions.setPage(page + 1));
			}

			if (viewMode === ViewMode.LIST) {
				dispatch(articlesListActions.setLimit(3));
			} else if (viewMode === ViewMode.TILE) {
				dispatch(articlesListActions.setLimit(9));
			}

			page = getArticlesListPageQP(getState());
			limit = getArticlesListLimitQP(getState());

			const response = await extra.api.get<Article[]>("/articles", {
				params: {
					_expand: "user",
					_limit: limit,
					_page: page,
					_order: order,
					_sort: sort,
					type: type !== "all" ? type : undefined,
					q: search || undefined,
				},
			});

			if (!response.data) {
				throw new Error();
			}

			if (response.data.length < limit) {
				dispatch(articlesListActions.setHasMore(false));
			} else {
				dispatch(articlesListActions.setHasMore(true));
			}

			return response.data;
		} catch (e) {
			console.log(e);
			return rejectWithValue("error");
		}
	},
);
