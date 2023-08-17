import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRouteProps, routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { PageLoader } from "@/shared/ui/PageLoader";
import { RequireAuth } from "./RequireAuth";
import { AppContainer, Container } from "@/shared/layouts/AppContainer";




const AppRouter = () => {


	const RouteItems = Object.values(routeConfig).map(({ path, Page, Widget, authOnly }: AppRouteProps) => {

		const container = (			
			<AppContainer 
				container={Container.MAIN}
				Page={Page}
				Widget={Widget} 
			/>
		);


		return <Route key={path} path={path} element={
			authOnly ?
				<RequireAuth>
					{container}
				</RequireAuth> :
				container
		} 
		/>;
	});

	return (
		<div className="router-wrapper">
			<Suspense fallback={<PageLoader />}>
				<Routes>
					{RouteItems}
				</Routes>
			</Suspense>
		</div>
	);
};

export default AppRouter;
