import { RouteProps } from "react-router-dom";
import { AboutPage } from "@/pages/AboutPage";
import { ArticleDetailsPage } from "@/pages/ArticleDetailsPage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import {
	getAboutRoutePath,
	getArticleRoutePath,
	getMainRoutePath,
	getNotFoundRoutePath,
	getProfileRoutePath,
} from "@/shared/config/routes/path";

export type AppRouteProps = RouteProps & {
	authOnly?: boolean;
};

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",
	ARTICLE = "article",
	ARTICLE_DETAILS = "article_details",
	NOT_FOUND = "not_found",
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: {
		path: getMainRoutePath(),
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: getAboutRoutePath(),
		element: <AboutPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: getNotFoundRoutePath(),
		element: <NotFoundPage />,
	},
	[AppRoutes.PROFILE]: {
		path: getProfileRoutePath(":id"),
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE]: {
		path: getArticleRoutePath(),
		element: <ArticlesPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: getArticleRoutePath(":id"),
		element: <ArticleDetailsPage />,
		authOnly: true,
	},
};
