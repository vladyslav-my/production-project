import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { useSelector } from "react-redux";
import { getUserInited, userActions } from "@/entities/User";
import { AppLayoutContainer } from "@/shared/layouts/AppLayoutContainer";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useEffect } from "react";

const App = () => {
	const { theme } = useTheme();
	const inited = useSelector(getUserInited);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, []);
	
	return (
		<div className={classNames("app", {}, [theme])}>
			<AppLayoutContainer 
				main={inited ? AppRouter : undefined} 
				sidebar={Sidebar}
				navbar={Navbar}
			/>
		</div>
	);
};

export default App;

