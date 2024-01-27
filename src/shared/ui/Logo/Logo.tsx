import { FC } from "react";
import { NavLink } from "react-router-dom";
import LogoIcon from "../../assets/icons/Sidebar/logo.svg";
import { getMainRoutePath } from "../../config/routes/path";
import { classNames } from "../../lib/classNames/classNames";
import { Icon } from "../Icon";
import cls from "./Logo.module.scss";

interface LogoProps {
	className?: string
}

export const Logo: FC<LogoProps> = ({ className }) => {
	return (
		<NavLink className={classNames(cls.Logo, {}, [className])} to={getMainRoutePath()}>
			<Icon className={cls.Logo__self} Svg={LogoIcon} />
		</NavLink>
	);
};
