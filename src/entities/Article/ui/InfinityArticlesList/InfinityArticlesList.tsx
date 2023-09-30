import { FC, useEffect, useRef } from "react";
import cls from "./InfinityArticlesList.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticlePreview } from "../ArticlePreview/ArticlePreview";
import { ArticlePreview as ArticlePreviewSkeleton } from "../ArticlePreview/ArticlePreview.skeleton";
import { useSelector } from "react-redux";
import { useDynamicReduce } from "@/shared/lib/hooks/useDynamicReduce/useDynamicReduce";
import { articlesListReducer } from "../../model/slice/articlesListSlice";
import { ViewMode } from "../../model/types/ArticlesListSchema";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getArticlesListIsLoading, getArticlesListData, getArticlesListViewMode, getArticlesListPageQP, getArticlesListLimitQP, getArticlesListHasMore } from "../../model/selectors/articlesList";
import { fetchArticlesList } from "../../services/fetchArticlesList/fetchArticlesList";
import { useQueryParams } from "../../model/hooks/useQueryParams";

interface InfinityArticlesList {
	className?: string
}

export const InfinityArticlesList: FC<InfinityArticlesList> = ({ className }) => {
	useDynamicReduce({ articlesList: articlesListReducer }, false);

	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticlesListIsLoading);
	const data = useSelector(getArticlesListData);
	const viewMode = useSelector(getArticlesListViewMode);
	const limit = useSelector(getArticlesListLimitQP);
	const hasMore = useSelector(getArticlesListHasMore);


	const targetRef = useRef(null);
	
	useQueryParams();
	useEffect(() => {
		dispatch(
			fetchArticlesList({ replace: true })
		);
	}, []);
	

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					hasMore && dispatch(
						fetchArticlesList({})
					);					
				}
			});
		});
	
		if (targetRef.current) {
			observer.observe(targetRef.current);
		}
	
		return () => {
			if (targetRef.current) {
				observer.unobserve(targetRef.current);
			}
		};
	}, [hasMore]);
 
	


	return (
		<div className={classNames(cls.InfinityArticlesList, {
			[cls.InfinityArticlesList_list]: viewMode === ViewMode.LIST,
			[cls.InfinityArticlesList_tile]: viewMode === ViewMode.TILE
		}, [className])}>
			<div className={cls.InfinityArticlesList__articles}>
				{
					data?.map((article) => (
						<ArticlePreview key={article.id} data={article} viewMode={viewMode} />
					))
				}
				{
					isLoading ?
						new Array(limit).fill(undefined).map((_, i) => <ArticlePreviewSkeleton key={i} viewMode={viewMode} />)
						: null
				}
			</div>
			{hasMore && <div ref={targetRef} className={cls.InfinityArticlesList__articlesTrigger} />}
		</div>
	);
};