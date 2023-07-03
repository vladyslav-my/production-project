import MainSvg from "shared/assets/main.svg";
import AboutSvg from "shared/assets/about.svg";
import ProfileSvg from "shared/assets/about.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

type ValueOf<T> = T[keyof T];

export interface SidebarItemsLinkType {
	path: ValueOf<typeof RoutePath>,
	Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>,
	name: string

}

export const SidebarItemsLink: SidebarItemsLinkType[] = [
	{
		path: RoutePath.main,
		Icon: MainSvg,
		name: "Main"
	},
	{
		path: RoutePath.about,
		Icon: AboutSvg,
		name: "About"
	},
	{
		path: RoutePath.profile,
		Icon: ProfileSvg,
		name: "Profile"
	}
];