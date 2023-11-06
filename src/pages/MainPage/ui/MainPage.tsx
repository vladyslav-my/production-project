import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Counter } from "@/entities/Counter";
import { RouteContainer } from "@/shared/layouts/RouteContainer";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";

interface MainPageProps {
	className?: string;
}

const MainPage: FC<MainPageProps> = ({ className }) => {
	const { t } = useTranslation("main");
	return (
		<RouteContainer className={classNames(cls.MainPage, {}, [className])}>
			{t("text")}
			<Counter />
		</RouteContainer>
	);
};

export default MainPage;
