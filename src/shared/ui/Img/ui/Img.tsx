import {
	FC, ReactNode, useLayoutEffect, useState,
} from "react";
import { Skeleton } from "../../../layouts/Skeleton";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./Img.module.scss";

interface ImgProps {
	className?: string;
	src?: string;
	isFixedWidth?: boolean;
	width: number;
	height: number;
	fallback?: ReactNode;
	errorFallback?: ReactNode;
}

export const Img: FC<ImgProps> = ({
	className, width, height, src = "", fallback, errorFallback, isFixedWidth,
}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const styleHeight = { paddingBottom: `${(height / width) * 100}%` };
	const styleWidth = isFixedWidth ? { width } : null;

	useLayoutEffect(() => {
		const img = new Image();
		img.src = src;

		img.onerror = () => {
			setIsLoading(false);
			setIsError(true);
		};

		img.onload = () => {
			setIsLoading(false);
		};
	}, [src]);

	if (isError) {
		return errorFallback || null;
	}

	if (isLoading) {
		return fallback || <Skeleton isImage width={width} height={height} />;
	}

	return (
		<div
			className={classNames(cls.Img, {}, [className])}
			style={{ ...styleHeight, ...styleWidth }}
		>
			<img className={cls.Img__this} src={src} />
		</div>
	);
};
