import { FC } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useDynamicReduce } from "@/shared/lib/hooks/useDynamicReduce/useDynamicReduce";
import { Avatar } from "@/shared/ui/Avatar";
import { Img } from "@/shared/ui/Img";
import { getArticleDetailsData } from "../../model/selectors/articleDetails/getArticleDetailsData/getArticleDetailsData";
import { articleDeteilsReducer } from "../../model/slice/articleDeteilsSlice";
import ArticleBlocks from "../ArticleBlocks/ArticleBlocks";
import cls from "./ArticleView.module.scss";

interface ArticleViewProps {
	className?: string;
}

export const ArticleView: FC<ArticleViewProps> = ({ className }) => {
	useDynamicReduce(
		{
			articleDeteils: articleDeteilsReducer,
		},
		false,
	);

	const data = useSelector(getArticleDetailsData);
	return (
		<div className={classNames(cls.ArticleView, {}, [className, cls.ArticleView_list])}>
			<div className={classNames(cls.top, {}, [cls.ArticleView_top])}>
				<Avatar className={cls.top__avatar} size={32} src={data?.user.avatar} />
				<span className={cls.top__user}>{data?.user.username}</span>
				<span className={cls.top__date}>{data?.createdAt}</span>
			</div>
			<h2 className={cls.ArticleView__title}>{data?.title}</h2>
			<h3 className={cls.ArticleView__subTitle}>{data?.subtitle}</h3>
			<Img
				className={cls.ArticleView__image}
				width={732}
				height={420}
				src={data?.img}
			/>
			<ArticleBlocks data={data?.blocks} />
		</div>
	);
};
