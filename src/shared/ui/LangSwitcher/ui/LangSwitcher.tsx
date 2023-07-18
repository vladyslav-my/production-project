import { FC } from "react";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { useTranslation } from "react-i18next";


interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {

	const { t, i18n } = useTranslation("translation");

	const toggle = async () => {
		i18n.changeLanguage(i18n.language === "en" ? "uk" : "en");
	};

	return (
		<Button className={classNames(cls.LangSwitcher, {}, [className])} onClick={toggle} theme={ThemeButton.CLEAR}>
			{t("lang")}
		</Button>
	);
};