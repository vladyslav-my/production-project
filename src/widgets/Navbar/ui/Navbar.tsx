import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { FC, memo, useCallback, useEffect, useState } from "react";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "@/entities/User";
import { getUserAuthData } from "@/entities/User/selectors/getUserAuthData";
import { Shell, ShellBorderStyle } from "@/shared/layouts/Shell";
import { useMediaQuery } from "react-responsive";
import { Devices } from "@/shared/lib/mediaQuery";

interface NavBarProps {
   className?: string;
	shell?: boolean
}

export const Navbar: FC<NavBarProps> = memo(({ className, shell }) => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const dispatch = useDispatch();
	const authData = useSelector(getUserAuthData);
	const isBreackpoint_1800 = useMediaQuery({ maxWidth: Devices.BREAKPOINT_1800 });
	const isTablet = useMediaQuery({ maxWidth: Devices.TABLET });
	
	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, []);

	const onLogoutHandler = useCallback(() => {
		dispatch(userActions.logout());
	}, []); 

	const onLoginHandler = useCallback(() => {
		setIsOpenModal(true);
	}, []); 

	if (isBreackpoint_1800) {
		return (
			<Shell borderStyle={isTablet ? ShellBorderStyle.NONE : ShellBorderStyle.DEFAULT} className={classNames(cls.Navbar, {}, [className])}>
				{authData && <Button onClick={onLogoutHandler} theme={ThemeButton.OUTLINE}>log out</Button>}
				{!authData && <Button onClick={onLoginHandler} theme={ThemeButton.OUTLINE}>sign in</Button>}
				{/*@ts-ignore*/}
				<LoginModal oppened={isOpenModal && !authData}></LoginModal>
			</Shell>
		);
	}

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			{authData && <Button onClick={onLogoutHandler} theme={ThemeButton.PADDING}>log out</Button>}
			{!authData && <Button onClick={onLoginHandler} theme={ThemeButton.PADDING}>sign in</Button>}
			{/*@ts-ignore*/}
			<LoginModal oppened={isOpenModal && !authData}></LoginModal>
		</div>
	);
});
