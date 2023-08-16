import { FC, memo } from "react";
import cls from "./ArticleBlocks.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import ArticleTextBlock from "../ArticleTextBlock/ArticleTextBlock";
import ArticleImageBlock from "../ArticleImageBlock/ArticleImageBlock";
import ArticleCodeBlock from "../ArticleCodeBlock/ArticleCodeBlock";
import { ArticleBlocks as ArticleBlocksType } from "../../model/types/Article";

interface ArticleBlocksProps {
	className?: string;
	data?: ArticleBlocksType[];
}

const ArticleBlocks: FC<ArticleBlocksProps> = ({ className, data }) => {
	return (
		<div className={classNames(cls.ArticleBlocks, {}, [className])}>
			{
				data?.map((block) => {
					switch(block.type) {
					case "TEXT": 
						return (
							<ArticleTextBlock
								className={cls.Article__textBlock}
								key={block.id}
								title={block.title} 
								paragraphs={block.paragraphs} 
							/>
						);
					case "IMAGE": 
						return (
							<ArticleImageBlock 
								className={cls.Article__imageBlock}
								key={block.id}
								title={block.title} 
								src={block.src} 
							/>
						);
					case "CODE": 
						return (
							<ArticleCodeBlock 
								className={cls.Article__codeBlock}
								key={block.id}
								code={block.code}
							/>
						);
					}		
				})
			}
		</div>
	);
};

export default memo(ArticleBlocks);