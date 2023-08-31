import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRouteProps, routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { Loader } from "@/shared/ui/Loader";
import { RequireAuth } from "../RequireAuth";
import { AppContainer, Container } from "@/shared/layouts/AppContainer";
import cls from "./AppRouter.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { PageLoader } from "@/shared/ui/PageLoader";




const AppRouter = ({ className }: {className: string}) => {
	const RouteItems = Object.values(routeConfig).map((route: AppRouteProps) => {

		const element = (	
			<Suspense fallback={<PageLoader/>}>
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
		<div className={className}>
			<Routes>
				{RouteItems}
			</Routes>
		</div>
	
	);
};

export default AppRouter;
