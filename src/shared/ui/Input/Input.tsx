import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Icon as IconComponent } from "../Icon";

export enum InputTheme {
	MEDIUM = "Input_size_medium",
	SMALL = "Input_size_small"
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
	className?: string,
	value?: string,
	type?: string,
	placeholder?: string,
	label?: string,
	readOnly?: boolean
	onChange?: (value: string) => void;
	theme?: InputTheme;
	Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}


export const Input: FC<InputProps> = ({
	className,
	value,
	placeholder,
	label,
	type = "text",
	readOnly,
	onChange,
	Icon,
	theme = InputTheme.MEDIUM
}) => {


	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={classNames(cls.Input, {
			[cls.Input_icon]: !!Icon
		}, [className, 
			cls[theme]])}
		>
			{label && <span className={cls.Input__label}>{label}</span>}
			<div className={cls.Input__wrapper}>
				{Icon && <IconComponent width={15} height={15} className={cls.Input__icon} Svg={Icon} />}
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
		</div>

	);
};