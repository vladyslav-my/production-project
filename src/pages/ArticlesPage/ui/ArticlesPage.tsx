import { FC, useEffect } from "react";
import cls from "./ArticlesPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticlePreview, ArticlePreviewSkeleton, articlesReducer } from "@/entities/Article";
import { useDynamicReduce } from "@/shared/lib/hooks/useDynamicReduce/useDynamicReduce";
import { articlesSelectors } from "@/entities/Article";
import { useSelector } from "react-redux";
import { useFetchArticlesData } from "../lib/hooks/useFetchArticlesData";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticlesPageActions } from "../models/slice/articlesPageSlice";
import { getArticlePagePage } from "../models/selectors";

interface ArticlePageProps {
	className?: string
}

const ArticlesPage: FC<ArticlePageProps> = ({ className }) => {	
	const dispatch = useAppDispatch();
	useFetchArticlesData();
	const page = useSelector(getArticlePagePage);
	useDynamicReduce({
		articles: articlesReducer
	}, true);
	
	const data = useSelector(articlesSelectors.getArticlesData);
	const isLoading = useSelector(articlesSelectors.getArticlesIsLoading);



	return (
		
		<div className={classNames(cls.ArticlesPage, {}, [className])}>
			{
				data?.map((article) => (
					<ArticlePreview key={article.id} data={article} />
				))
			}
			{
				isLoading ? <ArticlePreviewSkeleton /> : null
			}
		</div>
	);
};

export default ArticlesPage;