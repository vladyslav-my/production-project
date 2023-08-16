import { FC } from "react";
import cls from "./PostLayout.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Shell } from "@/shared/layouts/Shell";
import { Avatar } from "@/shared/ui/Avatar";
import { Image } from "@/shared/ui/Image";
import { Button, ThemeButton } from "@/shared/ui/Button";
import ViewsIcon from "@/shared/assets/icons/Post/views.svg";

interface PostLayoutProps {
	className?: string;
	data?: any;
	isTile?: boolean;
}

export const PostLayout: FC<PostLayoutProps> = ({ className, isTile, data }) => {


	if (isTile) {
		return (
			<Shell className={classNames(cls.PostLayout, {}, [className, cls.PostLayout_tile])}>
				<Image 
					className={cls.PostLayout__image} 
					src={"https://www.imgonline.com.ua/examples/bee-on-daisy.jpg"}
					height={`${420 / 732 * 100}%`}
				/>
				<div className={cls.PostLayout__container}>
					<h2 className={cls.PostLayout__title}>Как разработать Telegram-бота для генерации сложных паролей</h2>
					<div className={classNames(cls.bottom, {}, [cls.PostLayout__bottom])}>
						<span className={cls.bottom__date}>21.02.2022</span>
						<div className={cls.bottom__views}>
							<ViewsIcon className={cls.bottom__viewsIcon} />
							<span className={cls.bottom__viewerShip}>12843</span>
						</div>
					</div>
					<div className={classNames(cls.top, {}, [cls.PostLayout__top])}>
						<Avatar className={cls.top__avatar} size={32} />
						<span className={cls.top__user}>Ulbi TV</span>
					</div>	
				</div>
			</Shell>
		);

	}


	return (
		<Shell className={classNames(cls.PostLayout, {}, [className, cls.PostLayout_list])}>
			<div className={classNames(cls.top, {}, [cls.PostLayout__top])}>
				<Avatar size={32} className={cls.top__avatar} />
				<span className={cls.top__user}>Ulbi TV</span>
				<span className={cls.top__date}>21.02.2022</span>
			</div>
			<h2 className={cls.PostLayout__title}>Как разработать Telegram-бота для генерации сложных паролей</h2>
			<h3 className={cls.PostLayout__subTitle}>Что нового в JS за 2022 год?</h3>
			<Image 
				className={cls.PostLayout__image} 
				src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" 
				height={`${420 / 732 * 100}%`}
			/>
			<div className={cls.PostLayout__desc}>
				
			</div>
			<div className={classNames(cls.bottom, {}, [cls.PostLayout__bottom])}>
				<Button className={cls.bottom__btn} theme={ThemeButton.OUTLINE}>Читать далее...</Button>
				<div className={cls.bottom__views}>
					<ViewsIcon className={cls.bottom__viewsIcon} />
					<span className={cls.bottom__viewerShip}>12843</span>
				</div>
			</div>
		</Shell>
	);
};


