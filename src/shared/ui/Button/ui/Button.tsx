import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme: string;
    children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ className, children, theme, ...otherProps }) => {
	return (
		<button className={classNames(cls.Button, {}, [className, cls[theme]])}  {...otherProps}>
			{children}
		</button>
	);
};