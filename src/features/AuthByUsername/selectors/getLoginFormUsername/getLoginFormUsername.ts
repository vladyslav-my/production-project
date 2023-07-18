import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getLoginFormUsername = (state: StateSchema) => state.loginForm?.username || "";