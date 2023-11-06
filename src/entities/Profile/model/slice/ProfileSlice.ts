import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { IProfile, IProfileSchema } from "../types/IProfile";

const initialState: IProfileSchema = {
	readonly: true,
	isLoading: false,
	isMe: false,
};

export const ProfileSlice = createSlice({
	name: "Profile",
	initialState,
	reducers: {
		setReadOnly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
		},
		cancelEdit: (state) => {
			state.readonly = true;
			state.formData = state.data;
		},
		setFormData: (state, action: PayloadAction<IProfile>) => {
			state.formData = {
				...state.data,
				...action.payload,
			};
		},
		setIsMe: (state, action: PayloadAction<boolean>) => {
			state.isMe = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.formData = action.payload;
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			.addCase(updateProfileData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.formData = action.payload;
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

// Action creators are generated for each case reducer function
export const { actions: ProfileActions } = ProfileSlice;
export const { reducer: ProfileReducer } = ProfileSlice;
