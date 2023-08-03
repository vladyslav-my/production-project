import { ElementType, FC } from "react";
import cls from "./MainElementsLayout.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppContainer, Container } from "@/shared/layouts/AppContainer";

interface MainElementsLayoutProps {
	className?: string;
	navbar: ElementType;
	sidebar: ElementType;
	main?: ElementType;
}

export const MainElementsLayout: FC<MainElementsLayoutProps> = ({
	className,
	navbar: Navbar,
	sidebar: Sidebar,
	main: Main
}) => {

	
	return (
		<div className={classNames(cls.MainElementsLayout, {}, [className])}>
			<Navbar className={cls.MainElementsLayout__navBar} />
			<Sidebar className={cls.MainElementsLayout__sideBar} />
			<div className={cls.MainElementsLayout__mainBar}>
				<div className={cls.MainElementsLayout__main}>
					{Main && <Main />}
				</div>
				{/* <AppContainer container={Container.MAIN}>
					<AppContainer container={Container.PAGE}>
						<div className={cls.pageBar}>PAGE</div>
					</AppContainer>
					<AppContainer container={Container.WIDGET}>
						<div className={cls.widgetBar}>WIDGET</div>
					</AppContainer>
					
				</AppContainer> */}
			</div>

		</div>
	);
};