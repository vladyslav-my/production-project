import { FC, ReactNode } from "react";
import cls from "./Page.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppContainer, Container } from "../../AppContainer";
import { Shell } from "../../Shell";
import { Navbar } from "@/widgets/Navbar";
import { AppMediaQuery, Devices } from "@/shared/lib/mediaQuery";

interface PageProps {
	className?: string;
	children: ReactNode;
	Widget?: ReactNode;
	Feature?: ReactNode;
}

const NavbarWidget = () => {
	return (
		<Shell>
			<Navbar />
		</Shell>
	);
};

export const Page: FC<PageProps> = ({ className, children, Widget, Feature }) => {
	return (
		<AppContainer 
			className={classNames(cls.Page, {}, [className])}
			container={Container.MAIN}
			Page={children}
			Widget={
				<>
					<AppMediaQuery maxWidth={Devices.BREAKPOINT_1800} minWidth={Devices.BREAKPOINT_1394}>
						<NavbarWidget />
					</AppMediaQuery>
					{Widget}
				</>
			}
			Feature={Feature}
		/>
	);
};