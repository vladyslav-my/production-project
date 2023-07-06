import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Profile } from "../../types/Profile";
import { getProfileFormData } from "../../selectors/getProfileFormData/getProfileFormData";


export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	"profile/updateProfileData", 
	async (_, thunkAPI) => {
		try {

			const getFormData = getProfileFormData(thunkAPI.getState());

			const response = await thunkAPI.extra.api.put<Profile>("/profile", getFormData);

			return response.data;

		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue("error");
		}
	}

);