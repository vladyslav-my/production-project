import { StateSchema } from "@/app/providers/StoreProvider";
import { Order, Sort, Type } from "../../types/ArticlesListSchema";

export const getArticlesListData = (state: StateSchema) => state.articlesList?.data;

export const getArticlesListError = (state: StateSchema) => state.articlesList?.error;
export const getArticlesListHasMore = (state: StateSchema) => state.articlesList?.hasMore;
export const getArticlesListIsLoading = (state: StateSchema) => state.articlesList?.isLoading;
export const getArticlesListViewMode = (state: StateSchema) => state.articlesList?.viewMode;

export const getArticlesListLimitQP = (state: StateSchema) => state.articlesList?.queryParams.limit || 3;
export const getArticlesListOrderQP = (state: StateSchema) => state.articlesList?.queryParams.order || Order.ASC;
export const getArticlesListSortQP = (state: StateSchema) => state.articlesList?.queryParams.sort || Sort.CREATEDAT;
export const getArticlesListTypeQP = (state: StateSchema) => state.articlesList?.queryParams.type || Type.ALL;
export const getArticlesListPageQP = (state: StateSchema) => state.articlesList?.queryParams.page || 1;
export const getArticlesListSearchQP = (state: StateSchema) => state.articlesList?.queryParams.search ?? "";
