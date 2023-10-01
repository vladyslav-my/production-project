import { FC, memo } from "react";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/app/providers/ThemeProvider";
import { Theme } from "@/app/providers/ThemeProvider";
import { Button } from "@/shared/ui/Buttons";
import ThemeIcon from "@/shared/assets/icons/Sidebar/theme.svg";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button
			className={classNames(cls.ThemeSwitcher, {}, [className])} 
			onClick={toggleTheme}
		>
			<ThemeIcon className={classNames(`${cls.themIcon} ${cls.ThemeSwitcher__themeIcon}`)} />
		</Button>
	);
});

