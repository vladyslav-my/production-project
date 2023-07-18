import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
	className?: string,
	value?: string,
	type?: string,
	placeholder?: string,
	externalPlaceholder?: string,
	readOnly?: boolean
	onChange?: (value: string) => void;

}

export const Input: FC<InputProps> = ({
	className,
	value,
	placeholder,
	externalPlaceholder,
	type = "text",
	readOnly,
	onChange,
}) => {


	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={cls.wrapper}>
			{externalPlaceholder && <span>{externalPlaceholder}</span>}
			<input 
				className={classNames(cls.Input, {}, [className])}
				value={value}
				placeholder={placeholder}
				onChange={onChangeHandler}
				type={type}
				readOnly={readOnly}
			>
			</input>
		</div>

	);
};