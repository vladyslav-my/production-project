import { FC } from "react";
import cls from "./ArticleDetailsPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	return (
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
			ARTICLEDETAILSPAGE
		</div>
	);
};

export default ArticleDetailsPage;