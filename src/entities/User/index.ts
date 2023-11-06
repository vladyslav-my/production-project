import { getUserAuthData } from "./selectors/getUserAuthData";
import { getUserInited } from "./selectors/getUserInited/getUserInited";
import { userActions, userReducer } from "./slice/UserSlice";
import { User, UserSchema } from "./types/UserSchema";

export {
	userActions, userReducer, getUserAuthData, getUserInited,
};

export type { User, UserSchema };
