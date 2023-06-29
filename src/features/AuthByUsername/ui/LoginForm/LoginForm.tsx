import { FC, useCallback } from "react";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useDispatch, useSelector } from "react-redux";
import { getLoginFormState } from "../../selectors/getLoginFormState/getLoginFormState";
import { loginFormActions } from "../../slice/loginFormSlice";
import { loginByUsername } from "../../services/loginByUsername/loginByUsername";
import { Button, ThemeButton } from "shared/ui/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
	className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
	const dispatch = useDispatch<any>();

	const {username, password, isLoading, error} = useSelector(getLoginFormState);

	const setUsernameHandler = useCallback((value: string) => {
		dispatch(loginFormActions.setUsername(value));
	}, [dispatch]);
	const setPasswordHandler = useCallback((value: string) => {
		dispatch(loginFormActions.setPassword(value));
	}, [dispatch]);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({username, password}));
	}, [dispatch, username, password]);
	
	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<p>{error && "wrong username or password"}</p>
			<Input onChange={setUsernameHandler} value={username} placeholder="username" className={cls.input} type="text" />
			<Input onChange={setPasswordHandler} value={password} placeholder="password" className={cls.input} type="text" />
			<Button onClick={onLoginClick} theme={ThemeButton.OUTLINE} className={cls.button} disabled={isLoading}>
				Log in
			</Button>
		</div>
	);
};