import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";

export const getUserAuthData = (state: StateSchema) => state.user.authData;