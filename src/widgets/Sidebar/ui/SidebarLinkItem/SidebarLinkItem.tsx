import { FC, createRef, memo, useEffect, useMemo, useRef, useState } from "react";
import cls from "./SidebarLinkItem.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppNavLink } from "@/shared/ui/AppNavLink/AppNavLink";
import { SidebarItemsLinkType } from "@/widgets/Sidebar/model/links";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { useMediaQuery } from "react-responsive";
import { Devices } from "@/shared/lib/mediaQuery";
import { NavLink } from "react-router-dom";


interface SidebarLinkItemProps {
	className?: string;
	unroll: boolean;
	item: SidebarItemsLinkType;
}

export const SidebarLinkItem: FC<SidebarLinkItemProps> = memo(({ className, item, unroll }) => {
	const auth = useSelector(getUserAuthData);


	const isTablet = useMediaQuery({ maxWidth: Devices.TABLET });


	if (!auth && item.authOnly) {
		return null;
	}

	return (
		<li className={classNames(cls.SidebarLinkItem, {}, [className])}>
			<AppNavLink
				to={item.path}
				className={cls.SidebarLinkItem__navLink}
			>
				{({ isActive, isPending }) => (
					<div className={classNames(cls.link, {
						[cls.link_active]: isActive,
						[cls.link_unroll]: isTablet ? isActive : unroll,
						[cls.link_unroll_size]: !isTablet && unroll
					}, [cls.SidebarLinkItemItem__link])}
					>
						<div
							className={cls.link__appWrapper}
						>
							<item.Icon className={cls.link__icon} />
							<div className={cls.link__nameWrapper}>
								<span 
									className={cls.link__name}
								>
									{item.name}
								</span>
							</div>
						</div>
					</div>
				)}
			</AppNavLink>
		</li>

	);
});