import {
	ElementType, FC, useEffect, useRef,
} from "react";
import { useMediaQuery } from "react-responsive";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Devices } from "@/shared/lib/mediaQuery";
import cls from "./AppLayoutContainer.module.scss";

interface AppLayoutContainerProps {
	className?: string;
	navbar: ElementType;
	sidebar: ElementType;
	main: ElementType | false;
}

export const AppLayoutContainer: FC<AppLayoutContainerProps> = ({
	className,
	navbar: Navbar,
	sidebar: Sidebar,
	main: Main,
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
			if (scrollPosition() > lastScroll && !containHide()) {
				ref.current.classList.add(cls.hide);
			} else if (scrollPosition() < lastScroll && containHide()) {
				ref.current.classList.remove(cls.hide);
			}

			lastScroll = scrollPosition();
		};

		if (isTablet) {
			window.addEventListener("scroll", smartHeader);
		}

		return () => {
			window.removeEventListener("scroll", smartHeader);
		};
	}, [isTablet]);

	return (
		<div className={classNames(cls.ALC, {}, [className])}>
			{!!isBreakpoint_1800 && <Navbar className={cls.ALC__navbar} />}
			{!isTablet && (
				<div className={cls.ALC__sidebarWrapper}>
					<Sidebar className={cls.ALC__sidebar} />
				</div>
			)}
			{!!isTablet && (
				<div className={cls.ALC__fixed} ref={ref}>
					<Navbar className={cls.ALC__navbar} />
					<Sidebar className={cls.ALC__sidebar} />
				</div>
			)}
			{!!Main && <Main className={cls.ALC__main} />}
		</div>
	);
};
