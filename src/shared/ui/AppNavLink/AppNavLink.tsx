import { FC, memo } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { classNames } from "../../lib/classNames/classNames";
import cls from "./AppNavLink.module.scss";

interface AppNavLinkProps extends NavLinkProps {
	className?: string;
}

export const AppNavLink: FC<AppNavLinkProps> = memo(
	({
		className, children, to, ...otherProps
	}) => (
		<NavLink className={classNames(cls.AppLink, {}, [className])} to={to} {...otherProps}>
			{children}
		</NavLink>
	),
);
