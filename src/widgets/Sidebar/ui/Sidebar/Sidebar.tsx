import {
	FC, memo, useMemo, useState,
} from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LangSwitcher } from "@/features/LangSwitcher";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import ArrowIcon from "@/shared/assets/icons/Sidebar/arrow.svg";
import { getMainRoutePath } from "@/shared/config/routes/path";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppMediaQuery, Devices } from "@/shared/lib/mediaQuery";
import { Button } from "@/shared/ui/Buttons";
import { Icon } from "@/shared/ui/Icon";
import { Logo } from "@/shared/ui/Logo/Logo";
import { getSidebarLinks } from "../../model/selectors/getSidebarLinks";
import { SidebarLinkItem } from "../SidebarLinkItem/SidebarLinkItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [unroll, setUnroll] = useState(false);
	const links = useSelector(getSidebarLinks);

	const onToggle = () => {
		setUnroll((prev) => !prev);
	};

	const Links = useMemo(
		() => links.map((item) => (
			<SidebarLinkItem
				className={cls.links__item}
				item={item}
				key={item.path}
				unroll={unroll}
			/>
		)),
		[unroll, links],
	);

	return (
		<div
			className={classNames(
				cls.Sidebar,
				{
					[cls.Sidebar_unroll]: unroll,
				},
				[className],
			)}
			data-testid="sidebar"
		>
			<AppMediaQuery minWidth={Devices.TABLET}>
				<Button className={cls.Sidebar__arrowButton} onClick={onToggle}>
					<Icon Svg={ArrowIcon} className={cls.Sidebar__arrowIcon} />
				</Button>
				<Logo className={cls.Sidebar__logo} />
			</AppMediaQuery>
			<div className={`${cls.links} ${cls.Sidebar__links}`}>{Links}</div>
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
