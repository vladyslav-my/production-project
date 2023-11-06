import {
	ElementType, FC, useRef,
} from "react";
import { useMediaQuery } from "react-responsive";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useSmartHeader } from "@/shared/lib/hooks/useSmartHeader/useSmartHeader";
import { Devices } from "@/shared/lib/mediaQuery";
import cls from "./AppLayoutContainer.module.scss";

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
	main: Main,
}) => {
	const isTablet = useMediaQuery({ maxWidth: Devices.TABLET });
	const isLargeDesktop = useMediaQuery({ maxWidth: Devices.LARGE_DESKTOP });

	const ref = useRef<any>(null);
	useSmartHeader({
		ref, condition: isTablet, className: cls.hide, defaultOffset: 200,
	});
	// 	let lastScroll = 0;
	// 	const defaultOffset = 200;

	// 	const scrollPosition = () => window.scrollY;
	// 	const containHide = () => ref.current.classList.contains(cls.hide);
	// 	const smartHeader = () => {
	// 		if (scrollPosition() > lastScroll && scrollPosition() > defaultOffset && !containHide()) {
	// 			ref.current.classList.add(cls.hide);
	// 		} else if (scrollPosition() < lastScroll && containHide()) {
	// 			ref.current.classList.remove(cls.hide);
	// 		}

	// 		lastScroll = scrollPosition();
	// 	};

	// 	if (isTablet) {
	// 		window.addEventListener("scroll", smartHeader);
	// 	}

	// 	return () => {
	// 		window.removeEventListener("scroll", smartHeader);
	// 	};
	// }, [isTablet]);

	return (
		<div className={classNames(cls.ALC, {}, [className])}>
			<div className={cls.ALC__fixed} ref={ref}>
				{isTablet || !isLargeDesktop ? <Navbar className={cls.ALC__navbar} /> : null}
				<Sidebar className={cls.ALC__sidebar} />
			</div>
			{Main && <Main className={cls.ALC__main} />}
		</div>
	);
};
