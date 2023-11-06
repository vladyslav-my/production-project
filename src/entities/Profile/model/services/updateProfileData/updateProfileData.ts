import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { getProfileFormData } from "../../selectors/getProfileFormData/getProfileFormData";
import { IProfile, ValidateProfileError } from "../../types/IProfile";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
IProfile,
{ profileId: number },
ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async ({ profileId }, thunkAPI) => {
	try {
		const formData = getProfileFormData(thunkAPI.getState());

		const errors = validateProfileData(formData);
		if (errors.length) {
			return thunkAPI.rejectWithValue(errors);
		}

		const response = await thunkAPI.extra.api.put<IProfile>(`/profile/${profileId}`, formData);

		return response.data;
	} catch (error) {
		console.log(error);
		return thunkAPI.rejectWithValue([ValidateProfileError.SERVER_ERROR]);
	}
});
