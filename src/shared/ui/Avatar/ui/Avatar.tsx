import { FC } from "react";
import cls from "./Avatar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";



interface AvatarProps {
	className?: string
	size: number;
}

export const Avatar: FC<AvatarProps> = ({ className, size }) => {
	return (
		<div style={{ maxWidth: `${size / 16}rem` }} className={classNames(cls.Avatar, {}, [className])}>
			<div className={cls.Avatar__imageWrapper}>
				<img className={cls.Avatar__image} src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" />
			</div>
		</div>
	);
};