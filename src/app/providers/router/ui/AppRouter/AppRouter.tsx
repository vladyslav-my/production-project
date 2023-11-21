import { Suspense, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "@/shared/ui/PageLoader";
import { AppRouteProps, routes } from "../../routes/routes";
import { RequireAuth } from "../RequireAuth";

const AppRouter = ({ className }: { className: string }) => {
	const RouteItems = useMemo(() => {
		return routes.map((route: AppRouteProps) => {
			const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

			return (
				<Route
					element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
					key={route.path}
					path={route.path}
				/>
			);
		});
	}, []);

	return (
		<div className={className}>
			<Routes>{RouteItems}</Routes>
		</div>
	);
};

export default AppRouter;
