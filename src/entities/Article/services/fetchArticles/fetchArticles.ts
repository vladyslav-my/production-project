import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "../../model/types/Article";

export const fetchArticles = createAsyncThunk<
	Article[],
	any,
	ThunkConfig<string>
>(
	"articleDetails/fetchArticles",
	async (params, thunkApi) => {

		try {
			const response = await thunkApi.extra.api.get<Article[]>("/articles", {
				params
			});
					
			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (e) {
			console.log(e);
			return thunkApi.rejectWithValue("error");
		}
	},
);
