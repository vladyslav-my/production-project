import { FC } from "react";
import cls from "./ArticleView.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Skeleton } from "@/shared/layouts/Skeleton";

interface ArticleViewProps {
	className?: string;
}

export const ArticleView: FC<ArticleViewProps> = ({ className }) => {
	return (
		<div className={classNames(cls.ArticleView, {}, [className, cls.ArticleView_list])}>
			<div className={classNames(cls.top, {}, [cls.ArticleView__top])}>
				<Skeleton width="32px" height="32px" circle="100%" className={cls.top__avatar} />
				<Skeleton width="57px" height="22px" circle="8px" className={cls.top__user} />
				<Skeleton width="84px" height="22px" circle="8px" className={cls.top__date} />
			</div>
			<div className={cls.ArticleView__title}>
				<Skeleton width="100%" height="38px" circle="8px" className={cls.top__date} />
				<Skeleton width="90%" height="38px" circle="8px" className={cls.top__date} />
			</div>
			<div className={cls.ArticleView__subTitle}>
				<Skeleton width="80%" height="27px" circle="8px" className={cls.top__date} />
			</div>
			<Skeleton isImage width={732} height={420} circle={8} className={cls.ArticleView__image} />
			<div className={classNames(cls.bottom, {}, [cls.ArticleView__bottom])}>
				<Skeleton width={260} height={32} circle={4} />
				<div>
					<Skeleton className={cls.bottom__paragraph} width="90%" height={17} circle={4} />
					<Skeleton width="97%" height={17} circle={4} />
					<Skeleton width="98%" height={17} circle={4} />
					<Skeleton width="96%" height={17} circle={4} />
					<Skeleton width="98%" height={17} circle={4} />
					<Skeleton width="85%" height={17} circle={4} />
				</div>
				<div>
					<Skeleton className={cls.bottom__paragraph} width="90%" height={17} circle={4} />
					<Skeleton width="97%" height={17} circle={4} />
					<Skeleton width="98%" height={17} circle={4} />
					<Skeleton width="96%" height={17} circle={4} />
				</div>
			</div>
		</div>
	);
};


