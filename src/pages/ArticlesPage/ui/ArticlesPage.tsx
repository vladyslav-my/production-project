import { FC, useEffect } from "react";
import cls from "./ArticlesPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticlePreview, ArticlePreviewSkeleton, articlesReducer } from "@/entities/Article";
// import { PostLayout, PostLayoutSkeleton } from "@/shared/layouts/PostLayout";
import { fetchArticles } from "@/entities/Article";
import { useDynamicReduce } from "@/shared/lib/hooks/useDynamicReduce/useDynamicReduce";
// import { getArticlesData } from "@/entities/Article/model/selectors/articles/getArticlesData/getArticlesData";
import { articlesSelectors } from "@/entities/Article";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { initSearchParams } from "../models/services/initSearchParams";
import { useSearchParams } from "react-router-dom";

interface ArticlePageProps {
	className?: string
}

const ArticlesPage: FC<ArticlePageProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const searchParams = useSearchParams();
	
	useDynamicReduce({
		articles: articlesReducer
	}, true);
	
	useEffect(() => {		
		dispatch(
			initSearchParams(searchParams)
		);
	
	}, []);

	const data = useSelector(articlesSelectors.getArticlesData);
	const isLoading = useSelector(articlesSelectors.getArticlesIsLoading);


	if (isLoading) {
		return <ArticlePreviewSkeleton />;
	}

	return (
		<div className={classNames(cls.ArticlesPage, {}, [className])}>
			{
				data?.map((article) => (
					<ArticlePreview key={article.id} data={article} />
				))
			}
		</div>
	);
};

export default ArticlesPage;