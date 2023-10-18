import { FC } from "react";
import { Skeleton } from "@/shared/layouts/Skeleton";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ArticleView.module.scss";

interface ArticleViewProps {
	className?: string;
}

export const ArticleView: FC<ArticleViewProps> = ({ className }) => (
	<div className={classNames(cls.ArticleView, {}, [className, cls.ArticleView_list])}>
		<div className={classNames(cls.top, {}, [cls.ArticleView__top])}>
			<Skeleton
				circle="100%"
				className={cls.top__avatar}
				height="32px"
				width="32px"
			/>
			<Skeleton
				circle="8px"
				className={cls.top__user}
				height="22px"
				width="57px"
			/>
			<Skeleton
				circle="8px"
				className={cls.top__date}
				height="22px"
				width="84px"
			/>
		</div>
		<div className={cls.ArticleView__title}>
			<Skeleton
				circle="8px"
				className={cls.top__date}
				height="38px"
				width="100%"
			/>
			<Skeleton
				circle="8px"
				className={cls.top__date}
				height="38px"
				width="90%"
			/>
		</div>
		<div className={cls.ArticleView__subTitle}>
			<Skeleton
				circle="8px"
				className={cls.top__date}
				height="27px"
				width="80%"
			/>
		</div>
		<Skeleton
			circle={8}
			className={cls.ArticleView__image}
			height={420}
			isImage
			width={732}
		/>
		<div className={classNames(cls.bottom, {}, [cls.ArticleView__bottom])}>
			<Skeleton circle={4} height={32} width={260} />
			<div>
				<Skeleton
					circle={4}
					className={cls.bottom__paragraph}
					height={17}
					width="90%"
				/>
				<Skeleton circle={4} height={17} width="97%" />
				<Skeleton circle={4} height={17} width="98%" />
				<Skeleton circle={4} height={17} width="96%" />
				<Skeleton circle={4} height={17} width="98%" />
				<Skeleton circle={4} height={17} width="85%" />
			</div>
			<div>
				<Skeleton
					circle={4}
					className={cls.bottom__paragraph}
					height={17}
					width="90%"
				/>
				<Skeleton circle={4} height={17} width="97%" />
				<Skeleton circle={4} height={17} width="98%" />
				<Skeleton circle={4} height={17} width="96%" />
			</div>
		</div>
	</div>
);
