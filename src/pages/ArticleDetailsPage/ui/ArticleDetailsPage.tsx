import { FC, useMemo } from "react";
import { useParams } from "react-router-dom";
import { ArticleComment } from "@/widgets/ArticleComment";
import { RouteFeaturesContainer } from "@/widgets/RouteFeaturesContainer";
import { Rating } from "@/features/Rating";
import { ArticleView } from "@/entities/Article";
import { RouteContainer } from "@/shared/layouts/RouteContainer";
import { Shell } from "@/shared/layouts/Shell";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
	className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	const { id } = useParams();
	const articleId = useMemo(() => Number(id), [id]);

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
