import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { Profile, ValidateProfileError } from "../../types/Profile";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
	"profile/fetchProfileData", 
	async (_, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<Profile>("/profile/1");

			return response.data;

		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
		}
	}

);