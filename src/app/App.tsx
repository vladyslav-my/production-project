import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { useSelector } from "react-redux";
import { getUserInited } from "@/entities/User";
import { MainElementsLayout } from "@/shared/layouts/MainElementsLayout";
import { AppContainer, Container } from "@/shared/layouts/AppContainer";

const App = () => {
	const { theme } = useTheme();
	const inited = useSelector(getUserInited);
	return (
		<div className={classNames("app", {}, [theme])}>
			<AppContainer container={Container.APP}>
				<MainElementsLayout
					main={inited ? AppRouter : undefined} 
					sidebar={Sidebar}
					navbar={Navbar}
				/>
			</AppContainer>

		</div>
	);
};

export default App;

