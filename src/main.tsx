import "@/scss/main.scss";

import ReactDOM from "react-dom/client";

import App from "@/app/App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "@/app/providers/ThemeProvider/ui/ThemeProvider";
import { ErrorBoundary } from "@/app/providers/ErrorBoundary";
import { StoreProvider } from "@/app/providers/StoreProvider/ui/StoreProvider";

import "@/shared/config/i18n/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ErrorBoundary>
		<StoreProvider>
			<BrowserRouter>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</StoreProvider>
	</ErrorBoundary>
);
