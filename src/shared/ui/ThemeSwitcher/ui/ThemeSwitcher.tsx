import { FC, memo } from "react";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/app/providers/ThemeProvider";
// import ThemeIconSvg from "@/shared/assets/theme.svg";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeButton } from "@/shared/ui/Button/ui/Button";
import { Button } from "@/shared/ui/Button/ui/Button";
import ThemeIcon from "@/shared/assets/icons/Sidebar/theme.svg";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
			<ThemeIcon className={classNames(cls.themeIcon, {
				[cls["themeIcon_light"]]: theme === Theme.LIGHT,
				[cls["themeIcon_dark"]]: theme === Theme.DARK,
			}, [])} />
		</Button>
	);
});

