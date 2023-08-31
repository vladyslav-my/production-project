import { FC } from "react";
import cls from "./MainPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { BugButton } from "@/app/providers/ErrorBoundary";
import { Counter } from "@/entities/Counter/ui/Counter";
import { RouteContainer } from "@/shared/layouts/RouteContainer";

interface MainPageProps {
    className?: string
}

const MainPage: FC<MainPageProps> = ({ className }) => {
	const { t } = useTranslation("main");
	return (
		<RouteContainer className={classNames(cls.MainPage, {}, [className])}>
			{t("text")}
			<BugButton />
			<Counter></Counter>
		</RouteContainer>
	);
};

export default MainPage;