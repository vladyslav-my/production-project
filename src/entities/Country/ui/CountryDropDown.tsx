import { FC } from "react";
import cls from "./CountryDropDown.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Country } from "../model/types/Country";
import { DropDown, DropDownOption } from "@/shared/ui/DropDown";


const options: DropDownOption[] = [
	{
		content: Country.UKRAINE,
		value: Country.UKRAINE
	},
	{
		content: Country.POLAND,
		value: Country.POLAND
	},
	{
		content: Country.USA,
		value: Country.USA
	}
];

interface CountryDropDownProps {
	className?: string;
	value?: string;
	readOnly: boolean;
	label?: string;
	onChange?: () => void;
}

export const CountryDropDown: FC<CountryDropDownProps> = ({ className, value, label, readOnly, onChange }) => {
	return (
		<DropDown
			className={classNames(cls.CountryDropDown, {}, [className])} 
			options={options}
			onChange={onChange}
			select={value}
			readOnly={readOnly}
			label={label}
		/>
	);
};