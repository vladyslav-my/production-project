import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleDetailsData = (state: StateSchema) => state.articleDeteils?.data;