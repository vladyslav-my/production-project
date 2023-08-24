import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRouteProps, routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { Loader } from "@/shared/ui/Loader";
import { RequireAuth } from "../RequireAuth";
import { AppContainer, Container } from "@/shared/layouts/AppContainer";
import cls from "./AppRouter.module.scss";




const AppRouter = () => {
	const RouteItems = Object.values(routeConfig).map((route: AppRouteProps) => {

		const element = (	
			<Suspense fallback={<Loader className={cls.loader} />}>
				{route.element}
			</Suspense>	

		);


		return <Route key={route.path} path={route.path} element={
			route.authOnly ?
				<RequireAuth>
					{element}
				</RequireAuth> :
				element
		} 
		/>;
	});

	return (
		<Routes>
			{RouteItems}
		</Routes>
	);
};

export default AppRouter;
