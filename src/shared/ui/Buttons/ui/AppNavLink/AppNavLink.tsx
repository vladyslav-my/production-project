import { AnchorHTMLAttributes, FC, ReactNode } from "react";
import cls from "../styles/Button.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { NavLink } from "react-router-dom";
import { ButtonTheme } from "../styles/const";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
   className?: string;
   theme?: ButtonTheme;
   children: ReactNode;
	to: string;
}

export const AppNavLink: FC<ButtonProps> = ({ 
	className, 
	children, 
	theme = ButtonTheme.CLEAR,
	to,
	...otherProps
}) => {
	return (
		<NavLink className={classNames(cls.Button, {}, [className, cls[theme]])} to={to} {...otherProps}>
			{children}
		</NavLink>
	);
};