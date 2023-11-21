import { FC, ReactNode } from "react";
import { Outlet, useNavigation } from "react-router-dom";
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { PageLoader } from "@/shared/ui/PageLoader";
import { classNames } from "../../../lib/classNames/classNames";
import { AppMediaQuery, Devices } from "../../../lib/mediaQuery";
// import cls from "./RootContainer.module.scss";

interface RootContainerProps {

}

export const RootContainer: FC<RootContainerProps> = () => {
	const { state } = useNavigation();

	if (state === "loading") {
		return <PageLoader />;
	}

	console.log(state);

	return <Outlet />;
};
