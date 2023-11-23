import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { IProfile } from "../../types/IProfile";

export const fetchProfileData = createAsyncThunk<
IProfile,
{ profileId: number },
ThunkConfig<any>
>("profile/fetchProfileData", async ({ profileId }, { rejectWithValue, extra, getState }) => {
	try {
		const response = await extra.api.get<IProfile>(`/profile/${profileId}`);

		return response.data;
	} catch (error) {
		console.log(error);
		// @ts-ignore
		const { status, statusText } = error.response;
		return rejectWithValue({ status, statusText });
	}
});
