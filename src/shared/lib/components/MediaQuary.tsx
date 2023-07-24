import { FC, ReactNode, Validator } from "react";
import MediaQuery, { MediaQueryAllQueryable } from "react-responsive";

export enum Devices {
	DESKTOP = 0,
	TABLET = 991.98,
	MOBILE = 767.98,
	MOBILESMALL = 479.98
}

interface AppMediaQueryProps extends MediaQueryAllQueryable {
	children?: ReactNode;
	minHeight?: Devices;
	maxHeight?: Devices;
	minWidth?: Devices;
	maxWidth?: Devices;
}

export const AppMediaQuery: FC<AppMediaQueryProps> = (props) => {
	return (
		<MediaQuery {...props}>
			{props.children}
		</MediaQuery>
	);
};