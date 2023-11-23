import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { IProfile, IProfileSchema } from "../types/IProfile";

const initialState: IProfileSchema = {
	data: {},
	formData: {},
	readonly: true,
	isFetching: true,
	isLoading: false,
	isMe: false,
	validateError: [],
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
			state.validateError = [];
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
				state.isFetching = true;
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
				state.isFetching = false;
				state.data = action.payload;
				state.formData = action.payload;
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isFetching = false;
				state.error = action.payload;
			})

			.addCase(updateProfileData.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.formData = action.payload;
				state.readonly = true;
				state.validateError = [];
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.validateError = action.payload;
			});
	},
});

// Action creators are generated for each case reducer function
export const { actions: ProfileActions } = ProfileSlice;
export const { reducer: ProfileReducer } = ProfileSlice;
