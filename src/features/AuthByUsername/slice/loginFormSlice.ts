import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginFormSchema } from "../types/LoginFormSchema";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";


const initialState: LoginFormSchema = {
	username: "",
	password: "",
	isLoading: false
};

export const loginFormSlice = createSlice({
	name: "loginFormSlice",
	initialState,
	reducers: {
		setUsername: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginByUsername.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(loginByUsername.fulfilled, (state, action) => {
				state.isLoading = false;
			})
			.addCase(loginByUsername.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

// Action creators are generated for each case reducer function
export const { actions: loginFormActions } = loginFormSlice;
export const { reducer: loginFormReducer } = loginFormSlice;