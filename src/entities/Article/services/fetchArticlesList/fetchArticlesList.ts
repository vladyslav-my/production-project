import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import {
	getArticlesListLimitQP,
	getArticlesListOrderQP,
	getArticlesListPageQP,
	getArticlesListSearchQP,
	getArticlesListSortQP,
	getArticlesListTypeQP,
} from "../../model/selectors/articlesList";
import { Article } from "../../model/types/Article";

export const fetchArticlesList = createAsyncThunk<Article[], any, ThunkConfig<string>>(
	"articlesList/fetchArticles",
	async (params, {
		extra, rejectWithValue, getState,
	}) => {
		try {
			const limit = getArticlesListLimitQP(getState());
			const order = getArticlesListOrderQP(getState());
			const sort = getArticlesListSortQP(getState());
			const type = getArticlesListTypeQP(getState());
			const search = getArticlesListSearchQP(getState());
			const page = getArticlesListPageQP(getState());

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

			return response.data;
		} catch (e) {
			console.log(e);
			return rejectWithValue("error");
		}
	},
);
