import { FC } from "react";
import cls from "./ArticleCommentsTape.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useGetArticleCommentsQuery } from "@/entities/Comment/model/api/commentsApi";
import { CommentCard } from "../../shared/CommentCard/CommentCard";

interface ArticleCommentsTapeProps {
	className?: string;
}


export const ArticleCommentsTape: FC<ArticleCommentsTapeProps> = ({ className }) => {
	const { isLoading, isError, data } = useGetArticleCommentsQuery();

	return (
		<div className={classNames(cls.ArticleCommentTape, {}, [className])}>
			{
				data?.map((article) => {
					return (
						<CommentCard data={article} key={article.id} />
					);
				})
			}
		</div>
	);
};