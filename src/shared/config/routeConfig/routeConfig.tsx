import { RouteProps } from "react-router-dom";

import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { ArticleDetailsPage } from "@/pages/ArticleDetailsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export type AppRouteProps = RouteProps & {
	authOnly?: boolean;
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
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath.profile,
		element: <ProfilePage />,
		authOnly: true
	},
	[AppRoutes.ARTICLE]: {
		path: RoutePath.article,
		element: <ArticlesPage />,
		authOnly: true
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: `${RoutePath.article_details}:id`,
		element: <ArticleDetailsPage />,
		authOnly: true
	},
};
