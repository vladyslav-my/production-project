import { FC, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { RouteFeaturesContainer } from "@/widgets/RouteFeaturesContainer";
import { Rating } from "@/features/Rating";
import {
	ArticleView, ArticleViewSkeleton, getArticleDetailsIsLoading,
	getArticleDetailsError,
} from "@/entities/Article";
import { fetchArticleDetailsById } from "@/entities/Article/services/fetchArticleById/fetchArticleDetailsById";
import { RouteContainer } from "@/shared/layouts/RouteContainer";
import { Shell } from "@/shared/layouts/Shell";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleComment } from "../ArticleComment";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
	className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	const { id } = useParams();
	const articleId = useMemo(() => Number(id), [id]);
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const error = useSelector(getArticleDetailsError);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchArticleDetailsById(articleId));
	}, []);

	if (error) {
		return <NotFoundPage />;
	}

	if (isLoading) {
		return (
			<RouteContainer
				className={classNames(cls.ArticleDetailsPage, {}, [className])}
			>
				<Shell>
					<ArticleViewSkeleton />
				</Shell>
			</RouteContainer>
		);
	}

	if (articleId) {
		return (
			<RouteContainer
				Widget={<RouteFeaturesContainer />}
				className={classNames(cls.ArticleDetailsPage, {}, [className])}
			>
				<Shell>
					<ArticleView />
					<Rating articleId={articleId} />
					<ArticleComment articleId={articleId} />
				</Shell>
			</RouteContainer>
		);
	}

	return <div>not id</div>;
};

export default ArticleDetailsPage;
