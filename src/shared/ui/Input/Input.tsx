import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
	className?: string,
	value?: string,
	type?: string,
	placeholder?: string,
	label?: string,
	readOnly?: boolean
	onChange?: (value: string) => void;

}

export const Input: FC<InputProps> = ({
	className,
	value,
	placeholder,
	label,
	type = "text",
	readOnly,
	onChange,
}) => {


	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={cls.Input}>
			{label && <span className={cls.Input__label}>{label}</span>}
			<input
				className={classNames(cls.Input__field, {}, [className])}
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