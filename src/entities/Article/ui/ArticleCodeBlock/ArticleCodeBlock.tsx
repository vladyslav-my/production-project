import { FC, memo } from "react";
import CopyIcon from "@/shared/assets/icons/article/copy.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Buttons";
import cls from "./ArticleCodeBlock.module.scss";

interface ArticleCodeBlockProps {
	className?: string;
	code: string;
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = ({ className, code }) => (
	<div className={classNames(cls.ArticleCodeBlock, {}, [className])}>
		<Button className={cls.ArticleCodeBlock__copyBtn}>
			<CopyIcon className={cls.ArticleCodeBlock__copyIcon} />
		</Button>
		<pre className={cls.ArticleCodeBlock__pre}>
			<code className={cls.ArticleCodeBlock__code}>
				{code}
			</code>
		</pre>
	</div>
);

export default memo(ArticleCodeBlock);
