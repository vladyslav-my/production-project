import { CSSProperties, FC, ReactNode } from "react";
import cls from "./Skeleton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicTag } from "@/shared/ui/DynamicTag";


interface SkeletonProps {
	className?: string;
	width: string | number;
	height: string | number;
	circle?: string | number;
	children?: ReactNode;
	isImage?: boolean;
	tagName?: string;
}

export const Skeleton: FC<SkeletonProps> = ({ className, width, height, circle, tagName = "div", children, isImage }) => {

	const styles: CSSProperties = isImage && (typeof height === "number") && (typeof width === "number") ? {
		paddingBottom: `${(height / width) * 100}%`,
	} : {
		width: width,
		height: height
	};



	return (
		<DynamicTag 
			style={{ borderRadius: circle, ...styles }} 
			className={classNames(cls.Skeleton, {}, [className])}
			tagName={tagName}

		>
			{children}
		</DynamicTag>
	);
};