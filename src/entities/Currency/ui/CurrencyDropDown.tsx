import { FC } from "react";
import cls from "./CurrencyDropDown.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Currency } from "../model/types/Currency";
import { DropDown, DropDownOption } from "@/shared/ui/DropDown";


const options: DropDownOption[] = [
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

interface CurrencyDropDownProps {
	className?: string;
	value?: string;
	readOnly: boolean;
	label?: string;
	onChange?: () => void;
}

export const CurrencyDropDown: FC<CurrencyDropDownProps> = ({ className, value, label, readOnly, onChange }) => {
	return (
		<DropDown
			className={classNames(cls.CurrencyDropDown, {}, [className])} 
			options={options}
			onChange={onChange}
			select={value}
			readOnly={readOnly}
			label={label}
		/>
	);
};