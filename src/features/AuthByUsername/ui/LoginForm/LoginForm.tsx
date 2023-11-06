import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReducersList } from "@/app/providers/StoreProvider";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicReduceLoader } from "@/shared/lib/components/DynamicReduceLoader";
import { Button, ButtonTheme } from "@/shared/ui/Buttons";
import { Input } from "@/shared/ui/Input/Input";
import { getLoginFormError } from "../../selectors/getLoginFormError/getLoginFormError";
import { getLoginFormIsLoading } from "../../selectors/getLoginFormIsLoading/getLoginFormIsLoading";
import { getLoginFormPassword } from "../../selectors/getLoginFormPassword/getLoginFormPassword";
import { getLoginFormUsername } from "../../selectors/getLoginFormUsername/getLoginFormUsername";
import { loginByUsername } from "../../services/loginByUsername/loginByUsername";
import { loginFormActions, loginFormReducer } from "../../slice/loginFormSlice";
import cls from "./LoginForm.module.scss";

export interface LoginFormProps {
	className?: string;
	onToggle: (isOpen: boolean) => void;
}

const initialReducers: ReducersList = {
	loginForm: loginFormReducer,
};

const LoginForm: FC<LoginFormProps> = ({ className, onToggle }) => {
	const dispatch = useDispatch<any>();

	const username = useSelector(getLoginFormUsername);
	const password = useSelector(getLoginFormPassword);
	const isLoading = useSelector(getLoginFormIsLoading);
	const error = useSelector(getLoginFormError);

	const setUsernameHandler = useCallback(
		(value: string) => {
			dispatch(loginFormActions.setUsername(value));
		},
		[dispatch],
	);

	const setPasswordHandler = useCallback(
		(value: string) => {
			dispatch(loginFormActions.setPassword(value));
		},
		[dispatch],
	);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
		onToggle(false);
	}, [dispatch, username, password, onToggle]);

	return (
		<DynamicReduceLoader reducers={initialReducers} removeAfterUnmount>
			<div className={classNames(cls.LoginForm, {}, [className])}>
				<p>{error && "wrong username or password"}</p>
				<Input
					className={cls.input}
					placeholder="username"
					type="text"
					value={username}
					onChange={setUsernameHandler}
				/>
				<Input
					className={cls.input}
					placeholder="password"
					type="text"
					value={password}
					onChange={setPasswordHandler}
				/>
				<Button
					className={cls.button}
					disabled={isLoading}
					theme={ButtonTheme.OUTLINE}
					onClick={onLoginClick}
				>
					Log in
				</Button>
			</div>
		</DynamicReduceLoader>
	);
};

export default LoginForm;
