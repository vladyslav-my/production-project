import { FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleBlocks as ArticleBlocksType } from "../../model/types/Article";
import ArticleCodeBlock from "../ArticleCodeBlock/ArticleCodeBlock";
import ArticleImageBlock from "../ArticleImageBlock/ArticleImageBlock";
import ArticleTextBlock from "../ArticleTextBlock/ArticleTextBlock";
import cls from "./ArticleBlocks.module.scss";

interface ArticleBlocksProps {
	className?: string;
	data?: ArticleBlocksType[];
}

const ArticleBlocks: FC<ArticleBlocksProps> = ({ className, data }) => (
	<div className={classNames(cls.ArticleBlocks, {}, [className])}>
		{data?.map((block) => {
			switch (block.type) {
				case "TEXT":
					return (
						<ArticleTextBlock
							className={cls.Article__textBlock}
							key={block.id}
							paragraphs={block.paragraphs}
							title={block.title}
						/>
					);
				case "IMAGE":
					return (
						<ArticleImageBlock
							className={cls.Article__imageBlock}
							key={block.id}
							src={block.src}
							title={block.title}
						/>
					);
				case "CODE":
					return (
						<ArticleCodeBlock
							className={cls.Article__codeBlock}
							code={block.code}
							key={block.id}
						/>
					);
				default: {
					return null;
				}
			}
		})}
	</div>
);

export default memo(ArticleBlocks);
