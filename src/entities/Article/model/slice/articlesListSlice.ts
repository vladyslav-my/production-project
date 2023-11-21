import { createSlice } from "@reduxjs/toolkit";
import { getUrlParams } from "@/shared/lib/getUrlParams/getUrlParams";
import { updateUrlParams } from "@/shared/lib/updateUrlParams/updateUrlParams";
import { fetchArticlesList } from "../../services/fetchArticlesList/fetchArticlesList";
import {
	ArticlesListSchema, Order, Sort, Type, ViewMode,
} from "../types/ArticlesListSchema";

const initialState: ArticlesListSchema = {
	data: [],
	hasMore: true,
	isLoading: false,
	viewMode: (localStorage.getItem("ArticlesViewMode") as ViewMode) || ViewMode.LIST,
	queryParams: {
		limit: localStorage.getItem("ArticlesViewMode") as ViewMode ? 9 : 3,
		page: 1,
		order: getUrlParams("order") as Order || Order.ASC,
		sort: getUrlParams("sort") as Sort || Sort.CREATEDAT,
		type: getUrlParams("type") as Type || Type.ALL,
		search: getUrlParams("search"),
	},
};

export const articlesListSlice = createSlice({
	name: "articlesListSlice",
	initialState,
	reducers: {
		setDefaultQP: (state) => {
			updateUrlParams({
				order: state.queryParams.order,
				sort: state.queryParams.sort,
				type: state.queryParams.type,
				search: state.queryParams.search,
			});
		},
		setLimit: (state, action) => {
			state.queryParams.limit = action.payload;
		},
		setPage: (state, action) => {
			state.queryParams.page = action.payload;
		},
		setOrder: (state, action) => {
			state.queryParams.order = action.payload;
			updateUrlParams({ order: action.payload });
		},
		setSort: (state, action) => {
			state.queryParams.sort = action.payload;
			updateUrlParams({ sort: action.payload });
		},
		setType: (state, action) => {
			state.queryParams.type = action.payload;
			updateUrlParams({ type: action.payload });
		},
		setSearch: (state, action) => {
			state.queryParams.search = action.payload;
			updateUrlParams({ search: action.payload });
		},
		setViewMode: (state, action) => {
			localStorage.setItem("ArticlesViewMode", action.payload);
			state.viewMode = action.payload;
		},
		setHasMore: (state, action) => {
			state.hasMore = action.payload;
		},
	},
	extraReducers: {
		[fetchArticlesList.fulfilled.type]: (state, action) => {
			if (action.meta.arg.replace) {
				state.data = action.payload;
			} else {
				state.data?.push(...action.payload);
			}

			if (action.payload.length < state.queryParams.limit) {
				state.hasMore = false;
			} else {
				state.hasMore = true;
			}

			state.isLoading = false;
		},
		[fetchArticlesList.pending.type]: (state, action) => {
			state.isLoading = true;

			if (action.meta.arg.replace) {
				state.data = [];
			}

			if (action.meta.arg.replace) {
				state.queryParams.page = 1;
			} else {
				state.queryParams.page += 1;
			}

			if (state.viewMode === ViewMode.LIST) {
				state.queryParams.limit = 3;
			} else {
				state.queryParams.limit = 9;
			}
		},
		[fetchArticlesList.rejected.type]: (state, action) => {
			state.error = "error";
		},
	},
});

export const { actions: articlesListActions } = articlesListSlice;
export const { reducer: articlesListReducer } = articlesListSlice;
