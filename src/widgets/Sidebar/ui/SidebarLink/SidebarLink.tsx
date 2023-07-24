import { FC, createRef, memo, useEffect, useMemo, useRef, useState } from "react";
import cls from "./SidebarLink.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppNavLink } from "@/shared/ui/AppLink/AppLink";
import { SidebarItemsLinkType } from "@/widgets/Sidebar/model/links";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { useMediaQuery } from "react-responsive";


interface SidebarLinkProps {
	className?: string;
	unroll: boolean;
	item: SidebarItemsLinkType;
}

export const SidebarLink: FC<SidebarLinkProps> = memo(({ className, item, unroll }) => {
	const auth = useSelector(getUserAuthData);


	const appWrapperRef = useRef<HTMLDivElement>(null);
	const isTablet = useMediaQuery({ maxWidth: 767.98 });

	const handleSidebarLinkClick = () => {
		appWrapperRef.current?.click();
	};


	if (!auth && item.authOnly) {
		return null;
	}

	return (
		<li
			onClick={handleSidebarLinkClick}
			className={cls.sidebarLinkItem}
		>
			<AppNavLink
				to={item.path}
				className={classNames(cls.link, {}, [])}
			>
				{({ isActive, isPending }) => (
					
					<div					
						ref={appWrapperRef}
						className={classNames(cls.link__appWrapper, {
							[cls.link__appWrapper_active]: isActive,
							[cls.link__appWrapper_unroll]: isTablet && isActive || unroll
						}, [cls.sidebarLinkItem__link])}
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
				)}
			</AppNavLink>
		</li>

	);
});