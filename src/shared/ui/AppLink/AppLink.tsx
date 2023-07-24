import { FC, ReactNode, memo } from "react";
import cls from "./AppLink.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { NavLink, NavLinkProps } from "react-router-dom";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	RED = "red",
}

interface AppNavLinkProps extends NavLinkProps {
	className?: string;
	theme?: AppLinkTheme;
}




export const AppNavLink: FC<AppNavLinkProps> = memo(({ className, theme = AppLinkTheme.PRIMARY, children, to, ...otherProps }) => {
	return (
		<NavLink
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{ children }
		</NavLink>
	);
});