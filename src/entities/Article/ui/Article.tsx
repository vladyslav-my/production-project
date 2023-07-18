import { FC } from "react";
import cls from "./Article.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ArticleProps {
	className?: string
}

export const Article: FC<ArticleProps> = ({ className }) => {
	return (
		<div className={classNames(cls.Article, {}, [className])}>
			
		</div>
	);
};