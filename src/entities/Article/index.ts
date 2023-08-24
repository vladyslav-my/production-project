import { Article } from "./ui/Article/Article";
import { articleDeteilsReducer } from "./model/slice/articleDeteilsSlice";
import { ArticleDetailsSchema } from "./model/types/ArticleDetailsSchema";
import { articlesReducer, articlesActions } from "./model/slice/articlesSlice";
import { ArticlesSchema, ViewMode } from "./model/types/ArticlesSchema";
import { fetchArticles } from "./services/fetchArticles/fetchArticles";
import { ArticlePreview } from "./ui/ArticlePreview/ArticlePreview";
import { ArticlePreview as ArticlePreviewSkeleton } from "./ui/ArticlePreview/ArticlePreview.skeleton";
import * as articlesSelectors from "./model/selectors/articles";

export {
	Article,
	articlesActions,
	articleDeteilsReducer,
	articlesReducer,
	fetchArticles,
	type ArticleDetailsSchema,
	type ArticlesSchema,
	ViewMode,
	ArticlePreview,
	ArticlePreviewSkeleton,
	articlesSelectors,
};