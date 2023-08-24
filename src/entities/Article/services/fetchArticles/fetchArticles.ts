import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "../../model/types/Article";
import { getArticlesQueryParams, getArticlesViewMode } from "../../model/selectors/articles";
import { ViewMode, articlesActions } from "../..";

export const fetchArticles = createAsyncThunk<
	Article[],
	any,
	ThunkConfig<string>
>(
	"articleDetails/fetchArticles",
	async (params, { extra, rejectWithValue, getState, dispatch }) => {

		try {
			const queryParams = getArticlesQueryParams(getState());
			const viewMode = getArticlesViewMode(getState());


			if (viewMode === ViewMode.LIST) {
				dispatch(
					articlesActions.setLimit(3)
				);
			} else if (viewMode === ViewMode.TILE) {
				dispatch(
					articlesActions.setLimit(9)
				);
			}


			const response = await extra.api.get<Article[]>("/articles", {
				params: {
					_expand: "user",
					_limit: queryParams?.limit,
					_page: queryParams?.page,
					_order: queryParams?.order,
					_sort: queryParams?.sort,
					type: queryParams?.type !== "all" ? queryParams?.type : undefined,
					q: queryParams?.search ? queryParams?.search : undefined,
					...params
				}
			});
					
			if (!response.data) {
				throw new Error();
			}

			if (queryParams?.limit && response.data.length < queryParams?.limit) {
				dispatch(
					articlesActions.setHasMore(false)
				);
			} else {
				dispatch(
					articlesActions.setHasMore(true)
				);
			}




			return response.data;
		} catch (e) {
			console.log(e);
			return rejectWithValue("error");
		}
	},
);
