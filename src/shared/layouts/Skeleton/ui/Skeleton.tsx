import { CSSProperties, FC, ReactNode } from "react";
import cls from "./Skeleton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";


interface SkeletonProps {
	className?: string;
	width: string | number;
	height: string | number;
	circle?: string | number;
	children?: ReactNode;
	isImage?: boolean;
}

export const Skeleton: FC<SkeletonProps> = ({ className, width, height, circle, children, isImage }) => {

	const styles: CSSProperties = isImage && (typeof height === "number") && (typeof width === "number") ? {
		paddingBottom: `${(height / width) * 100}%`,
	} : {
		width: width,
		height: height
	};



	return (
		<div 
			style={{ borderRadius: circle, ...styles }} 
			className={classNames(cls.Skeleton, {}, [className])}>
			{children}
		</div>
	);
};