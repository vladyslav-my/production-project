import { FC, useEffect } from "react";
import cls from "./ArticleView.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Shell } from "@/shared/layouts/Shell";
import { useSelector } from "react-redux";
import { fetchArticleDetailsById } from "../../services/fetchArticleById/fetchArticleDetailsById";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDynamicReduce } from "@/shared/lib/hooks/useDynamicReduce/useDynamicReduce";
import { articleDeteilsReducer } from "../../model/slice/articleDeteilsSlice";
import { Avatar } from "@/shared/ui/Avatar";
import { Image } from "@/shared/ui/Image";
import ArticleBlocks from "../ArticleBlocks/ArticleBlocks";
import { getArticleDetailsData } from "../../model/selectors/articleDetails/getArticleDetailsData/getArticleDetailsData";
import { getArticleDetailsIsLoading } from "../../model/selectors/articleDetails/getArticleDetailsIsLoading/getArticleDetailsIsLoading";
import { getArticleDetailsError } from "../../model/selectors/articleDetails/getArticleDetailsError/getArticleDetailsError";
import { ArticleView as ArticleViewSkeleton } from "./ArticleView.skeleton";

interface ArticleViewProps {
	className?: string;
	articleId: number;
}

export const ArticleView: FC<ArticleViewProps> = ({ className, articleId }) => {
	useDynamicReduce({
		articleDeteils: articleDeteilsReducer,
	}, false);

	const dispatch = useAppDispatch();
	
	const data = useSelector(getArticleDetailsData);
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const error = useSelector(getArticleDetailsError);

	useEffect(() => {
		dispatch(fetchArticleDetailsById(articleId));
	}, [dispatch, articleId]);

	if (error) {
		<div>Error</div>;
	}

	if (isLoading) {
		return <ArticleViewSkeleton />;
	}


	return (
		<div className={classNames(cls.ArticleView, {}, [className, cls.ArticleView_list])}>
			<div className={classNames(cls.top, {}, [cls.ArticleView_top])}>
				<Avatar size={32} className={cls.top__avatar} />
				<span className={cls.top__user}>{data?.user.username}</span>
				<span className={cls.top__date}>{data?.createdAt}</span>
			</div>
			<h2 className={cls.ArticleView__title}>{data?.title}</h2>
			<h3 className={cls.ArticleView__subTitle}>{data?.subtitle}</h3>
			<Image 
				className={cls.ArticleView__image} 
				src={data?.img}
				height={`${420 / 732 * 100}%`}
			/>
			<ArticleBlocks data={data?.blocks} />
		</div>
	);
};