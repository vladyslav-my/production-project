import { RouteProps } from "react-router-dom";

import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { ArticleDetailsPage } from "@/pages/ArticleDetailsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ReactNode } from "react";
import { Shell } from "@/shared/layouts/Shell";

export type AppRouteProps = RouteProps & {
	authOnly?: boolean;
	Widget?: ReactNode;
	Page: ReactNode;
}


export enum AppRoutes {
   MAIN = "main",
   ABOUT = "about",
	PROFILE = "profile",
	ARTICLE = "article",
	ARTICLE_DETAILS = "article_details",
	NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.PROFILE]: "/profile",
	[AppRoutes.ARTICLE]: "/article",
	[AppRoutes.ARTICLE_DETAILS]: "/article/", // + id
	[AppRoutes.NOT_FOUND]: "/*",
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		Page: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		Page: <AboutPage />
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		Page: <NotFoundPage />
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath.profile,
		Page: <ProfilePage />,
		authOnly: true
	},
	[AppRoutes.ARTICLE]: {
		path: RoutePath.article,
		Page: <ArticlesPage />,
		Widget: <Shell>emty</Shell>,
		authOnly: true
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: `${RoutePath.article_details}:id`,
		Page: <ArticleDetailsPage />,
		authOnly: true
	},
};
