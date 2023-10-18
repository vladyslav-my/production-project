import { FC, memo } from "react";
import ThemeIcon from "@/shared/assets/icons/Sidebar/theme.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Button } from "@/shared/ui/Buttons";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
	const { toggleTheme } = useTheme();
	return (
		<Button
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			<ThemeIcon className={classNames(`${cls.themIcon} ${cls.ThemeSwitcher__themeIcon}`)} />
		</Button>
	);
});
