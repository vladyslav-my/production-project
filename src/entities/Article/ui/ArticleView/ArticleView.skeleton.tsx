import { FC } from "react";
import cls from "./ArticleView.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Shell } from "@/shared/layouts/Shell";
import { Avatar } from "@/shared/ui/Avatar";
import { Image } from "@/shared/ui/Image";
import { Button, ThemeButton } from "@/shared/ui/Button";
import ViewsIcon from "@/shared/assets/icons/Post/views.svg";
import { Skeleton } from "@/shared/layouts/Skeleton";

interface ArticleViewProps {
	className?: string;
	isTile?: boolean;
}

export const ArticleView: FC<ArticleViewProps> = ({ className, isTile }) => {

	if (isTile) {
		return (
			<Shell className={classNames(cls.ArticleView, {}, [className, cls.ArticleView_tile])}>
				<Skeleton isImage width={732} height={420} className={cls.ArticleView__image} />
				<div className={cls.ArticleView__container}>
					<h2 className={cls.ArticleView__title}>
						<Skeleton width="95%" height="24px" circle="8px" />
						<Skeleton width="90%" height="24px" circle="8px" />
						<Skeleton width="85%" height="24px" circle="8px" />
						<Skeleton width="50%" height="24px" circle="8px" />
					</h2>
					<div className={classNames(cls.bottom, {}, [cls.ArticleView__bottom])}>
						<Skeleton width="84px" height="22px" circle="8px" className={cls.bottom__date} />
						<div className={cls.bottom__views}>
							<ViewsIcon className={cls.bottom__viewsIcon} />
							<Skeleton width={56} height={23} circle={22} />
						</div>
					</div>
					<div className={classNames(cls.top, {}, [cls.ArticleView__top])}>
						<Skeleton width="32px" height="32px" circle="100%" className={cls.top__avatar} />
						<Skeleton width="57px" height="22px" circle="8px" className={cls.top__user} />
					</div>	
				</div>
			</Shell>
		);

	}

	return (
		<Shell className={classNames(cls.ArticleView, {}, [className, cls.ArticleView_list])}>
			<div className={classNames(cls.top, {}, [cls.ArticleView__top])}>
				<Skeleton width="32px" height="32px" circle="100%" className={cls.top__avatar} />
				<Skeleton width="57px" height="22px" circle="8px" className={cls.top__user} />
				<Skeleton width="84px" height="22px" circle="8px" className={cls.top__date} />
			</div>
			<h2 className={cls.ArticleView__title}>
				<Skeleton width="100%" height="38px" circle="8px" className={cls.top__date} />
				<Skeleton width="90%" height="38px" circle="8px" className={cls.top__date} />
			</h2>
			<h3 className={cls.ArticleView__subTitle}>
				<Skeleton width="80%" height="27px" circle="8px" className={cls.top__date} />
			</h3>
			<Skeleton isImage width={732} height={420} circle={8} className={cls.ArticleView__image} />
			<p className={cls.ArticleView__desc}>
				<Skeleton width="90%" height={17} circle={4} />
				<Skeleton width="75%" height={17} circle={4} />
				<Skeleton width="95%" height={17} circle={4} />
			</p>
			<div className={classNames(cls.bottom, {}, [cls.ArticleView__bottom])}>
				<Skeleton width={144} height={38} circle={22} />
				<div className={cls.bottom__views}>
					<ViewsIcon className={cls.bottom__viewsIcon} />
					<span className={cls.bottom__viewerShip}>
						<Skeleton width={56} height={23} circle={22} />
					</span>
				</div>
			</div>
		</Shell>
	);
};


