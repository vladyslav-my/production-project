import { ChangeEvent, FC } from "react";
import cls from "./Select.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export interface SelectOption {
	value: string;
	content: string;
}

interface SelectProps {
	className?: string;
	value?: string;
	readOnly: boolean;
	options?: SelectOption[];
	externalPlaceholder?: string;
	onChange?: (value: string) => void;
}

export const Select: FC<SelectProps> = ({ className, value, options, readOnly, externalPlaceholder, onChange }) => {


	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value);
		
	};

	const optionList = options?.map((opt) => (
		<option 
			key={opt.value}
			value={opt.value}
			className={cls.selectOption}
		>{opt.content}</option>
	));

	return (
		<div className={classNames(cls.Select, {}, [className])}>
			{externalPlaceholder && <span>{externalPlaceholder}</span>}
			<select
				className={cls.selectItem}
				disabled={readOnly}
				value={value}
				onChange={onChangeHandler}
			>
				{optionList}
			</select>
		</div>
	);
};