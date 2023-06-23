import cls from "./Sidebar.module.scss";
import MainSvg from "shared/assets/main.svg";
import AboutSvg from "shared/assets/about.svg";

import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [collapsed, setColappsed] = useState(false);
	const {t} = useTranslation("navbar");

	const onToggle = () => {
		setColappsed(prev => !prev);
	};

	return (
		<div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
			<div className={cls.links}>
				<AppLink className={cls.link} to={"/"}>
					<MainSvg className={cls.mainSvg} />
					<span className={collapsed ? cls.block : null}> {t("routeMain")}</span>
				</AppLink>
				<AppLink className={cls.link} to={"/about"}>
					<AboutSvg className={cls.aboutSvg} />
					<span className={collapsed ? cls.block : null}>{t("routeAbout")}</span>
				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
				<Button className={cls.toggle} data-testid="sidebar-toggle" theme={ThemeButton.CLEAR} onClick={onToggle}>{collapsed ? ">" : "<"}</Button>
			</div>
		</div>
	);
};