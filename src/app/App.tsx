import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { useSelector } from "react-redux";
import { getUserInited } from "@/entities/User";
import { MainElementsLayout } from "@/shared/layouts/MainElementsLayout";

const App = () => {
	const { theme } = useTheme();
	const inited = useSelector(getUserInited);
	return (
		<div className={classNames("app", {}, [theme])}>
			<MainElementsLayout 
				main={inited ? AppRouter : undefined} 
				sidebar={Sidebar}
				navbar={Navbar}
			/>
		</div>
	);
};

export default App;

