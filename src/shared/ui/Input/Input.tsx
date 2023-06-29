import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";
import { classNames } from "shared/lib/classNames/classNames";


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
	className?: string,
	value?: string,
	type?: string,
	placeholder?: string,
	onChange?: (value: string) => void;

}

export const Input: FC<InputProps> = ({
	className,
	value,
	placeholder,
	type = "text",
	onChange,
}) => {


	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={cls.wrapper}>
			<input 
				className={classNames(cls.Input, {}, [className])}
				value={value}
				placeholder={placeholder}
				onChange={onChangeHandler}
			>
			</input>
		</div>

	);
};