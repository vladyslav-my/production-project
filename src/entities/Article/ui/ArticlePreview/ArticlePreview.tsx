import { FC } from "react";
import cls from "./ArticlePreview.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Shell } from "@/shared/layouts/Shell";
import { Avatar } from "@/shared/ui/Avatar";
import { Image } from "@/shared/ui/Image";
import { Button, ThemeButton } from "@/shared/ui/Button";
import ViewsIcon from "@/shared/assets/icons/Post/views.svg";
import ArticleBlocks from "../ArticleBlocks/ArticleBlocks";
import { Article } from "@/entities/Article";
import { ViewMode } from "../../model/types/ArticlesListSchema";
import { Icon } from "@/shared/ui/Icon";

interface ArticlePreviewProps {
	className?: string;
	data?: Article;
	viewMode?: ViewMode;
}

export const ArticlePreview: FC<ArticlePreviewProps> = ({ className, data, viewMode }) => {

	if (viewMode === ViewMode.TILE) {
		return (
			<Shell className={classNames(cls.ArticlePreview, {}, [className, cls.ArticlePreview_tile])}>
				<Image 
					className={cls.ArticlePreview__image} 
					src={data?.img}
					height={`${420 / 732 * 100}%`}
				/>
				<div className={cls.ArticlePreview__container}>
					<h2 className={cls.ArticlePreview__title}>{data?.title}</h2>
					<div className={classNames(cls.bottom, {}, [cls.ArticlePreview__bottom])}>
						<span className={cls.bottom__date}>{data?.createdAt}</span>
						<div className={cls.bottom__views}>
							<Icon className={cls.bottom__viewsIcon} Svg={ViewsIcon}  />
							<span className={cls.bottom__viewerShip}>{data?.views}</span>
						</div>
					</div>
					<div className={classNames(cls.top, {}, [cls.ArticlePreview__top])}>
						<Avatar className={cls.top__avatar} size={32} src={data?.user.avatar} />
						<span className={cls.top__user}>{data?.user.username}</span>
					</div>
				</div>
			</Shell>
		);
	}

	return (
		<Shell className={classNames(cls.ArticlePreview, {}, [className, cls.ArticlePreview_list])}>
			<div className={classNames(cls.top, {}, [cls.ArticlePreview__top])}>
				<Avatar size={32} className={cls.top__avatar} src={data?.user.avatar} />
				<span className={cls.top__user}>{data?.user.username}</span>
				<span className={cls.top__date}>{data?.createdAt}</span>
			</div>
			<h2 className={cls.ArticlePreview__title}>{data?.title}</h2>
			<h3 className={cls.ArticlePreview__subTitle}>{data?.subtitle}</h3>
			<Image 
				className={cls.ArticlePreview__image} 
				src={data?.img}
				height={`${420 / 732 * 100}%`}
			/>
			<div className={cls.ArticlePreview__desc}>
				<ArticleBlocks data={data ? [data.blocks[0]] : []} />
			</div>
			<div className={classNames(cls.bottom, {}, [cls.ArticlePreview__bottom])}>
				<Button className={cls.bottom__btn} theme={ThemeButton.OUTLINE}>Читать далее...</Button>
				<div className={cls.bottom__views}>
					<ViewsIcon className={cls.bottom__viewsIcon} />
					<span className={cls.bottom__viewerShip}>{data?.views}</span>
				</div>
			</div>
		</Shell>
	);
};


