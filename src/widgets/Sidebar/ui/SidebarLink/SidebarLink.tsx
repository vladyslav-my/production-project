import { FC, memo } from "react";
import cls from "./SidebarLink.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { SidebarItemsLinkType } from "widgets/Sidebar/model/links";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";


interface SidebarLinkProps {
	className?: string,
	collapsed: boolean,
	item: SidebarItemsLinkType
}

export const SidebarLink: FC<SidebarLinkProps> = memo(({ className, item, collapsed }) => {
	const auth = useSelector(getUserAuthData);

	if (!auth && item.authOnly) {
		return null;
	}

	return (
		<AppLink className={classNames(cls.SidebarLink, {}, [className])} to={item.path}>
			<item.Icon className={cls.icon} />
			<span className={collapsed ? cls.block : undefined}>{item.name}</span>
		</AppLink>
	);
});