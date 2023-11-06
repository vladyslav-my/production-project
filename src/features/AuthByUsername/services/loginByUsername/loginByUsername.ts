import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";
import { userActions, User } from "@/entities/User";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
	"loginForm/loginByUsername",
	async (authData, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.post<User>("/login", authData);

			if (!response.data) {
				throw new Error();
			}

			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
			thunkAPI.dispatch(userActions.setAuthData(response.data));

			return response.data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue("error");
		}
	},
);
