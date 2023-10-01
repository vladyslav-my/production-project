import { FC, ReactNode, createElement } from "react";
import cls from "./DynamicTag.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface DynamicTagProps {
	className?: string;
	tagName: string;
	children: ReactNode;
}

export const DynamicTag: FC<DynamicTagProps> = ({ className, tagName, children, ...otherProps }) => {
	return createElement(tagName, { className: classNames(cls.DynamicTag, {}, [className]), ...otherProps }, children);
};

