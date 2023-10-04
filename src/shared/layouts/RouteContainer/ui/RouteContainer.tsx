import { FC, ReactNode } from "react";
import cls from "./RouteContainer.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Navbar } from "@/widgets/Navbar";
import { useMediaQuery } from "react-responsive";
import { AppMediaQuery, Devices } from "@/shared/lib/mediaQuery";
import { Shell } from "../../Shell";
import { createElement } from "react";

interface RouteContainerProps {
	className?: string;
	children: ReactNode;
	Widget?: ReactNode;
	Feature?: ReactNode;
}


export const RouteContainer: FC<RouteContainerProps> = ({ className, children, Widget, Feature }) => {

	return (
		<div className={classNames(cls.RouteContainer, {}, [className])}>
			{Feature && <div className={cls.RouteContainer__feature}>
				{Feature}
			</div>}
			<div className={cls.RouteContainer__page}>
				{children}
			</div>
			<div className={cls.RouteContainer__widget}>
				<div className={cls.RouteContainer__widgetSticky}>
					<AppMediaQuery 
						minWidth={Devices.TABLET}
						maxWidth={Devices.BREAKPOINT_1800}
					>
						<Navbar shell />
					</AppMediaQuery>
					{Widget}
				</div>
			</div>
		</div>
	);
};