import { FC, ReactNode, memo } from "react";
import cls from "./AppNavLink.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { NavLink, NavLinkProps } from "react-router-dom";


interface AppNavLinkProps extends NavLinkProps {
	className?: string;
}




export const AppNavLink: FC<AppNavLinkProps> = memo(({ className, children, to, ...otherProps }) => {
	return (
		<NavLink
			to={to}
			className={classNames(cls.AppLink, {}, [className])}
			{...otherProps}
		>
			{ children }
		</NavLink>
	);
});