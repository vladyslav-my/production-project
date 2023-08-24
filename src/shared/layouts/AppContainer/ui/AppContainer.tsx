import { FC, ReactNode } from "react";
import cls from "./AppContainer.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface AppContainerProps {
	className?: string;
	children?: ReactNode;
	container: Container;
	Page?: ReactNode;
	Widget?: ReactNode;
	Feature?: ReactNode;
}

export enum Container {
	APP = "AppContainer_app",
	MAIN = "AppContainer_main",
	PAGE = "AppContainer_page",
	WIDGET = "AppContainer_widget"
}

export const AppContainer: FC<AppContainerProps> = ({ className, children, container = Container.APP, Page, Widget, Feature }) => {

	if (container === Container.MAIN) {
		return (
			<div className={classNames(cls.AppContainer, {}, [className, cls[container]])}>
				<div className={cls.AppContainer__feature}>
					{Feature}
				</div>
				<div className={cls.AppContainer__page}>
					{Page}
				</div>
				<div className={cls.AppContainer__widget}>
					<div className={cls.sticky}>
						{Widget}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={classNames(cls.AppContainer, {}, [className, cls[container]])}>
			{children}
		</div>
	);
};