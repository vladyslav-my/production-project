import {
	FC, HTMLProps, ReactNode, createElement,
} from "react";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./DynamicTag.module.scss";

interface DynamicTagProps extends HTMLProps<HTMLDivElement> {
	className?: string;
	tagName: string;
	children: ReactNode;
}

export const DynamicTag: FC<DynamicTagProps> = ({
	className, tagName, children, ...otherProps
}) => createElement(
	tagName,
	{ className: classNames(cls.DynamicTag, {}, [className]), ...otherProps },
	children,
);
