import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "../../model/types/Article";

export const fetchArticleDetailsById = createAsyncThunk<
Article,
number,
ThunkConfig<string>
>(
	"articleDetails/fetchArticleDetailsById",
	async (articleId, thunkApi) => {
		try {
			const response = await thunkApi.extra.api.get<Article>(`/articles/${articleId}`, {
				params: {
					_expand: "user",
				},
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
