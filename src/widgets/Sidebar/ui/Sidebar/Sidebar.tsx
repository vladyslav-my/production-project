import cls from "./Sidebar.module.scss";

import { FC, memo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { Button, ThemeButton } from "shared/ui/Button";
import { SidebarItemsLink } from "widgets/Sidebar/model/links";
import { SidebarLink } from "../SidebarLink/SidebarLink";


interface SidebarProps {
   className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
	const [collapsed, setColappsed] = useState(false);

	const onToggle = () => {
		setColappsed(prev => !prev);
	};

	const creatingLinks = SidebarItemsLink.map((item) => (
		<SidebarLink collapsed={collapsed} item={item} key={item.path} />
	));

	return (
		<div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<div className={cls.links}>
				{creatingLinks}
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
				<Button className={cls.toggle} data-testid="sidebar-toggle" theme={ThemeButton.CLEAR} onClick={onToggle}>{collapsed ? ">" : "<"}</Button>
			</div>
		</div>
	);
});