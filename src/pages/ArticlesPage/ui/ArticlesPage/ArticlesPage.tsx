import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { ArticlesFilters } from "@/widgets/ArticlesFilters";
import { ChangeArticlesView } from "@/features/ChangeArticleView";
import { InfinityArticlesList } from "@/entities/Article";
import { RouteContainer } from "@/shared/layouts/RouteContainer";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";

interface ArticlePageProps {
	className?: string;
}

const ArticlesPage: FC<ArticlePageProps> = ({ className }) => {
	const isTablet = useMediaQuery({ minWidth: 1800 });

	return (
		<RouteContainer
			Feature={!!isTablet && <ChangeArticlesView className={cls.ChangeArticlesView__feature} />}
			Widget={<ArticlesFilters />}
			className={classNames(cls.ArticlesPage, {}, [className])}
		>
			<InfinityArticlesList />
		</RouteContainer>
	);
};

export default ArticlesPage;
