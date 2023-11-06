import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useGetArticleCommentsQuery } from "../../../model/api/commentsApi";
import { CommentCard } from "../../shared/CommentCard/CommentCard";
import { CommentCard as CommentCardSkeleton } from "../../shared/CommentCard/CommentCard.skeleton";
import cls from "./ArticleCommentsTape.module.scss";

interface ArticleCommentsTapeProps {
	className?: string;
	articleId: number;
}

export const ArticleCommentsTape: FC<ArticleCommentsTapeProps> = ({ className, articleId }) => {
	const { isLoading, data } = useGetArticleCommentsQuery(articleId);

	if (isLoading) {
		return <CommentCardSkeleton />;
	}

	if (data?.length === 0) {
		return <div>No comments</div>;
	}

	return (
		<div className={classNames(cls.ArticleCommentTape, {}, [className])}>
			{data?.map((article) => <CommentCard data={article} key={article.id} />)}
		</div>
	);
};
