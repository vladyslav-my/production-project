import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticlesQueryParams = (state: StateSchema) => state.articles?.queryParams;