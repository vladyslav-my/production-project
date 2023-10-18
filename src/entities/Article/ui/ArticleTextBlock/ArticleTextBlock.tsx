import { FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleTextBlock.module.scss";

interface ArticleTextBlockProps {
	className?: string;
	title?: string;
	paragraphs?: string[];
}

const ArticleTextBlock: FC<ArticleTextBlockProps> = ({ className, title, paragraphs }) => (
	<div className={classNames(cls.ArticleTextBlock, {}, [className])}>
		{!!title && (
			<h3 className={cls.ArticleTextBlock__title}>
				{title}
			</h3>
		)}
		{!!paragraphs && (
			<div className={cls.ArticleTextBlock__paragraphs}>
				{paragraphs.map((paragraph, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<p className={cls.ArticleTextBlock__paragraph} key={index}>
						{paragraph}
					</p>
				))}
			</div>
		)}
	</div>
);

export default memo(ArticleTextBlock);
