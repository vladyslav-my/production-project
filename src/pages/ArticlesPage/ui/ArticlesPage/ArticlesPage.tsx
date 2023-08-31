import { FC } from "react";
import cls from "./ArticlesPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticlePreview, ArticlePreviewSkeleton, articlesActions, articlesReducer } from "@/entities/Article";
import { useDynamicReduce } from "@/shared/lib/hooks/useDynamicReduce/useDynamicReduce";
import { articlesSelectors } from "@/entities/Article";
import { useDispatch, useSelector } from "react-redux";
import { useFetchArticlesData } from "../../lib/hooks/useFetchArticlesData";
import { Page } from "@/shared/layouts/Page";
import { ArticlesFilters } from "@/widgets/ArticlesFilters";
import { InfinityArticlesList } from "@/widgets/InfinityArticlesList/ui/InfinityArticlesList";
import { ChangeArticlesView } from "@/features/ChangeArticleView";
import { Devices, useAppMediaQuary } from "@/shared/lib/mediaQuery";
import { useMediaQuery } from "react-responsive";
import { Navbar } from "@/widgets/Navbar";
import { Shell } from "@/shared/layouts/Shell";
import { RouteContainer } from "@/shared/layouts/RouteContainer";

interface ArticlePageProps {
	className?: string
}

const ArticlesPage: FC<ArticlePageProps> = ({ className }) => {
	const dispatch = useDispatch();
	useDynamicReduce({
		articles: articlesReducer
	}, true);

	useFetchArticlesData();
	const isTablet = useMediaQuery({ minWidth: 1800 });

	return (
		<RouteContainer 
			className={classNames(cls.ArticlesPage, {}, [className])} 
			Widget={
				<ArticlesFilters />
			}
			Feature={
				isTablet && <ChangeArticlesView className={cls.ChangeArticlesView__feature} />
			}
		>
			
			<InfinityArticlesList />
		</RouteContainer>
	);
};

export default ArticlesPage;