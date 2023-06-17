import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "shared/ui/PageLoader";

const AppRouter = () => {
	return (
		<div className="router-wrapper">
			<Suspense fallback={<PageLoader />}>
				<Routes>
					{Object.values(routeConfig).map(({ path, element }) => (
						<Route key={path} path={path} element={element} />
					))}
				</Routes>
			</Suspense>
		</div>
	);
};

export default AppRouter;
