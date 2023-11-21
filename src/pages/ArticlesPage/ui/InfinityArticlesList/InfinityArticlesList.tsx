import { current } from "@reduxjs/toolkit";
import {
	FC, memo, useCallback, useEffect, useMemo,
} from "react";
import { useSelector } from "react-redux";
import { useTriggerFetch } from "@/features/TriggerFetch";
import {
	articlesListSelectors, articlesListReducer, ViewMode, fetchArticlesList, ArticlePreview, ArticlePreviewSkeleton, articlesListActions,
} from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDynamicReduce } from "@/shared/lib/hooks/useDynamicReduce/useDynamicReduce";
import cls from "./InfinityArticlesList.module.scss";

interface InfinityArticlesListProps {
	className?: string;
}

const {
	getArticlesListIsLoading,
	getArticlesListData,
	getArticlesListViewMode,
	getArticlesListLimitQP,
	getArticlesListHasMore,
	getArticlesListError,
} = articlesListSelectors;

const InfinityArticlesList: FC<InfinityArticlesListProps> = ({ className }) => {
	useDynamicReduce({ articlesList: articlesListReducer }, false);

	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticlesListIsLoading);
	const data = useSelector(getArticlesListData);
	const error = useSelector(getArticlesListError);
	const viewMode = useSelector(getArticlesListViewMode);
	const limit = useSelector(getArticlesListLimitQP);
	const hasMore = useSelector(getArticlesListHasMore);

	useMemo(() => { dispatch(articlesListActions.setDefaultQP()); }, []);

	useEffect(() => {
		dispatch(fetchArticlesList({ replace: true }));
	}, []);

	const TriggerFetch = useTriggerFetch({
		action: () => dispatch(fetchArticlesList({})),
		condition: hasMore,
	}, []);

	const ArticlePreviewList = useCallback(() => {
		return data?.map((article) => (
			<ArticlePreview data={article} key={article.id} viewMode={viewMode} />
		));
	}, [data, viewMode]);

	const ArticlePreviewSkeletons = useCallback(() => {
		// eslint-disable-next-line react/no-array-index-key
		return new Array(limit).fill(undefined).map((_, i) => <ArticlePreviewSkeleton key={i} viewMode={viewMode} />);
	}, [viewMode, limit]);

	if (error) {
		return <div>error</div>;
	}

	if (data?.length === 0 && !isLoading) {
		return <div>Немає</div>;
	}

	return (
		<div
			className={classNames(cls.InfinityArticlesList, {
				[cls.InfinityArticlesList_list]: viewMode === ViewMode.LIST,
				[cls.InfinityArticlesList_tile]: viewMode === ViewMode.TILE,
			}, [className])}
		>
			<div className={cls.InfinityArticlesList__articles}>
				<ArticlePreviewList />
				{isLoading ? <ArticlePreviewSkeletons /> : null}
			</div>
			<TriggerFetch />
		</div>
	);
};

export default memo(InfinityArticlesList);
