import { ElementType, FC, useEffect, useRef } from "react";
import cls from "./AppLayoutContainer.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useMediaQuery } from "react-responsive";
import { Devices } from "@/shared/lib/mediaQuery";

interface AppLayoutContainerProps {
	className?: string;
	navbar: ElementType;
	sidebar: ElementType;
	main?: ElementType;
}



export const AppLayoutContainer: FC<AppLayoutContainerProps> = ({
	className,
	navbar: Navbar,
	sidebar: Sidebar,
	main: Main
}) => {

	const isTablet = useMediaQuery({ maxWidth: Devices.TABLET });
	const isBreakpoint_1800 = useMediaQuery({ minWidth: Devices.BREAKPOINT_1800 });
	
	const ref = useRef<any>(null);

	useEffect(() => {
		let lastScroll = 0;
		const defaultOffset = 200;

		const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
		const containHide = () => ref.current.classList.contains(cls.hide);
		const smartHeader = () => {
			if(scrollPosition() > lastScroll && !containHide()) {
				ref.current.classList.add(cls.hide);
			}
			else if(scrollPosition() < lastScroll && containHide()){
				ref.current.classList.remove(cls.hide);
			}

			lastScroll = scrollPosition();
		};
		
		isTablet && window.addEventListener("scroll", smartHeader);

		return () => {
			window.removeEventListener("scroll", smartHeader);
		};

	}, [isTablet]);
	


	
	return (
		<div className={classNames(cls.ALC, {}, [className])}>
			{isBreakpoint_1800 && <Navbar shell className={cls.ALC__navbar} />}
			{!isTablet && <div className={cls.ALC__sidebarWrapper}>
				<Sidebar className={cls.ALC__sidebar} />
			</div>}
			{isTablet && <div ref={ref} className={cls.ALC__fixed}>
				<Navbar shell className={cls.ALC__navbar} />
				<Sidebar className={cls.ALC__sidebar} />
			</div>}

			{Main && <Main className={cls.ALC__main} />}
		</div>
	);

};
