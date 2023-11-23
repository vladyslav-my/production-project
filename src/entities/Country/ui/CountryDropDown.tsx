import { FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DropDown, DropDownOption } from "@/shared/ui/DropDown";
import { Country } from "../model/types/Country";
import cls from "./CountryDropDown.module.scss";

const options: DropDownOption[] = [
	{
		content: Country.UKRAINE,
		value: Country.UKRAINE,
	},
	{
		content: Country.POLAND,
		value: Country.POLAND,
	},
	{
		content: Country.USA,
		value: Country.USA,
	},
];

interface CountryDropDownProps {
	className?: string;
	value?: string;
	readOnly: boolean;
	label?: string;
	onChange?: () => void;
	disabled?: boolean;
}

export const CountryDropDown: FC<CountryDropDownProps> = memo(({
	className,
	value,
	label,
	readOnly,
	onChange,
	disabled,
}) => (
	<DropDown
		className={classNames(cls.CountryDropDown, {}, [className])}
		label={label}
		options={options}
		readOnly={readOnly}
		select={value}
		onChange={onChange}
		disabled={disabled}
	/>
));
