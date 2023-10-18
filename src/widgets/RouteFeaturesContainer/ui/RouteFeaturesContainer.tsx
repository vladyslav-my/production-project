import { FC } from "react";
import { BackToPrevRoute } from "@/features/BackToPrevRoute";
import { Shell } from "@/shared/layouts/Shell";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./RouteFeaturesContainer.module.scss";

interface RouteFeaturesContainerProps {
	className?: string
}

export const RouteFeaturesContainer: FC<RouteFeaturesContainerProps> = ({ className }) => (
	<Shell className={classNames(cls.RouteFeaturesContainer, {}, [className])}>
		<BackToPrevRoute className={cls.RouteFeaturesContainer__back} />
	</Shell>
);
