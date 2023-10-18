import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppLayoutContainer } from "@/widgets/AppLayoutContainer";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { getUserInited, userActions } from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { AppRouter } from "./providers/router";

const App = () => {
	const { theme } = useTheme();
	const inited = useSelector(getUserInited);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames("app", {}, [theme])}>
			<AppLayoutContainer
				main={!!inited && AppRouter}
				navbar={Navbar}
				sidebar={Sidebar}
			/>
		</div>
	);
};

export default App;
