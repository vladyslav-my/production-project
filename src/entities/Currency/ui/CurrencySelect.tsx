import { FC } from "react";
import cls from "./CurrencySelect.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Select, SelectOption } from "shared/ui/Select";
import { Currency } from "../model/types/Currency";



const options: SelectOption[] = [
	{
		content: Currency.UAH,
		value: Currency.UAH
	},
	{
		content: Currency.EUR,
		value: Currency.EUR
	},

	{
		content: Currency.USD,
		value: Currency.USD
	}
];

interface CurrencySelectProps {
	className?: string;
	value?: string;
	readOnly: boolean;
	externalPlaceholder?: string;
	onChange?: () => void;
}

export const CurrencySelect: FC<CurrencySelectProps> = ({ className, value, externalPlaceholder, readOnly, onChange }) => {
	return (
		<Select 
			className={classNames(cls.CurrencySelect, {}, [className])} 
			options={options}
			onChange={onChange}
			value={value}
			readOnly={readOnly}
			externalPlaceholder={externalPlaceholder}
		/>

	);
};