import { FC, useCallback, useMemo } from "react";
import { classNames } from "../../../lib/classNames/classNames";
import { Button, ButtonTheme } from "../../Buttons";
import cls from "./GroupButton.module.scss";

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

export const GroupButton: FC<GroupButtonProps> = ({
	className, options, value, onChange,
}) => {
	const onButtonClickHandler = useCallback((content: string) => () => {
		onChange?.(content);
	}, [onChange]);

	const buttons = useMemo(() => (
		options.map((option) => (
			<Button
				className={classNames(cls.GroupButton__button, {
					[cls.GroupButton_active]: value === option.value,
				})}
				key={option.value}
				theme={ButtonTheme.FILL}
				onClick={onButtonClickHandler(option.value)}
			>
				{option.content}
			</Button>
		))
	), [value, onButtonClickHandler, options]);

	return (
		<div className={classNames(cls.GroupButton, {}, [className])}>
			{buttons}
		</div>
	);
};
