import { FC } from "react";
import cls from "./CountrySelect.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Select, SelectOption } from "@/shared/ui/Select";
import { Country } from "../model/types/Country";


const options: SelectOption[] = [
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

interface CountrySelectProps {
	className?: string;
	value?: string;
	readOnly: boolean;
	externalPlaceholder?: string;
	onChange?: () => void;
}

export const CountrySelect: FC<CountrySelectProps> = ({ className, value, externalPlaceholder, readOnly, onChange }) => {
	return (
		<Select 
			className={classNames(cls.CountrySelect, {}, [className])} 
			options={options}
			onChange={onChange}
			value={value}
			readOnly={readOnly}
			externalPlaceholder={externalPlaceholder}
		/>

	);
};