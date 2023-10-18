import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { getUserAuthData } from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Devices } from "@/shared/lib/mediaQuery";
import { AppNavLink } from "@/shared/ui/AppNavLink/AppNavLink";
import { SidebarItemsLinkType } from "../../model/links";
import cls from "./SidebarLinkItem.module.scss";

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
				className={cls.SidebarLinkItem__navLink}
				to={item.path}
			>
				{({ isActive }) => (
					<div
						className={classNames(cls.link, {
							[cls.link_active]: isActive,
							[cls.link_unroll]: isTablet ? isActive : unroll,
							[cls.link_unroll_size]: !isTablet && unroll,
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
