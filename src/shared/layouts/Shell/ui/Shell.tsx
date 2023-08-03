import { FC, ReactNode } from "react";
import cls from "./Shell.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface ShellProps {
	children: ReactNode;
	className?: string;
}

export const Shell: FC<ShellProps> = ({ className, children }) => {
	return (
		<div className={classNames(cls.Shell, {}, [className])}>
			{children}
		</div>
	);
};