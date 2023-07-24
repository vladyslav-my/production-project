import { ElementType, FC } from "react";
import cls from "./MainElementsLayout.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

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
			<Navbar className={cls.navbar} />
			<Sidebar className={cls.sidebar} />
			{Main && <Main className={cls.main}/>}
		</div>
	);
};