import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDeteils?.isLoading;