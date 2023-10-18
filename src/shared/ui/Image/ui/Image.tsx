import { FC } from "react";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./Image.module.scss";

interface ImageProps {
	className?: string;
	src?: string;
	width?: string | number;
	height?: string | number;
}

export const Image: FC<ImageProps> = ({
	className, width, height, src,
}) => {
	const styleHeight = height ? { paddingBottom: height } : undefined;
	const styleWidth = width ? { width } : undefined;

	return (
		<div
			className={classNames(cls.Image, {}, [className])}
			style={{ ...styleHeight, ...styleWidth }}
		>
			<img className={cls.Image__this} src={src} />
		</div>
	);
};
