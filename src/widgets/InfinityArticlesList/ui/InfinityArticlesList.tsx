import { FC, useEffect, useRef } from "react";
import cls from "./InfinityArticlesList.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticlePreviewSkeleton, articlesActions } from "@/entities/Article";
import { ArticlePreview } from "@/entities/Article";
import { useSelector } from "react-redux";
import { articlesSelectors } from "@/entities/Article";
import { ViewMode } from "@/entities/Article";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

interface InfinityArticlesList {
	className?: string
}

export const InfinityArticlesList: FC<InfinityArticlesList> = ({ className }) => {
	const dispatch = useAppDispatch();
	const isLoading = useSelector(articlesSelectors.getArticlesIsLoading);
	const data = useSelector(articlesSelectors.getArticlesData);
	const viewMode = useSelector(articlesSelectors.getArticlesViewMode);
	const queryParams = useSelector(articlesSelectors.getArticlesQueryParams);


	const targetRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					
					dispatch(
						//@ts-ignore
						articlesActions.setPage(queryParams?.page + 1)
					);
					// entry.target.classList.add("visible");
				} else {
					// Элемент перестал быть видимым
					// entry.target.classList.remove("visible");
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
	}, []);
 
	


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
						new Array(queryParams?.limit).fill(undefined).map((_, i) => <ArticlePreviewSkeleton key={i} viewMode={viewMode} />)
						: null
				}
			</div>

			
			<div ref={targetRef} onClick={
				() => {
					queryParams && dispatch(
						articlesActions.setPage(queryParams.page + 1)
					);
				}
			} className={cls.InfinityArticlesList__articlesTrigger}></div>
		</div>
	);
};