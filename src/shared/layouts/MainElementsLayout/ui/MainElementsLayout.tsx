import { ElementType, FC, useEffect, useRef } from "react";
import cls from "./MainElementsLayout.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppContainer, Container } from "@/shared/layouts/AppContainer";
import { useMediaQuery } from "react-responsive";
import { AppMediaQuery, Devices } from "@/shared/lib/mediaQuery";

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

	const ref = useRef<any>(null);
	const mainBarRef = useRef<any>(null);

	useEffect(() => {
		console.log(ref);
		let lastScroll = 0;
		const defaultOffset = 200;

		const scrollPosition = () => mainBarRef.current.pageYOffset || mainBarRef.current.scrollTop;
		const containHide = () => ref.current.classList.contains(cls.hide);
		
		mainBarRef.current.addEventListener("scroll", () => {
			console.log(1);
			if(scrollPosition() > lastScroll && !containHide()) {
				//scroll down
				console.log("scroll down");
				ref.current.classList.add(cls.hide);
			}
			else if(scrollPosition() < lastScroll && containHide()){
				console.log("scrollup");
				//scroll up
				ref.current.classList.remove(cls.hide);
			}

			lastScroll = scrollPosition();
		});
	}, []);
	
	return (
		<div className={classNames(cls.MainElementsLayout, {}, [className])}>
			<AppMediaQuery minWidth={Devices.BREAKPOINT_1800} >
				<div ref={ref} className={cls.MainElementsLayout__navBar}>
					<Navbar />
				</div>
			</AppMediaQuery>
			<AppMediaQuery maxWidth={Devices.BREAKPOINT_1394} >
				<div ref={ref} className={cls.MainElementsLayout__navBar}>
					<Navbar />
				</div>
			</AppMediaQuery>	
			<div className={cls.MainElementsLayout__sideBar}>
				<Sidebar />
			</div>
			
			<div ref={mainBarRef} className={cls.MainElementsLayout__mainBar}>
				{Main && <Main />}
			</div>

		</div>
	);
};