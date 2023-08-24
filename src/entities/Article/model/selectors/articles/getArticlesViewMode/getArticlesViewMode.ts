import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticlesViewMode = (state: StateSchema) => state.articles?.viewMode;