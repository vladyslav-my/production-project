import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Buttons";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
	className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
	const { t, i18n } = useTranslation("translation");

	const toggle = async () => {
		i18n.changeLanguage(i18n.language === "en" ? "uk" : "en");
	};

	return (
		<Button className={classNames(cls.LangSwitcher, {}, [className])} theme={ButtonTheme.CLEAR} onClick={toggle}>
			{t("lang")}
		</Button>
	);
};
