import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ArticlesPageSchema, Order, Sort, Type } from "../types/ArticlesPageSchema";
// import { ArticlesSchema } from "../types/ArticlesSchema";




const initialState: ArticlesPageSchema = {
	limit: 9,
	page: 1,
	order: Order.ASC,
	sort: Sort.CREATEDAT,
	type: Type.ALL,
};





export const articlesPageSlice = createSlice({
	name: "articlesPage",
	initialState,
	reducers: {
		setLimit: (state, action) => {
			state.limit = action.payload;
		},
		setPage: (state, action) => {
			state.page = action.payload;
		},
		setOrder: (state, action) => {
			state.order = action.payload;
		},
		setSort: (state, action) => {
			state.sort = action.payload;
		},
		setType: (state, action) => {
			state.type = action.payload;
		},
		setSearch: (state, action) => {
			state.search = action.payload;
		},
	}
});

// Action creators are generated for each case reducer function
export const { actions: ArticlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;