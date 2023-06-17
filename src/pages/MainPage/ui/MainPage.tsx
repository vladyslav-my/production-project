import { FC } from "react";
import cls from "./MainPage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary";

interface MainPageProps {
    className?: string
}

const MainPage: FC<MainPageProps> = ({ className }) => {
	const {t} = useTranslation("main");
	return (
		<div className={classNames(cls.MainPage, {}, [className])}>
			{t("text")}
			<BugButton />
		</div>
	);
};

export default MainPage;