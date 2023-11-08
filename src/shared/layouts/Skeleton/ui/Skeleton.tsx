import {
	FC, ReactNode, useMemo,
} from "react";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
	className?: string;
	width: any;
	height: any;
	circle?: string | number;
	children?: ReactNode;
	isImage?: boolean;
}

export const Skeleton: FC<SkeletonProps> = ({
	className,
	width,
	height,
	circle,
	children,
	isImage,
}) => {
	const styles = useMemo(() => {
		if (isImage) {
			return {
				width,
				paddingBottom: `${(height / width) * 100}%`,
			};
		}

		return {
			width,
			height,
		};
	}, [width, height, isImage]);

	return (
		<div
			className={classNames(cls.Skeleton, {}, [className])}
			style={{ borderRadius: circle, ...styles }}
		>
			{children}
		</div>
	);
};
