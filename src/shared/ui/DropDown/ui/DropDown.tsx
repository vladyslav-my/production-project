import { ChangeEvent, FC, MouseEventHandler, useEffect, useMemo, useRef, useState } from "react";
import cls from "./DropDown.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import ArrowIcon from "@/shared/assets/icons/Sidebar/arrow.svg";


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
}

export const DropDown: FC<DropDownProps> = ({
	className,
	options,
	select,
	label,
	readOnly = false,
	onChange
}) => {
	const [unroll, setUnroll] = useState(false);
	const [size, setSize] = useState<string | undefined>(undefined);

	const dropDownMenu = useRef<HTMLDivElement>(null);
	const dropDownSelect = useRef<HTMLDivElement>(null);

	const onMenuItemClickHandler = (content: string) => () => {
		onChange?.(content);
	};


	const onSelfClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
		e.stopPropagation();
		setUnroll((prev) => !prev);
	};

	useEffect(() => {
		const widthMenu = dropDownMenu.current?.scrollWidth;
		const widthSelect = dropDownSelect.current?.scrollWidth;
		if ((widthMenu && widthSelect) && widthSelect > widthMenu) {
			setSize(`${widthSelect}px`);
		} else {
			setSize(`${widthMenu}px`);
		}

	}, [dropDownMenu, dropDownSelect, size]);

	useEffect(() => {
		const onCloseClickHandler = () => {
			setUnroll(false);
		};

		window.addEventListener("click", onCloseClickHandler);

		return () => {
			window.removeEventListener("click", onCloseClickHandler);
		};

	}, []);

	const menuItem = useMemo(() => (
		options.map(({ value, content }) => (
			<div onClick={readOnly ? undefined : onMenuItemClickHandler(value)} 
				key={value} 
				className={classNames(cls.DropDown__menuItem, {
					[cls.DropDown__menuItem_active]: select === value
				})}
			>
				{content}
			</div>
		))
	), [select, readOnly]);


	return (
		<div 
			className={classNames(cls.DropDown, {
				[cls.DropDown_unroll]: unroll,
				[cls.DropDown_cursor]: readOnly
			}, [className])}
		>
			{label && <span className={cls.DropDown__label}>{label}:</span>}
			<div
				onClick={readOnly ? undefined : onSelfClickHandler}
				style={{ width: size }}
				className={cls.DropDown__self}
			>
				<div ref={dropDownSelect} className={cls.DropDown__select}>
					<div className={cls.DropDown__currentValue}>
						{
							options.map(option => option.value === select ? option.content : null)
						}
					</div>
					<ArrowIcon className={cls.DropDown__arrowIcon} />
				</div>
				<div
					ref={dropDownMenu}
					className={cls.DropDown__menu}>
					{menuItem}
				</div>
			</div>
		</div>
	);
};