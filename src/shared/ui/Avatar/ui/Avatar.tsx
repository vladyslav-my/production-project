import { FC } from "react";
import cls from "./Avatar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";



interface AvatarProps {
	className?: string
	size?: number | string;
	src?: string;
}

export const Avatar: FC<AvatarProps> = ({ className, size, src }) => {
	return (
		<div style={{ width: size, height: size }} className={classNames(cls.Avatar, {}, [className])}>
			<img className={cls.Avatar__image} src={src} />
		</div>
	);
};