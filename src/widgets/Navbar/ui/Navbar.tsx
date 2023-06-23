import cls from "./Navbar.module.scss";


import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface NavBarProps {
    className?: string
}

export const Navbar: FC<NavBarProps> = ({ className }) => {
	const {t} = useTranslation("navbar");
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>

		</div>
	);
};
