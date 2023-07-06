import cls from "./LoginForm.module.scss";

import { classNames } from "shared/lib/classNames/classNames";
import { FC, useCallback } from "react";
import { Reducer } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { Button, ThemeButton } from "shared/ui/Button";
import { Input } from "shared/ui/Input/Input";
import { DynamicReduceLoader } from "shared/lib/components/DynamicReduceLoader";
import { ReducersList } from "app/providers/StoreProvider";
import { loginByUsername } from "../../services/loginByUsername/loginByUsername";
import { getLoginFormUsername } from "../../selectors/getLoginFormUsername/getLoginFormUsername";
import { getLoginFormPassword } from "../../selectors/getLoginFormPassword/getLoginFormPassword";
import { getLoginFormIsLoading } from "../../selectors/getLoginFormIsLoading/getLoginFormIsLoading";
import { getLoginFormError } from "../../selectors/getLoginFormError/getLoginFormError";
import { loginFormActions, loginFormReducer } from "../../slice/loginFormSlice";


export interface LoginFormProps {
	className?: string
}

const initialReducers: ReducersList = {
	loginForm: loginFormReducer,
};

const LoginForm: FC<LoginFormProps> = ({ className }) => {
	const dispatch = useDispatch<any>();

	const username = useSelector(getLoginFormUsername);
	const password = useSelector(getLoginFormPassword);
	const isLoading = useSelector(getLoginFormIsLoading);
	const error = useSelector(getLoginFormError);
	
	const setUsernameHandler = useCallback((value: string) => {
		dispatch(loginFormActions.setUsername(value));
	}, [dispatch]);
	
	const setPasswordHandler = useCallback((value: string) => {
		dispatch(loginFormActions.setPassword(value));
	}, [dispatch]);

	const onLoginClick = useCallback(() => {
		console.log("loginByUsername");
		dispatch(loginByUsername({username, password}));
	}, [dispatch, username, password]);
	
	return (
		<DynamicReduceLoader reducers={initialReducers} removeAfterUnmount>
			<div className={classNames(cls.LoginForm, {}, [className])}>
				<p>{error && "wrong username or password"}</p>
				<Input onChange={setUsernameHandler} value={username} placeholder="username" className={cls.input} type="text" />
				<Input onChange={setPasswordHandler} value={password} placeholder="password" className={cls.input} type="text" />
				<Button onClick={onLoginClick} theme={ThemeButton.OUTLINE} className={cls.button} disabled={isLoading}>
					Log in
				</Button>
			</div>
		</DynamicReduceLoader>

	);
};

export default LoginForm;
