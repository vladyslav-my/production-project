import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { ReactNode } from "react";

export function RequireAuth({ children }: { children: ReactNode }) {
	const auth = useSelector(getUserAuthData);
	const location = useLocation();

	if (!auth) {
		return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
	}

	return children;
}
