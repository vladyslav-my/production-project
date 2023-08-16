import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticlesError = (state: StateSchema) => state.articles?.error;