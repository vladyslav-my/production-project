// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticleDetailsError = (state: StateSchema) => state.articleDeteils?.error;
