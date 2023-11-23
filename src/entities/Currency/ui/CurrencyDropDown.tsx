import { FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DropDown, DropDownOption } from "@/shared/ui/DropDown";
import { Currency } from "../model/types/Currency";
import cls from "./CurrencyDropDown.module.scss";

const options: DropDownOption[] = [
	{
		content: Currency.UAH,
		value: Currency.UAH,
	},
	{
		content: Currency.EUR,
		value: Currency.EUR,
	},
	{
		content: Currency.USD,
		value: Currency.USD,
	},
];

interface CurrencyDropDownProps {
	className?: string;
	value?: string;
	readOnly: boolean;
	label?: string;
	onChange?: () => void;
	disabled?: boolean;
}

export const CurrencyDropDown: FC<CurrencyDropDownProps> = memo(({
	className,
	value,
	label,
	readOnly,
	onChange,
	disabled,
}) => (
	<DropDown
		className={classNames(cls.CurrencyDropDown, {}, [className])}
		label={label}
		options={options}
		readOnly={readOnly}
		select={value}
		onChange={onChange}
		disabled={disabled}
	/>
));
