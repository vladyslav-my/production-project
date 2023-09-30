import { FC } from "react";
import cls from "./ArticlesPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticlesFilters } from "@/widgets/ArticlesFilters";
import { InfinityArticlesList } from "@/entities/Article";
import { ChangeArticlesView } from "@/features/ChangeArticleView";
import { useMediaQuery } from "react-responsive";
import { RouteContainer } from "@/shared/layouts/RouteContainer";
import { useDynamicReduce } from "@/shared/lib/hooks/useDynamicReduce/useDynamicReduce";
import { articlesListReducer } from "@/entities/Article/model/slice/articlesListSlice";

interface ArticlePageProps {
	className?: string
}

const ArticlesPage: FC<ArticlePageProps> = ({ className }) => {
	
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