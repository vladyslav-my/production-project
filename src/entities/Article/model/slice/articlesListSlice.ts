import { createSlice } from "@reduxjs/toolkit";
import { fetchArticlesList } from "../../services/fetchArticlesList/fetchArticlesList";
import {
	ArticlesListSchema, Order, Sort, Type,
	ViewMode,
} from "../types/ArticlesListSchema";

const initialState: ArticlesListSchema = {
	_initedData: false,
	data: [],
	hasMore: true,
	viewMode: localStorage.getItem("ArticlesViewMode") as ViewMode || ViewMode.LIST,
	queryParams: {
		limit: 3,
		page: 1,
		order: Order.ASC,
		sort: Sort.CREATEDAT,
		type: Type.ALL,
		search: "",
		_inited: false,
	},
};

export const articlesListSlice = createSlice({
	name: "articlesListSlice",
	initialState,
	reducers: {
		setLimit: (state, action) => {
			state.queryParams.limit = action.payload;
		},
		setPage: (state, action) => {
			state.queryParams.page = action.payload;
		},
		setOrder: (state, action) => {
			state.queryParams.order = action.payload;
		},
		setSort: (state, action) => {
			state.queryParams.sort = action.payload;
		},
		setType: (state, action) => {
			state.queryParams.type = action.payload;
		},
		setSearch: (state, action) => {
			state.queryParams.search = action.payload;
		},
		setInited: (state, action) => {
			state.queryParams._inited = action.payload;
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
			state._initedData = true;

			if (action.meta.arg.replace) {
				state.data = action.payload;
			} else {
				state.data?.push(...action.payload);
			}

			state.isLoading = false;
		},
		[fetchArticlesList.pending.type]: (state, action) => {
			state.isLoading = true;
		},
		[fetchArticlesList.rejected.type]: (state, action) => {
			state.error = "error";
		},
	},
});

export const { actions: articlesListActions } = articlesListSlice;
export const { reducer: articlesListReducer } = articlesListSlice;
