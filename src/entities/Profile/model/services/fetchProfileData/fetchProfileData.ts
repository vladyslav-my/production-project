import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { IProfile, ValidateProfileError } from "../../types/IProfile";

export const fetchProfileData = createAsyncThunk<
IProfile,
{ profileId: number },
ThunkConfig<ValidateProfileError[]>
>("profile/fetchProfileData", async ({ profileId }, { rejectWithValue, extra, getState }) => {
	try {
		const response = await extra.api.get<IProfile>(`/profile/${profileId}`);

		return response.data;
	} catch (error) {
		console.log(error);
		return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
	}
});
