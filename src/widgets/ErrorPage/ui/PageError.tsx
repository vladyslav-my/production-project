import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "@/shared/ui/Button";
import cls from "./PageError.module.scss";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};

	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<p>{t("Произошла непредвиденная ошибка")}</p>
			<Button onClick={reloadPage} theme={ThemeButton.OUTLINE}>
				{t("Обновить страницу")}
			</Button>
		</div>
	);
};
