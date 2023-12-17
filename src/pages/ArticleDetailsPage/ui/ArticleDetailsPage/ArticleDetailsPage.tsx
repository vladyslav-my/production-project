import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { RouteFeaturesContainer } from "@/widgets/RouteFeaturesContainer";
import { Rating } from "@/features/Rating";
import {
	ArticlePreviewSkeleton, ArticleView, ArticleViewSkeleton, getArticleDetailsIsLoading,
} from "@/entities/Article";
import { getArticleDetailsError } from "@/entities/Article/model/selectors/articleDetails/getArticleDetailsError/getArticleDetailsError";
import { RouteContainer } from "@/shared/layouts/RouteContainer";
import { Shell } from "@/shared/layouts/Shell";
import { classNames } from "@/shared/lib/classNames/classNames";
import { PageLoader } from "@/shared/ui/PageLoader";
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
					<Rating articleId={articleId} />
					<ArticleView articleId={articleId} />
					<ArticleComment articleId={articleId} />
				</Shell>
			</RouteContainer>
		);
	}

	return <div>not id</div>;
};

export default ArticleDetailsPage;
