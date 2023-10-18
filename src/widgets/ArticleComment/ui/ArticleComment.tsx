import { FC } from "react";
import { AddArticleComment } from "@/features/AddArticleComment";
import { ArticleCommentsTape } from "@/entities/Comment";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleComment.module.scss";

interface ArticleCommentProps {
	className?: string;
	articleId: number;
}

export const ArticleComment: FC<ArticleCommentProps> = ({ className, articleId }) => (
	<div className={classNames(cls.ArticleComment, {}, [className])}>
		<h3 className={cls.ArticleComment__title}>
			Comments
		</h3>
		<AddArticleComment articleId={articleId} />
		<ArticleCommentsTape articleId={articleId} />
	</div>
);
