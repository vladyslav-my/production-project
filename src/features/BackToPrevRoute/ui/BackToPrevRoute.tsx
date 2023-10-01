import { FC, useCallback } from "react";
import cls from "./BackToPrevRoute.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useNavigate } from "react-router-dom";
import { Button, ButtonTheme } from "@/shared/ui/Buttons";

interface BackToPrevRouteProps {
	className?: string
}

export const BackToPrevRoute: FC<BackToPrevRouteProps> = ({ className }) => {
	const navigate = useNavigate();
	
	const onClickHandler = useCallback(() => {
		navigate(-1);
	}, []);

	return (
		<Button 
			className={classNames(cls.BackToPrevRoute, {}, [className])}
			theme={ButtonTheme.OUTLINE} 
			onClick={onClickHandler} 
		>
			Назад
		</Button>
	);
};


