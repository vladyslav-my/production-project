import { StateSchema } from "app/providers/StoreProvider/config/stateSchema";

export const getUserAuthData = (state: StateSchema) => state.user.authData;