import { FC, ReactNode } from "react";
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { Navbar } from "@/widgets/Navbar";
import { classNames } from "../../../lib/classNames/classNames";
import { AppMediaQuery, Devices } from "../../../lib/mediaQuery";
import cls from "./RouteContainer.module.scss";

interface RouteContainerProps {
	className?: string;
	children: ReactNode;
	Widget?: ReactNode;
	Feature?: ReactNode;
}

export const RouteContainer: FC<RouteContainerProps> = ({
	className, children, Widget, Feature,
}) => (
	<div className={classNames(cls.RouteContainer, {}, [className])}>
		{
			!!Feature && (
				<div className={cls.RouteContainer__feature}>
					{Feature}
				</div>
			)
		}
		<div className={cls.RouteContainer__page}>
			{children}
		</div>
		<div className={cls.RouteContainer__widget}>
			<div className={cls.RouteContainer__widgetSticky}>
				<AppMediaQuery
					maxWidth={Devices.BREAKPOINT_1800}
					minWidth={Devices.TABLET}
				>
					<Navbar />
				</AppMediaQuery>
				{Widget}
			</div>
		</div>
	</div>
);
