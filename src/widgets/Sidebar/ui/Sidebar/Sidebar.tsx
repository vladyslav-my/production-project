import {
	FC, memo, useMemo, useState,
} from "react";
import { NavLink } from "react-router-dom";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LangSwitcher } from "@/features/ui/LangSwitcher";
import ArrowIcon from "@/shared/assets/icons/Sidebar/arrow.svg";
import LogoIcon from "@/shared/assets/icons/Sidebar/logo.svg";
import { getMainRoutePath } from "@/shared/config/routes/path";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppMediaQuery, Devices } from "@/shared/lib/mediaQuery";
import { Button } from "@/shared/ui/Buttons";
import { Icon } from "@/shared/ui/Icon";
import { SidebarItemsLink } from "../../model/links";
import { SidebarLinkItem } from "../SidebarLinkItem/SidebarLinkItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [unroll, setUnroll] = useState(false);

	const onToggle = () => {
		setUnroll((prev) => !prev);
	};

	const Links = useMemo(() => SidebarItemsLink.map((item) => (
		<SidebarLinkItem
			className={cls.links__item}
			item={item}
			key={item.path}
			unroll={unroll}
		/>
	)), [unroll]);

	return (
		<div
			className={classNames(cls.Sidebar, {
				[cls.Sidebar_unroll]: unroll,
			}, [className])}
			data-testid="sidebar"
		>
			<AppMediaQuery minWidth={Devices.TABLET}>
				<Button className={cls.Sidebar__arrowButton} onClick={onToggle}>
					<Icon
						Svg={ArrowIcon}
						className={cls.Sidebar__arrowIcon}
					/>
				</Button>
				<NavLink className={cls.Sidebar__logoLink} to={getMainRoutePath()}>
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
};

export default memo(Sidebar);
