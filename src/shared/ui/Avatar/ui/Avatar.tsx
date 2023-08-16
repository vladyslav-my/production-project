import { FC } from "react";
import cls from "./Avatar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";



interface AvatarProps {
	className?: string
	size?: number | string;
}

export const Avatar: FC<AvatarProps> = ({ className, size }) => {
	return (
		<div style={{ width: size, height: size }} className={classNames(cls.Avatar, {}, [className])}>
			<img className={cls.Avatar__image} src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" />
		</div>
	);
};