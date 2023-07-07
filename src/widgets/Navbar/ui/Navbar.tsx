import cls from "./Navbar.module.scss";

import { FC, useCallback, useEffect, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button";
import { Portal } from "shared/ui/Portal";
import { LoginModal, getUserState } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "entities/User";
import { getUserAuthData } from "entities/User/selectors/getUserAuthData";

interface NavBarProps {
    className?: string
}

export const Navbar: FC<NavBarProps> = ({ className }) => {
	const { t } = useTranslation("navbar");
	const dispatch = useDispatch();
	const authData = useSelector(getUserAuthData);
	const booleanAuthData = !!authData;

	const onLogoutHandler = useCallback(() => {
		dispatch(userActions.logout());
	}, []); 

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			{booleanAuthData && <Button onClick={onLogoutHandler} theme={ThemeButton.OUTLINE}>LOG OUT</Button>}
			<Portal>
				<LoginModal oppened={!booleanAuthData}></LoginModal>
			</Portal>
		</div>
	);
};
