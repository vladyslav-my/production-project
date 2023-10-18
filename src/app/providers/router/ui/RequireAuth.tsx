import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getUserAuthData } from "@/entities/User";
import { getMainRoutePath } from "@/shared/config/routes/path";

export const RequireAuth = ({ children }: { children: ReactNode }) => {
	const auth = useSelector(getUserAuthData);
	const location = useLocation();

	if (!auth) {
		return <Navigate replace state={{ from: location }} to={getMainRoutePath()} />;
	}

	return children;
};
