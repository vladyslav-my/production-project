import { FC } from "react";
import cls from "./ArticleComment.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleCommentsTape } from "@/entities/Comment";
import { AddArticleComment } from "@/features/AddArticleComment";

interface ArticleCommentProps {
	className?: string;
	id: string;
}

export const ArticleComment: FC<ArticleCommentProps> = ({ className, id }) => {
	return (
		<div className={classNames(cls.ArticleComment, {}, [className])}>
			<h3 className={cls.ArticleComment__title}>Comments</h3>
			<AddArticleComment articleId={id} />
			<ArticleCommentsTape articleId={id} />
		</div>
	);
};