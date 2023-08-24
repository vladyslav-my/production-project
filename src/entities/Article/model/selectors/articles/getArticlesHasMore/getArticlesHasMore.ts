import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticlesHasMore = (state: StateSchema) => state.articles?.hasMore;