import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { classNames } from "../../../../lib/classNames/classNames";
import cls from "../styles/Button.module.scss";
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
}) => (
	<button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
		{children}
	</button>
);
