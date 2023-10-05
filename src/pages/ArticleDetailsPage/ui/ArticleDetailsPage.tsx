import { FC } from "react";
import cls from "./ArticleDetailsPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleView } from "@/entities/Article";
import { useParams } from "react-router-dom";
import { RouteContainer } from "@/shared/layouts/RouteContainer";
import { RouteFeaturesContainer } from "@/widgets/RouteFeaturesContainer";
import { Shell } from "@/shared/layouts/Shell";
import { ArticleComment } from "@/widgets/ArticleComment";


interface ArticleDetailsPageProps {
	className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	const { id } = useParams();

	if (id) {
		return (
			<RouteContainer 
				className={classNames(cls.ArticleDetailsPage, {}, [className])}
				Widget={<RouteFeaturesContainer />}
			>
				<Shell>
					<ArticleView id={id} />
					<ArticleComment id={id} />				
				</Shell>
			</RouteContainer>
		);

	}

	return (
		<div>not id</div>
	);
};

export default ArticleDetailsPage;