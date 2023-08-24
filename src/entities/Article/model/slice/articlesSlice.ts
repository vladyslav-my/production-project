import { createSlice } from "@reduxjs/toolkit";
import { ArticlesSchema, Order, Sort, Type } from "../types/ArticlesSchema";
import { fetchArticles } from "../../services/fetchArticles/fetchArticles";
import { ViewMode } from "../types/ArticlesSchema";

const initialState: ArticlesSchema = {
	data: [],
	hasMore: true,
	viewMode: ViewMode.LIST,
	queryParams: {
		_inited: false,
		limit: 3,
		page: 1,
		order: Order.ASC,
		sort: Sort.CREATEDAT,
		type: Type.ALL,
		search: "",
	},
	

};

export const articlesSlice = createSlice({
	name: "articles",
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
			state.viewMode = action.payload;
		},
		setHasMore: (state, action) => {
			state.hasMore = action.payload;
		},
		removeData: (state) => {
			state.data = [];
		}
	},
	extraReducers: {
		[fetchArticles.fulfilled.type]: (state, action) => {
			state.data?.push(...action.payload);
			// state.data = action.payload;
			state.isLoading = false;
		},
		[fetchArticles.pending.type]: (state, action) => {
			state.isLoading = true;
		},
		[fetchArticles.rejected.type]: (state, action) => {
			state.error = "error";
		},
	}
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;