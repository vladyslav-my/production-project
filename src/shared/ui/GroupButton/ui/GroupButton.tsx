import { FC, useCallback, useMemo } from "react";
import { classNames } from "../../../lib/classNames/classNames";
import { Button, ButtonTheme } from "../../Buttons";
import cls from "./GroupButton.module.scss";

interface GroupButtonProps {
	className?: string;
	options: ButtonOptions[];
	value?: string;
	onChange?: (value: string) => void;
	disabled?: boolean;
}

interface ButtonOptions {
	value: string;
	content: string;
}

export const GroupButton: FC<GroupButtonProps> = ({
	className, options, value, onChange, disabled,
}) => {
	const onButtonClickHandler = useCallback(
		(content: string) => () => {
			if (!disabled) {
				onChange?.(content);
			}
		},
		[onChange],
	);

	const buttons = useMemo(
		() => options.map((option) => (
			<Button
				className={classNames(cls.GroupButton__button, {
					[cls.GroupButton__button_active]: value === option.value,
					[cls.GroupButton__button_disabled]: disabled,
				})}
				key={option.value}
				theme={ButtonTheme.FILL}
				onClick={onButtonClickHandler(option.value)}
			>
				{option.content}
			</Button>
		)),
		[value, onButtonClickHandler, options, disabled],
	);

	return <div className={classNames(cls.GroupButton, {}, [className])}>{buttons}</div>;
};
