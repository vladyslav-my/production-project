import AboutUsSvg from "@/shared/assets/icons/Sidebar/about-us.svg";
import ArticleSvg from "@/shared/assets/icons/Sidebar/article.svg";
import HomeSvg from "@/shared/assets/icons/Sidebar/home.svg";
import ProfileSvg from "@/shared/assets/icons/Sidebar/profile.svg";
import {
	getAboutRoutePath, getArticleRoutePath, getMainRoutePath, getProfileRoutePath,
} from "@/shared/config/routes/path";

export interface SidebarItemsLinkType {
	path: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	name: string;
	authOnly?: boolean;
}

export const SidebarItemsLink: SidebarItemsLinkType[] = [
	{
		path: getMainRoutePath(),
		Icon: HomeSvg,
		name: "Home",
	},
	{
		path: getAboutRoutePath(),
		Icon: AboutUsSvg,
		name: "About",
	},
	{
		path: getProfileRoutePath(),
		Icon: ProfileSvg,
		name: "Profile",
		authOnly: true,

	},
	{
		path: getArticleRoutePath(),
		Icon: ArticleSvg,
		name: "Articles",
		authOnly: true,
	},
];
