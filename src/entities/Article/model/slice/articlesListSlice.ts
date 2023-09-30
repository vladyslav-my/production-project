import { createSlice } from "@reduxjs/toolkit";
import { ArticlesListSchema, Order, Sort, Type } from "../types/ArticlesListSchema";
import { fetchArticlesList } from "../../services/fetchArticlesList/fetchArticlesList";
import { ViewMode } from "../types/ArticlesListSchema";

const initialState: ArticlesListSchema = {
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
	}
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
		[fetchArticlesList.fulfilled.type]: (state, action) => {
			if (action.meta.arg.replace) {
				console.log("replace");
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
	}
});

export const { actions: articlesListActions } = articlesListSlice;
export const { reducer: articlesListReducer } = articlesListSlice;