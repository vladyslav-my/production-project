import { FC, HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./Shell.module.scss";

interface ShellProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
	borderStyle?: ShellBorderStyle;
}

export enum ShellBorderStyle {
	DEFAULT = "Shell_border_default",
	NONE = 0,
}

export const Shell: FC<ShellProps> = ({
	className, children, borderStyle = ShellBorderStyle.DEFAULT, ...otherProps
}) => (
	<div className={classNames(cls.Shell, {}, [className, cls[borderStyle]])} {...otherProps}>
		{children}
	</div>
);
