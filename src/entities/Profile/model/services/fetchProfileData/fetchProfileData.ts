import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Profile } from "../../types/Profile";


export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	"profile/fetchProfileData", 
	async (_, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<Profile>("/profile");

			return response.data;

		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue("error");
		}
	}

);