import {
	FC, memo, useCallback, useState,
} from "react";
import { useSelector } from "react-redux";
import { LoginModal } from "@/features/AuthByUsername";
import { userActions } from "@/entities/User";
import { getUserAuthData } from "@/entities/User/selectors/getUserAuthData";
import { Shell } from "@/shared/layouts/Shell";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "@/shared/ui/Buttons";
import cls from "./Navbar.module.scss";

interface NavBarProps {
	className?: string;
}

const Navbar: FC<NavBarProps> = ({ className }) => {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const authData = useSelector(getUserAuthData);

	const onLogoutHandler = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	const onToggleHandler = useCallback(() => {
		setIsOpenModal((prev) => !prev);
	}, []);

	const onLoginHandler = useCallback(() => {
		setIsOpenModal(true);
	}, []);

	const LogoutButton = useCallback(
		() => {
			if (authData) {
				return <Button theme={ButtonTheme.PADDING} onClick={onLogoutHandler}>log out</Button>;
			}

			return null;
		},
		[authData, onLogoutHandler],
	);

	const LoginButton = useCallback(
		() => {
			if (!authData) {
				return <Button theme={ButtonTheme.PADDING} onClick={onLoginHandler}>log out</Button>;
			}

			return null;
		},
		[authData, onLoginHandler],
	);

	return (
		<Shell className={classNames(cls.Navbar, {}, [className])}>
			<LogoutButton />
			<LoginButton />
			<LoginModal oppened={isOpenModal} onToggle={onToggleHandler} />
		</Shell>
	);
};

export default memo(Navbar);
