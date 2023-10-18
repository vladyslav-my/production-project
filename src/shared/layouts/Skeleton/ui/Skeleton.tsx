import { CSSProperties, FC, ReactNode } from "react";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
	className?: string;
	width: string | number;
	height: string | number;
	circle?: string | number;
	children?: ReactNode;
	isImage?: boolean;
}

export const Skeleton: FC<SkeletonProps> = ({
	className, width, height, circle, children, isImage,
}) => {
	const styles: CSSProperties = isImage && (typeof height === "number") && (typeof width === "number") ? {
		paddingBottom: `${(height / width) * 100}%`,
	} : {
		width,
		height,
	};

	return (
		<div
			className={classNames(cls.Skeleton, {}, [className])}
			style={{ borderRadius: circle, ...styles }}
		>
			{children}
		</div>
	);
};
