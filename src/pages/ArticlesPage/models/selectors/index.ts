import { StateSchema } from "@/app/providers/StoreProvider";

export const getArticlePageLimit = (state: StateSchema) => state.articlesPage.limit;
export const getArticlePagePage = (state: StateSchema) => state.articlesPage.page;
export const getArticlePageOrder = (state: StateSchema) => state.articlesPage.order;
export const getArticlePageSort = (state: StateSchema) => state.articlesPage.sort;
export const getArticlePageSearch = (state: StateSchema) => state.articlesPage.search;
export const getArticlePageType = (state: StateSchema) => state.articlesPage.type;
export const getArticlePageInited = (state: StateSchema) => state.articlesPage._inited;
