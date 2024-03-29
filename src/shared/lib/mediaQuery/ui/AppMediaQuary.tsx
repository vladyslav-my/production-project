/* eslint-disable react/destructuring-assignment */
import { FC, ReactNode } from "react";
import MediaQuery, { MediaQueryAllQueryable } from "react-responsive";
import { Devices } from "../types/Devices";

interface AppMediaQueryProps extends MediaQueryAllQueryable {
	children?: ReactNode;
	minWidth?: Devices;
	maxWidth?: Devices;
}

export const AppMediaQuery: FC<AppMediaQueryProps> = (props) => (
	<MediaQuery {...props}>{props.children}</MediaQuery>
);
