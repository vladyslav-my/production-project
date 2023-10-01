import { FC } from "react";
import cls from "./RouteFeaturesContainer.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Shell } from "@/shared/layouts/Shell";
import { BackToPrevRoute } from "@/features/BackToPrevRoute";

interface RouteFeaturesContainerProps {
	className?: string
}

export const RouteFeaturesContainer: FC<RouteFeaturesContainerProps> = ({ className }) => {
	return (
		<Shell className={classNames(cls.RouteFeaturesContainer, {}, [className])}>
			<BackToPrevRoute className={cls.RouteFeaturesContainer__back} />
		</Shell>
	);
};