import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum ThemeButton {
   CLEAR = "Button_clear",
	OUTLINE = "Button_outline"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ 
	className, 
	children, 
	theme = ThemeButton.CLEAR, 
	...otherProps
}) => {
	return (
		<button className={classNames(cls.Button, {}, [className, cls[theme]])}  {...otherProps}>
			{children}
		</button>
	);
};