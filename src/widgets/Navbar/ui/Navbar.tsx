import { FC } from "react";
import cls from "./Navbar.module.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavBarProps {
    className?: string
}

export const Navbar: FC<NavBarProps> = ({ className }) => {
	const {t} = useTranslation("navbar");
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink to={"/"}>{t("routeMain")}</AppLink>
				<AppLink to={"/about"}>{t("routeAbout")}</AppLink>
			</div>
		</div>
	);
};
