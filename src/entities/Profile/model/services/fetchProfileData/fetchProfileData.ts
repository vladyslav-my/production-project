import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { IProfile, ValidateProfileError } from "../../types/IProfile";

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<ValidateProfileError[]>>(
	"profile/fetchProfileData",
	async (_, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<IProfile>("/profile/1");

			return response.data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
		}
	},

);
