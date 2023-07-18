import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRouteProps, routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { PageLoader } from "@/shared/ui/PageLoader";
import { RequireAuth } from "./RequireAuth";

const AppRouter = () => {
	return (
		<div className="router-wrapper">
			<Suspense fallback={<PageLoader />}>
				<Routes>
					{Object.values(routeConfig).map(({ path, element, authOnly }: AppRouteProps) => (
						<Route key={path} path={path} element={authOnly ? <RequireAuth>{element}</RequireAuth> : element} />
					))}
				</Routes>
			</Suspense>
		</div>
	);
};

export default AppRouter;
