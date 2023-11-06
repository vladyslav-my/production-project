import { FC } from "react";
import ViewsIcon from "@/shared/assets/icons/Post/views.svg";
import { Shell } from "@/shared/layouts/Shell";
import { Skeleton } from "@/shared/layouts/Skeleton";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ViewMode } from "../../model/types/ArticlesListSchema";
import cls from "./ArticlePreview.module.scss";

interface ArticlePreviewProps {
	className?: string;
	viewMode?: ViewMode;
}

export const ArticlePreview: FC<ArticlePreviewProps> = ({ className, viewMode }) => {
	if (viewMode === ViewMode.TILE) {
		return (
			<Shell
				className={classNames(cls.ArticlePreview, {}, [className, cls.ArticlePreview_tile])}
			>
				<Skeleton className={cls.ArticlePreview__image} height={420} isImage width={732} />
				<div className={cls.ArticlePreview__container}>
					<h2 className={cls.ArticlePreview__title}>
						<Skeleton circle="8px" height="24px" width="95%" />
						<Skeleton circle="8px" height="24px" width="90%" />
						<Skeleton circle="8px" height="24px" width="85%" />
						<Skeleton circle="8px" height="24px" width="50%" />
					</h2>
					<div className={classNames(cls.bottom, {}, [cls.ArticlePreview__bottom])}>
						<Skeleton circle="8px" className={cls.bottom__date} height="22px" width="84px" />
						<div className={cls.bottom__views}>
							<ViewsIcon className={cls.bottom__viewsIcon} />
							<Skeleton circle={22} height={23} width={56} />
						</div>
					</div>
					<div className={classNames(cls.top, {}, [cls.ArticlePreview__top])}>
						<Skeleton circle="100%" className={cls.top__avatar} height="32px" width="32px" />
						<Skeleton circle="8px" className={cls.top__user} height="22px" width="57px" />
					</div>
				</div>
			</Shell>
		);
	}

	return (
		<Shell className={classNames(cls.ArticlePreview, {}, [className, cls.ArticlePreview_list])}>
			<div className={classNames(cls.top, {}, [cls.ArticlePreview__top])}>
				<Skeleton circle="100%" className={cls.top__avatar} height="32px" width="32px" />
				<Skeleton circle="8px" className={cls.top__user} height="22px" width="57px" />
				<Skeleton circle="8px" className={cls.top__date} height="22px" width="84px" />
			</div>
			<h2 className={cls.ArticlePreview__title}>
				<Skeleton circle="8px" className={cls.top__date} height="38px" width="100%" />
				<Skeleton circle="8px" className={cls.top__date} height="38px" width="90%" />
			</h2>
			<h3 className={cls.ArticlePreview__subTitle}>
				<Skeleton circle="8px" className={cls.top__date} height="27px" width="80%" />
			</h3>
			<Skeleton
				circle={8}
				className={cls.ArticlePreview__image}
				height={420}
				isImage
				width={732}
			/>
			<p className={cls.ArticlePreview__desc}>
				<Skeleton circle={4} height={17} width="90%" />
				<Skeleton circle={4} height={17} width="75%" />
				<Skeleton circle={4} height={17} width="95%" />
			</p>
			<div className={classNames(cls.bottom, {}, [cls.ArticlePreview__bottom])}>
				<Skeleton circle={22} height={38} width={144} />
				<div className={cls.bottom__views}>
					<ViewsIcon className={cls.bottom__viewsIcon} />
					<span className={cls.bottom__viewerShip}>
						<Skeleton circle={22} height={23} width={56} />
					</span>
				</div>
			</div>
		</Shell>
	);
};
