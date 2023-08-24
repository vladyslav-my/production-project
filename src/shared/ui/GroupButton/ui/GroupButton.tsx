import { FC, useMemo } from "react";
import cls from "./GroupButton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ThemeButton } from "../../Button";

interface GroupButtonProps {
	className?: string;
	options: ButtonOptions[];
	value?: string;
	onChange: (value: string) => void;
}

interface ButtonOptions {
	value: string;
	content: string;
}

export const GroupButton: FC<GroupButtonProps> = ({ className, options, value, onChange }) => {
	const onButtonClickHandler = (content: string) => () => {
		onChange?.(content);
	};


	const buttons = useMemo(() => (
		options.map((option) => (
			<Button 
				className={classNames(cls.GroupButton__button, {
					[cls.GroupButton_active]: value === option.value
				})}
				onClick={onButtonClickHandler(option.value)} 
				key={option.value} 
				theme={ThemeButton.FILL}
			>
				{option.content}
			</Button>
		))
	), [value]);

	return (
		<div className={classNames(cls.GroupButton, {}, [className])}>
			{buttons}
		</div>
	);
};