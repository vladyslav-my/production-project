import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { FC, memo, useCallback, useEffect } from "react";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "@/entities/User";
import { getUserAuthData } from "@/entities/User/selectors/getUserAuthData";

interface NavBarProps {
    className?: string
}

export const Navbar: FC<NavBarProps> = memo(({ className }) => {
	const dispatch = useDispatch();
	const authData = useSelector(getUserAuthData);
	const booleanAuthData = !!authData;
	
	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, []);

	const onLogoutHandler = useCallback(() => {
		dispatch(userActions.logout());
	}, []); 

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			{booleanAuthData && <Button onClick={onLogoutHandler} theme={ThemeButton.OUTLINE}>LOG OUT</Button>}
			<LoginModal oppened={!booleanAuthData}></LoginModal>
		</div>
	);
});
