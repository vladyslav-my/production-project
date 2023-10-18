import { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDynamicReduce } from "@/shared/lib/hooks/useDynamicReduce/useDynamicReduce";
import { useQueryParams } from "../../model/hooks/useQueryParams";
import {
	getArticlesListIsLoading, getArticlesListData, getArticlesListViewMode, getArticlesListPageQP, getArticlesListLimitQP, getArticlesListHasMore, getArticlesListInitedData,
} from "../../model/selectors/articlesList";
import { articlesListReducer } from "../../model/slice/articlesListSlice";
import { ViewMode } from "../../model/types/ArticlesListSchema";
import { fetchArticlesList } from "../../services/fetchArticlesList/fetchArticlesList";
import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import { ArticlePreview as ArticlePreviewSkeleton } from "../ArticlePreview/ArticlePreview.skeleton";
import cls from "./InfinityArticlesList.module.scss";

interface InfinityArticlesListProps {
	className?: string
}

export const InfinityArticlesList: FC<InfinityArticlesListProps> = ({ className }) => {
	useDynamicReduce({ articlesList: articlesListReducer }, false);

	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticlesListIsLoading);
	const data = useSelector(getArticlesListData);
	const viewMode = useSelector(getArticlesListViewMode);
	const limit = useSelector(getArticlesListLimitQP);
	const hasMore = useSelector(getArticlesListHasMore);
	const _initedData = useSelector(getArticlesListInitedData);

	const targetRef = useRef(null);

	useQueryParams();
	useEffect(() => {
		if (!_initedData) {
			dispatch(
				fetchArticlesList({ replace: true }),
			);
		}
	}, [dispatch, _initedData]);

	useEffect(() => {
		const { current } = targetRef;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && hasMore) {
					dispatch(
						fetchArticlesList({}),
					);
				}
			});
		});

		if (current) {
			observer.observe(current);
		}

		return () => {
			if (current) {
				observer.unobserve(current);
			}
		};
	}, [hasMore, dispatch]);

	return (
		<div
			className={classNames(cls.InfinityArticlesList, {
				[cls.InfinityArticlesList_list]: viewMode === ViewMode.LIST,
				[cls.InfinityArticlesList_tile]: viewMode === ViewMode.TILE,
			}, [className])}
		>
			<div className={cls.InfinityArticlesList__articles}>
				{
					data?.map((article) => (
						<ArticlePreview data={article} key={article.id} viewMode={viewMode} />
					))
				}
				{
					// eslint-disable-next-line react/no-array-index-key
					!!isLoading && new Array(limit).fill(undefined).map((_, i) => <ArticlePreviewSkeleton key={i} viewMode={viewMode} />)
				}
			</div>
			{!!hasMore && <div className={cls.InfinityArticlesList__articlesTrigger} ref={targetRef} />}
		</div>
	);
};
