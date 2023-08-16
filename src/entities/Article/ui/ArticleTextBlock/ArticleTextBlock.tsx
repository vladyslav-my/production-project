import { FC, memo } from "react";
import cls from "./ArticleTextBlock.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ArticleTextBlockProps {
	className?: string;
	title?: string;
	paragraphs?: string[];
}

const ArticleTextBlock: FC<ArticleTextBlockProps> = ({ className, title, paragraphs }) => {
	return (
		<div className={classNames(cls.ArticleTextBlock, {}, [className])}>
			{title && <h3 className={cls.ArticleTextBlock__title}>{title}</h3>}
			{paragraphs && <div className={cls.ArticleTextBlock__paragraphs}>
				{paragraphs.map((paragraph, index) => (
					<p key={index} className={cls.ArticleTextBlock__paragraph}>{paragraph}</p>
				))}
			</div>}
		</div>
	);
};

export default memo(ArticleTextBlock);