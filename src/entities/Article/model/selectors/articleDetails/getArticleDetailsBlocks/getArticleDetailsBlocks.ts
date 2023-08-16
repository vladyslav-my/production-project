import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleDetailsBlocks = (state: StateSchema) => state.articleDeteils?.data?.blocks;