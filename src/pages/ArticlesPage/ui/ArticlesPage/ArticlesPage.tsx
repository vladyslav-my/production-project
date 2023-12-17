import {
	FC, memo, useCallback, useMemo, useState,
} from "react";
import { useMediaQuery } from "react-responsive";
import { ChangeArticlesView } from "@/features/ChangeArticleView";
import { RouteContainer } from "@/shared/layouts/RouteContainer";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Devices } from "@/shared/lib/mediaQuery";
import { ArticlesFilters } from "../ArticlesFilters";
import InfinityArticlesList from "../InfinityArticlesList/InfinityArticlesList";
import cls from "./ArticlesPage.module.scss";

interface ArticlePageProps {
	className?: string;
}

const ArticlesPage: FC<ArticlePageProps> = ({ className }) => {
	const isLargeDesktop = useMediaQuery({ minWidth: Devices.LARGE_DESKTOP });

	return (
		<RouteContainer
			Feature={isLargeDesktop && <ChangeArticlesView className={cls.ChangeArticlesView__feature} />}
			Widget={<ArticlesFilters />}
			className={classNames(cls.ArticlesPage, {}, [className])}
		>
			<InfinityArticlesList />
		</RouteContainer>
	);
};

export default memo(ArticlesPage);
