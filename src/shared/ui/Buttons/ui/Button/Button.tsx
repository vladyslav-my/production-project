import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cls from "../styles/Button.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ButtonTheme } from "../styles/const";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ 
	className, 
	children, 
	theme = ButtonTheme.CLEAR, 
	...otherProps
}) => {
	return (
		<button className={classNames(cls.Button, {}, [className, cls[theme]])}  {...otherProps}>
			{children}
		</button>
	);
};