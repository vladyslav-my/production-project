import { FC } from "react";
import cls from "./ArticleDetailsPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleView } from "@/entities/Article";
import { useParams } from "react-router-dom";
import { RouteContainer } from "@/shared/layouts/RouteContainer";
import { RouteFeaturesContainer } from "@/widgets/RouteFeaturesContainer";

interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	const { id } = useParams();
	return (
		<RouteContainer 
			className={classNames(cls.ArticleDetailsPage, {}, [className])}
			Widget={<RouteFeaturesContainer />}
		>
			<ArticleView id={id} />
		</RouteContainer>
	);
};

export default ArticleDetailsPage;