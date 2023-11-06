import { FC, HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./Shell.module.scss";

interface ShellProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	className?: string;
	shellStyle?: ShellStyle;
}

export enum ShellStyle {
	DEFAULT = "Shell_style_default",
	NO_BORDER = "Shell_style_no-border",
	NONE = "Shell_style_none",
}

export const Shell: FC<ShellProps> = ({
	className,
	children,
	shellStyle = ShellStyle.DEFAULT,
	...otherProps
}) => (
	<div className={classNames(cls.Shell, {}, [className, cls[shellStyle]])} {...otherProps}>
		{children}
	</div>
);
