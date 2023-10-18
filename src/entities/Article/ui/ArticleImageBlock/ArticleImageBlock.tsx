import { FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Image } from "@/shared/ui/Image";
import cls from "./ArticleImageBlock.module.scss";

interface ArticleImageBlockProps {
	className?: string;
	title?: string;
	src: string;

}

const ArticleImageBlock: FC<ArticleImageBlockProps> = ({ className, title, src }) => (
	<div className={classNames(cls.ArticleImageBlock, {}, [className])}>
		<img className={cls.ArticleImageBlock__image} src={src} />
		{!!title && (
			<div className={cls.ArticleImageBlock__title}>
				{title}
			</div>
		)}
	</div>
);

export default memo(ArticleImageBlock);
