import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const getLoginFormPassword = (state: StateSchema) => state.loginForm?.password || "";
