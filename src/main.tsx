import "@/scss/layout/index.scss";
import "@/shared/config/i18n/i18n";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/app/App";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import StoreProvider from "@/app/providers/StoreProvider/ui/StoreProvider";
import ThemeProvider from "@/app/providers/ThemeProvider/ui/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ErrorBoundary>
		<StoreProvider>
			<ThemeProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</StoreProvider>
	</ErrorBoundary>,
);
