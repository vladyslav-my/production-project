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
				name: "home",
			},
			{
				path: getAboutRoutePath(),
				Icon: AboutUsSvg,
				name: "about",
			},
			{
				path: getProfileRoutePath(authData?.id),
				Icon: ProfileSvg,
				name: "profile",
				authOnly: true,
			},
			{
				path: getArticleRoutePath(),
				Icon: ArticleSvg,
				name: "articles",
				authOnly: true,
			},
		];
	},
);
