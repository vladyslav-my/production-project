import cls from "./Sidebar.module.scss";

import { FC, memo, useMemo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";
import { LangSwitcher } from "@/shared/ui/LangSwitcher";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { SidebarItemsLink } from "@/widgets/Sidebar/model/links";
import { SidebarLink } from "../SidebarLink/SidebarLink";
import { AppNavLink } from "@/shared/ui/AppLink/AppLink";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import LogoIcon from "@/shared/assets/icons/Sidebar/logo.svg";
import ArrowIcon from "@/shared/assets/icons/Sidebar/arrow.svg";
import { AppMediaQuery, Devices } from "@/shared/lib/components/MediaQuary";
interface SidebarProps {
   className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
	const [collapsed, setColappsed] = useState(false);

	const onToggle = () => {
		setColappsed(prev => !prev);
	};

	const Links = useMemo(() => {
		return SidebarItemsLink.map((item) => (
			<SidebarLink className={cls.links__item} collapsed={collapsed} item={item} key={item.path} />
		));
	}, [collapsed]);

	return (
		<div data-testid="sidebar" className={classNames(cls.sidebar, {  }, [className])}>
			<AppMediaQuery minWidth={Devices.TABLET}>
				<ArrowIcon className={cls.sidebar__arrowIcon} />
				<AppNavLink className={cls.sidebar__logoLink} to={RoutePath.main}>
					<LogoIcon className={cls.sidebar__logoIcon} />
				</AppNavLink>
				<div className={`${cls.sidebar__switchers} ${cls.switchers}`}>
					<ThemeSwitcher />
					<LangSwitcher />
				</div>
			</AppMediaQuery>
			<div className={cls.links}>
				{Links}
			</div>
			{/* <div className={cls.switchers}>
				
				<Button className={cls.toggle} data-testid="sidebar-toggle" theme={ThemeButton.CLEAR} onClick={onToggle}>{collapsed ? ">" : "<"}</Button>
			</div> */}
		</div>
	);
});