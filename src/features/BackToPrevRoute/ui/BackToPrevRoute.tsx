import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Buttons";
import cls from "./BackToPrevRoute.module.scss";

interface BackToPrevRouteProps {
	className?: string;
}

export const BackToPrevRoute: FC<BackToPrevRouteProps> = ({ className }) => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const onClickHandler = useCallback(() => {
		navigate(-1);
	}, [navigate]);

	return (
		<Button
			className={classNames(cls.BackToPrevRoute, {}, [className])}
			theme={ButtonTheme.OUTLINE}
			onClick={onClickHandler}
		>
			{t("back")}
		</Button>
	);
};
