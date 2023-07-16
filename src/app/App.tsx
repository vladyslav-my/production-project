import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useSelector } from "react-redux";
import { getUserInited } from "entities/User";

const App = () => {
	const { theme } = useTheme();
	const inited = useSelector(getUserInited);
	return (
		<div className={classNames("app", {}, [theme])}>
			<Navbar />
			<div className="content-page">
				<Sidebar />
				{inited && <AppRouter />}
			</div>

		</div>
	);
};

export default App;

