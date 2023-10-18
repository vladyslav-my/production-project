import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Shell } from "@/shared/layouts/Shell";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDynamicReduce } from "@/shared/lib/hooks/useDynamicReduce/useDynamicReduce";
import { Avatar } from "@/shared/ui/Avatar";
import { Image } from "@/shared/ui/Image";
import { getArticleDetailsData } from "../../model/selectors/articleDetails/getArticleDetailsData/getArticleDetailsData";
import { getArticleDetailsError } from "../../model/selectors/articleDetails/getArticleDetailsError/getArticleDetailsError";
import { getArticleDetailsIsLoading } from "../../model/selectors/articleDetails/getArticleDetailsIsLoading/getArticleDetailsIsLoading";
import { articleDeteilsReducer } from "../../model/slice/articleDeteilsSlice";
import { fetchArticleDetailsById } from "../../services/fetchArticleById/fetchArticleDetailsById";
import ArticleBlocks from "../ArticleBlocks/ArticleBlocks";
import cls from "./ArticleView.module.scss";
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
		<div>
			Error
		</div>;
	}

	if (isLoading) {
		return <ArticleViewSkeleton />;
	}

	return (
		<div className={classNames(cls.ArticleView, {}, [className, cls.ArticleView_list])}>
			<div className={classNames(cls.top, {}, [cls.ArticleView_top])}>
				<Avatar className={cls.top__avatar} size={32} />
				<span className={cls.top__user}>
					{data?.user.username}
				</span>
				<span className={cls.top__date}>
					{data?.createdAt}
				</span>
			</div>
			<h2 className={cls.ArticleView__title}>
				{data?.title}
			</h2>
			<h3 className={cls.ArticleView__subTitle}>
				{data?.subtitle}
			</h3>
			<Image
				className={cls.ArticleView__image}
				height={`${(420 / 732) * 100}%`}
				src={data?.img}
			/>
			<ArticleBlocks data={data?.blocks} />
		</div>
	);
};
