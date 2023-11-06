import { FC } from "react";
import ViewsIcon from "@/shared/assets/icons/Post/views.svg";
import { getArticleRoutePath } from "@/shared/config/routes/path";
import { Shell } from "@/shared/layouts/Shell";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { AppNavLink, ButtonTheme } from "@/shared/ui/Buttons";
import { Icon } from "@/shared/ui/Icon";
import { Image } from "@/shared/ui/Image";
import { Article } from "../../model/types/Article";
import { ViewMode } from "../../model/types/ArticlesListSchema";
import ArticleBlocks from "../ArticleBlocks/ArticleBlocks";
import cls from "./ArticlePreview.module.scss";

interface ArticlePreviewProps {
	className?: string;
	data?: Article;
	viewMode?: ViewMode;
}

export const ArticlePreview: FC<ArticlePreviewProps> = ({ className, data, viewMode }) => {
	if (viewMode === ViewMode.TILE) {
		return (
			<AppNavLink to={getArticleRoutePath(data?.id)}>
				<Shell
					className={classNames(cls.ArticlePreview, {}, [className, cls.ArticlePreview_tile])}
				>
					<Image
						className={cls.ArticlePreview__image}
						height={`${(420 / 732) * 100}%`}
						src={data?.img}
					/>
					<div className={cls.ArticlePreview__container}>
						<h2 className={cls.ArticlePreview__title}>{data?.title}</h2>
						<div className={classNames(cls.bottom, {}, [cls.ArticlePreview__bottom])}>
							<span className={cls.bottom__date}>{data?.createdAt}</span>
							<div className={cls.bottom__views}>
								<Icon Svg={ViewsIcon} className={cls.bottom__viewsIcon} />
								<span className={cls.bottom__viewerShip}>{data?.views}</span>
							</div>
						</div>
						<div className={classNames(cls.top, {}, [cls.ArticlePreview__top])}>
							<Avatar className={cls.top__avatar} size={32} src={data?.user.avatar} />
							<span className={cls.top__user}>{data?.user.username}</span>
						</div>
					</div>
				</Shell>
			</AppNavLink>
		);
	}

	return (
		<Shell className={classNames(cls.ArticlePreview, {}, [className, cls.ArticlePreview_list])}>
			<div className={classNames(cls.top, {}, [cls.ArticlePreview__top])}>
				<Avatar className={cls.top__avatar} size={32} src={data?.user.avatar} />
				<span className={cls.top__user}>{data?.user.username}</span>
				<span className={cls.top__date}>{data?.createdAt}</span>
			</div>
			<h2 className={cls.ArticlePreview__title}>{data?.title}</h2>
			<h3 className={cls.ArticlePreview__subTitle}>{data?.subtitle}</h3>
			<Image
				className={cls.ArticlePreview__image}
				height={`${(420 / 732) * 100}%`}
				src={data?.img}
			/>
			<div className={cls.ArticlePreview__desc}>
				<ArticleBlocks data={data && [data.blocks[0]]} />
			</div>
			<div className={classNames(cls.bottom, {}, [cls.ArticlePreview__bottom])}>
				<AppNavLink
					className={cls.bottom__btn}
					theme={ButtonTheme.OUTLINE}
					to={getArticleRoutePath(data?.id)}
				>
					Читать далее...
				</AppNavLink>
				<div className={cls.bottom__views}>
					<ViewsIcon className={cls.bottom__viewsIcon} />
					<span className={cls.bottom__viewerShip}>{data?.views}</span>
				</div>
			</div>
		</Shell>
	);
};
