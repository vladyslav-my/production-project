import {
	ChangeEvent, FC, InputHTMLAttributes, memo,
} from "react";
import { classNames } from "../../lib/classNames/classNames";
import { Icon as IconComponent } from "../Icon";
import cls from "./Input.module.scss";

export enum InputTheme {
	MEDIUM = "Input_size_medium",
	SMALL = "Input_size_small",
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	type?: string;
	placeholder?: string;
	label?: string;
	readOnly?: boolean;
	onChange?: (value: string) => void;
	theme?: InputTheme;
	Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Input: FC<InputProps> = memo(({
	className,
	value,
	placeholder,
	label,
	type = "text",
	readOnly,
	onChange,
	Icon,
	theme = InputTheme.MEDIUM,
	disabled,
}) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div
			className={classNames(
				cls.Input,
				{
					[cls.Input_icon]: !!Icon,
					[cls.Input_disabled]: disabled,
				},
				[className, cls[theme]],
			)}
		>
			{label && (
				<span className={cls.Input__label}>
					{label}
					:
				</span>
			)}
			<div className={cls.Input__wrapper}>
				{Icon && (
					<IconComponent Svg={Icon} className={cls.Input__icon} height={15} width={15} />
				)}
				<input
					disabled={disabled}
					className={classNames(cls.Input__field, {}, [className])}
					placeholder={placeholder}
					readOnly={readOnly}
					type={type}
					value={value}
					onChange={onChangeHandler}
				/>
			</div>
		</div>
	);
});
