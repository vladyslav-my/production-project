import { FC } from "react";
import { useTranslation } from "react-i18next";
import ViewsIcon from "@/shared/assets/icons/Post/views.svg";
import { getArticleRoutePath } from "@/shared/config/routes/path";
import { Shell } from "@/shared/layouts/Shell";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { AppNavLink, ButtonTheme } from "@/shared/ui/Buttons";
import { Icon } from "@/shared/ui/Icon";
import { Img } from "@/shared/ui/Img";
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
	const { t } = useTranslation();
	if (viewMode === ViewMode.TILE) {
		return (
			<AppNavLink to={getArticleRoutePath(data?.id)}>
				<Shell
					className={classNames(cls.ArticlePreview, {}, [className, cls.ArticlePreview_tile])}
				>
					<Img
						className={cls.ArticlePreview__image}
						width={732}
						height={420}
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
			<Img
				className={cls.ArticlePreview__image}
				width={732}
				height={420}
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
					{t("read more")}
				</AppNavLink>
				<div className={cls.bottom__views}>
					<ViewsIcon className={cls.bottom__viewsIcon} />
					<span className={cls.bottom__viewerShip}>{data?.views}</span>
				</div>
			</div>
		</Shell>
	);
};
