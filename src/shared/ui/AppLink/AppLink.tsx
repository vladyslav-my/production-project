import { FC, ReactNode, memo } from "react";
import cls from "./AppLink.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	RED = "red",
}

interface AppLinkProps extends LinkProps {
	className?: string,
	theme?: AppLinkTheme,
   children: ReactNode,
}

export const AppLink: FC<AppLinkProps> = memo(({ className, theme = AppLinkTheme.PRIMARY, children, to, ...otherProps }) => {
	return (
		<Link to={to} 
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...otherProps}>
			{ children }
		</Link>
	);
});