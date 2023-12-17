import { getArticleDetailsIsLoading } from "./model/selectors/articleDetails/getArticleDetailsIsLoading/getArticleDetailsIsLoading";
import * as articlesListSelectors from "./model/selectors/articlesList";
import { articlesListActions, articlesListReducer } from "./model/slice/articlesListSlice";
import { Article } from "./model/types/Article";
import { ArticleDetailsSchema } from "./model/types/ArticleDetailsSchema";
import { ArticlesListSchema, ViewMode } from "./model/types/ArticlesListSchema";
import { fetchArticlesList } from "./services/fetchArticlesList/fetchArticlesList";
import { ArticlePreview } from "./ui/ArticlePreview/ArticlePreview";
import { ArticlePreview as ArticlePreviewSkeleton } from "./ui/ArticlePreview/ArticlePreview.skeleton";
import { ArticleView } from "./ui/ArticleView/ArticleView";
import { ArticleView as ArticleViewSkeleton } from "./ui/ArticleView/ArticleView.skeleton";

export type { Article, ArticleDetailsSchema, ArticlesListSchema };

export {
	ViewMode,
	articlesListActions,
	articlesListReducer,
	articlesListSelectors,
	fetchArticlesList,
	ArticlePreview,
	ArticlePreviewSkeleton,
	ArticleView,
	ArticleViewSkeleton,
	getArticleDetailsIsLoading,
};
