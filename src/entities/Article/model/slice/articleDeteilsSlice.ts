import { createSlice } from "@reduxjs/toolkit";
import { fetchArticleDetailsById } from "../../services/fetchArticleById/fetchArticleDetailsById";
import { ArticleDetailsSchema } from "../types/ArticleDetailsSchema";

const initialState: ArticleDetailsSchema = {};

export const articleDeteilsSlice = createSlice({
	name: "articleDeteils",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchArticleDetailsById.fulfilled.type]: (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
		},
		[fetchArticleDetailsById.pending.type]: (state, action) => {
			state.isLoading = true;
		},
		[fetchArticleDetailsById.rejected.type]: (state, action) => {
			state.error = "error";
		},
	},
});

export const { actions: articleDeteilsActions } = articleDeteilsSlice;

export const { reducer: articleDeteilsReducer } = articleDeteilsSlice;
