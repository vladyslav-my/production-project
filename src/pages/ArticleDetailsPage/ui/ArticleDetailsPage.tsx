import { FC } from "react";
import cls from "./ArticleDetailsPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Shell } from "@/shared/layouts/Shell";
import { Article } from "@/entities/Article";
import { useParams } from "react-router-dom";

interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
	const { id } = useParams();
	return (
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
			<Article id={id} />
		</div>
	);
};

export default ArticleDetailsPage;