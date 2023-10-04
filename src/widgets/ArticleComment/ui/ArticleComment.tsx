import { FC } from "react";
import cls from "./ArticleComment.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleCommentsTape } from "@/entities/Comment";
import { AddComment } from "@/features/AddComment";

interface ArticleCommentProps {
	className?: string
}

export const ArticleComment: FC<ArticleCommentProps> = ({ className }) => {
	return (
		<div className={classNames(cls.ArticleComment, {}, [className])}>
			<h3 className={cls.ArticleComment__title}>Коментарі</h3>
			<AddComment />
			<ArticleCommentsTape />
		</div>
	);
};