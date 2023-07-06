import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { ErrorBoundary } from "./providers/ErrorBoundary";

const App = () => {
	const { theme } = useTheme();
	return (
		<div className={classNames("app", {}, [theme])}>
			<Navbar />
			<div className="content-page">
				<Sidebar />
				<AppRouter />
			</div>

		</div>
	);
};

export default App;

