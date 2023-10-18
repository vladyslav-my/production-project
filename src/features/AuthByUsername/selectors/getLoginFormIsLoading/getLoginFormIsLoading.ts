import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getLoginFormIsLoading = (state: StateSchema) => state.loginForm?.isLoading || false;
