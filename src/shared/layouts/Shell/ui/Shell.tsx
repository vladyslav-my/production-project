import { FC, ReactNode } from "react";
import cls from "./Shell.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ShellProps {
	children: ReactNode;
	className?: string;
	borderStyle?: ShellBorderStyle
}

export enum ShellBorderStyle {
	DEFAULT = "Shell_border_default",
	NONE = 0
}

export const Shell: FC<ShellProps> = ({ className, children, borderStyle = ShellBorderStyle.DEFAULT }) => {
	return (
		<div className={classNames(cls.Shell, {}, [className, cls[borderStyle]])}>
			{children}
		</div>
	);
};