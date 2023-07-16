import { createSlice } from "@reduxjs/toolkit";
import { ArticleSchema } from "../types/ArticleSchema";


const initialState: ArticleSchema = {
	
};

export const articleSlice = createSlice({
	name: "article",
	initialState,
	reducers: {

	},
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;