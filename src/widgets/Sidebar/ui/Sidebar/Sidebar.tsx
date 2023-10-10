import cls from "./Sidebar.module.scss";

import { FC, memo, useMemo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";
import { LangSwitcher } from "@/shared/ui/LangSwitcher";
import { SidebarItemsLink } from "@/widgets/Sidebar/model/links";
import { SidebarLinkItem } from "../SidebarLinkItem/SidebarLinkItem";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import LogoIcon from "@/shared/assets/icons/Sidebar/logo.svg";
import ArrowIcon from "@/shared/assets/icons/Sidebar/arrow.svg";
import { AppMediaQuery, Devices } from "@/shared/lib/mediaQuery";
import { NavLink } from "react-router-dom";
import { Icon } from "@/shared/ui/Icon";
import { Button } from "@/shared/ui/Buttons";


interface SidebarProps {
   className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
	const [unroll, setUnroll] = useState(true);

	const onToggle = () => {
		setUnroll(prev => !prev);
	};

	const Links = useMemo(() => {
		return SidebarItemsLink.map((item) => (
			<SidebarLinkItem className={cls.links__item} unroll={unroll} item={item} key={item.path} />
		));
	}, [unroll]);

	return (
		<div data-testid="sidebar" className={classNames(cls.Sidebar, { 
			[cls.Sidebar_unroll]: unroll
		}, [className])}>
			<AppMediaQuery minWidth={Devices.TABLET}>
				<Button className={cls.Sidebar__arrowButton}>
					<Icon 
						className={cls.Sidebar__arrowIcon}
						Svg={ArrowIcon} 
						onClick={onToggle}
						clickable 
					/>
				</Button>

				<NavLink className={cls.Sidebar__logoLink} to={RoutePath.main}>
					<Icon Svg={LogoIcon} className={cls.Sidebar__logoIcon} />
				</NavLink>
			</AppMediaQuery>
			<div className={`${cls.links} ${cls.Sidebar__links}`}>
				{Links}
			</div>
			<AppMediaQuery minWidth={Devices.TABLET}>
				<div className={`${cls.Sidebar__switchers} ${cls.switchers}`}>
					<ThemeSwitcher />
					<LangSwitcher />
				</div>
			</AppMediaQuery>
		</div>
	);
});