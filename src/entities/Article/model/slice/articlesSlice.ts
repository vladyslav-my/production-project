import { createSlice } from "@reduxjs/toolkit";
import { ArticlesSchema } from "../types/ArticlesSchema";
import { fetchArticles } from "../../services/fetchArticles/fetchArticles";

const initialState: ArticlesSchema = {

};

export const articlesSlice = createSlice({
	name: "articles",
	initialState,
	reducers: {
		changeView: (state, action) => {
			state.isTile = action.payload;
		}
	},
	extraReducers: {
		[fetchArticles.fulfilled.type]: (state, action) => {
			state.data = action.payload;
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