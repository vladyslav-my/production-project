import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getLoginFormError = (state: StateSchema) => state.loginForm?.error;
