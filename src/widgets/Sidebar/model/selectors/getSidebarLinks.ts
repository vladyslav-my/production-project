import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "@/entities/User";
import AboutUsSvg from "@/shared/assets/icons/Sidebar/about-us.svg";
import ArticleSvg from "@/shared/assets/icons/Sidebar/article.svg";
import HomeSvg from "@/shared/assets/icons/Sidebar/home.svg";
import ProfileSvg from "@/shared/assets/icons/Sidebar/profile.svg";
import {
	getAboutRoutePath,
	getArticleRoutePath,
	getMainRoutePath,
	getProfileRoutePath,
} from "@/shared/config/routes/path";

export interface SidebarItemsLinkType {
	path: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
	name: string;
	authOnly?: boolean;
}

export const getSidebarLinks = createSelector(
	getUserAuthData,
	(authData): SidebarItemsLinkType[] => {
		return [
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
				path: getProfileRoutePath(authData?.id),
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
	},
);
