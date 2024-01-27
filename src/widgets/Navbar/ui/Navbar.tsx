import {
	FC, memo, useCallback, useMemo, useState,
} from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { LoginModal } from "@/features/AuthByUsername";
import { LangSwitcher } from "@/features/LangSwitcher";
import { userActions } from "@/entities/User";
import { getUserAuthData } from "@/entities/User/selectors/getUserAuthData";
import { Shell } from "@/shared/layouts/Shell";
import { ShellStyle } from "@/shared/layouts/Shell/ui/Shell";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Devices } from "@/shared/lib/mediaQuery";
import { Button, ButtonTheme } from "@/shared/ui/Buttons";
import { Logo } from "@/shared/ui/Logo/Logo";
import cls from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const authData = useSelector(getUserAuthData);
	const isTablet = useMediaQuery({ maxWidth: Devices.TABLET });
	const isLargeDesktop = useMediaQuery({ maxWidth: Devices.LARGE_DESKTOP });

	const { t } = useTranslation();

	const onLogoutHandler = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	const onToggleHandler = useCallback(() => {
		setIsOpenModal((prev) => !prev);
	}, []);

	const onLoginHandler = useCallback(() => {
		setIsOpenModal(true);
	}, []);

	const LogoutButton = useCallback(() => {
		if (authData) {
			return (
				<Button
					theme={!isLargeDesktop ? ButtonTheme.PADDING : ButtonTheme.OUTLINE}
					onClick={onLogoutHandler}
				>
					{t("log out")}
				</Button>
			);
		}

		return null;
	}, [authData, onLogoutHandler, isLargeDesktop]);

	const LoginButton = useCallback(() => {
		if (!authData) {
			return (
				<Button
					theme={!isLargeDesktop ? ButtonTheme.PADDING : ButtonTheme.OUTLINE}
					onClick={onLoginHandler}
				>
					{t("log in")}
				</Button>
			);
		}

		return null;
	}, [authData, onLoginHandler, isLargeDesktop]);

	const shellStyle = useMemo(() => {
		if (!isLargeDesktop) {
			return ShellStyle.NONE;
		}

		if (isTablet) {
			return ShellStyle.NO_BORDER;
		}

		return ShellStyle.DEFAULT;
	}, [isLargeDesktop, isTablet]);

	return (
		<Shell className={classNames(cls.Navbar, {}, [className])} shellStyle={shellStyle}>
			{isTablet && <Logo />}
			{isTablet && <LangSwitcher className={cls.Navbar__langSwitcher} />}
			<LogoutButton />
			<LoginButton />
			<LoginModal oppened={isOpenModal} onToggle={onToggleHandler} />
		</Shell>
	);
};

export default memo(Navbar);
