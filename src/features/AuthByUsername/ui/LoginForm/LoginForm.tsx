import { FC, useCallback, useEffect } from "react";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useDispatch, useSelector, useStore } from "react-redux";
import { getLoginFormState } from "../../selectors/getLoginFormState/getLoginFormState";
import { loginFormActions, loginFormReducer } from "../../slice/loginFormSlice";
import { loginByUsername } from "../../services/loginByUsername/loginByUsername";
import { Button, ThemeButton } from "shared/ui/Button";
import { Input } from "shared/ui/Input/Input";
import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager, StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { getLoginFormUsername } from "features/AuthByUsername/selectors/getLoginFormUsername/getLoginFormUsername";
import { getLoginFormPassword } from "features/AuthByUsername/selectors/getLoginFormPassword/getLoginFormPassword";
import { getLoginFormIsLoading } from "features/AuthByUsername/selectors/getLoginFormIsLoading/getLoginFormIsLoading";
import { getLoginFormError } from "features/AuthByUsername/selectors/getLoginFormError/getLoginFormError";

const initialReducers: ReducersList = {
	loginForm: loginFormReducer,
};

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

export interface LoginFormProps {
	className?: string
}

const removeAfterUnmount = true;

const LoginForm: FC<LoginFormProps> = ({ className }) => {
	const dispatch = useDispatch<any>();

	const store = useStore() as ReduxStoreWithManager;

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

	
	useEffect(() => {
		Object.entries(initialReducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer);
			dispatch({ type: `@INIT ${name} reducer` });
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(initialReducers).forEach(([name, reducer]: ReducersListEntry) => {
					store.reducerManager.remove(name);
					dispatch({ type: `@DESTROY ${name} reducer` });
				});
			}
		};
	}, []);
	
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

export default LoginForm;
