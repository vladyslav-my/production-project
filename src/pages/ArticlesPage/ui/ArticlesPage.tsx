import { FC } from "react";
import cls from "./ArticlesPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ArticlePageProps {
	className?: string
}

const ArticlesPage: FC<ArticlePageProps> = ({ className }) => {
	return (
		<div className={classNames(cls.ArticlesPage, {}, [className])}>
			ArticlesPage
		</div>
	);
};

export default ArticlesPage;