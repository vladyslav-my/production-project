import { FC } from "react";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./Avatar.module.scss";

interface AvatarProps {
	className?: string;
	size?: number | string;
	src?: string;
}

export const Avatar: FC<AvatarProps> = ({ className, size, src }) => (
	<div className={classNames(cls.Avatar, {}, [className])} style={{ width: size, height: size }}>
		<img className={cls.Avatar__image} src={src} />
	</div>
);
