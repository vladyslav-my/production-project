import { FC, useEffect } from "react";
import cls from "./Article.module.scss";
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

interface ArticleProps {
	className?: string;
	id?: string;
}

export const Article: FC<ArticleProps> = ({ className, id }) => {
	useDynamicReduce({
		articleDeteils: articleDeteilsReducer,
	}, false);

	const dispatch = useAppDispatch();
	
	const data = useSelector(getArticleDetailsData);
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const error = useSelector(getArticleDetailsError);

	useEffect(() => {
		id && dispatch(fetchArticleDetailsById(id));
	}, [dispatch, id]);

	if (error) {
		<div>Error</div>;
	}

	if (isLoading) {
		return <div>Loading</div>;
	}

	return (
		<Shell className={classNames(cls.Article, {}, [className, cls.Article_list])}>
			<div className={classNames(cls.top, {}, [cls.Article__top])}>
				<Avatar size={32} className={cls.top__avatar} />
				<span className={cls.top__user}>{data?.user.username}</span>
				<span className={cls.top__date}>{data?.createdAt}</span>
			</div>
			<h2 className={cls.Article__title}>{data?.title}</h2>
			<h3 className={cls.Article__subTitle}>{data?.subtitle}</h3>
			<Image 
				className={cls.Article__image} 
				src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg"
				height={`${420 / 732 * 100}%`}
			/>
			<ArticleBlocks data={data?.blocks} />
		</Shell>
	);
};