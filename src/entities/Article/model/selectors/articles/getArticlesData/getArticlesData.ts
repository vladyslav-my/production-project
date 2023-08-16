import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticlesData = (state: StateSchema) => state.articles?.data;