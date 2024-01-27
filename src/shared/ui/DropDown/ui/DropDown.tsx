import {
	FC, memo, useCallback, useEffect, useMemo, useRef, useState,
} from "react";
import { useTranslation } from "react-i18next";
import ArrowIcon from "../../../assets/icons/Sidebar/arrow.svg";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./DropDown.module.scss";

export interface DropDownOption {
	value: string;
	content: string;
}

interface DropDownProps {
	className?: string;
	select?: string;
	label?: string;
	readOnly?: boolean;
	options: DropDownOption[];
	onChange?: (value: string) => void;
	disabled?: boolean;
}

export const DropDown: FC<DropDownProps> = memo(({
	className,
	options,
	select,
	label,
	readOnly = false,
	onChange,
	disabled,
}) => {
	const [unroll, setUnroll] = useState(false);
	const [size, setSize] = useState<string | undefined>(undefined);
	const { t, i18n } = useTranslation();

	const dropDownMenu = useRef<HTMLDivElement>(null);
	const dropDownSelect = useRef<HTMLDivElement>(null);

	const onMenuItemClickHandler = useCallback(
		(value: string) => () => {
			if (!disabled) {
				onChange?.(value);
			}
		},
		[onChange],
	);

	const onSelfClickHandler = (e: any) => {
		//! MouseEventHandler<HTMLDivElement>
		if (!readOnly && !disabled) {
			e.stopPropagation();
			setUnroll((prev) => !prev);
		}
	};

	useEffect(() => {
		const widthMenu = dropDownMenu.current?.scrollWidth;
		// const widthSelect = dropDownSelect.current?.scrollWidth;

		// if (!widthSelect > !widthMenu) {
		// 	setSize(`${widthSelect}px`);
		// 	console.log("width select active", widthSelect);
		// } else {
		// 	setSize(`${widthMenu}px`);
		// 	console.log("width menu active", widthMenu);
		// }
		setSize(`${widthMenu}px`);
	}, [dropDownMenu, dropDownSelect, size, i18n.language]);

	useEffect(() => {
		const onCloseClickHandler = () => {
			setUnroll(false);
		};

		window.addEventListener("click", onCloseClickHandler);

		return () => {
			window.removeEventListener("click", onCloseClickHandler);
		};
	}, []);

	const menuItem = useMemo(
		() => options.map(({ value, content }) => (
			<div
				className={classNames(cls.DropDown__menuItem, {
					[cls.DropDown__menuItem_active]: select === value,
				})}
				key={value}
				onClick={onMenuItemClickHandler(value)}
			>
				{content}
			</div>
		)),
		[select, onMenuItemClickHandler, options],
	);

	return (
		<div
			className={classNames(
				cls.DropDown,
				{
					[cls.DropDown_unroll]: unroll,
					[cls.DropDown_disabled]: disabled || readOnly,
				},
				[className],
			)}
		>
			{!!label && (
				<span className={cls.DropDown__label}>
					{label}
					:
				</span>
			)}
			<div className={cls.DropDown__self} style={{ width: size }} onClick={onSelfClickHandler}>
				<div className={cls.DropDown__select} ref={dropDownSelect}>
					<div className={cls.DropDown__currentValue}>
						{options.map((option) => (option.value === select ? option.content : null))}
					</div>
					<ArrowIcon className={cls.DropDown__arrowIcon} />
				</div>
				<div className={cls.DropDown__menu} ref={dropDownMenu}>
					{menuItem}
				</div>
			</div>
		</div>
	);
});
