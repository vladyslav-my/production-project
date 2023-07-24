import HomeSvg from "@/shared/assets/icons/Sidebar/home.svg";
import AboutUsSvg from "@/shared/assets/icons/Sidebar/about-us.svg";
import ProfileSvg from "@/shared/assets/icons/Sidebar/profile.svg";
import ArticleSvg from "@/shared/assets/icons/Sidebar/article.svg";

import { RoutePath } from "@/shared/config/routeConfig/routeConfig";

type ValueOf<T> = T[keyof T];

export interface SidebarItemsLinkType {
	path: ValueOf<typeof RoutePath>;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	name: string;
	authOnly?: boolean;
}


export const SidebarItemsLink: SidebarItemsLinkType[] = [
	{
		path: RoutePath.main,
		Icon: HomeSvg,
		name: "Home",
	},
	{
		path: RoutePath.about,
		Icon: AboutUsSvg,
		name: "About",
	},
	{
		path: RoutePath.profile,
		Icon: ProfileSvg,
		name: "Profile",
		authOnly: true

	},
	{
		path: RoutePath.article,
		Icon: ArticleSvg,
		name: "Articles",
		authOnly: true
	}
];