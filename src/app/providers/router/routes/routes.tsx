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

export const routes: AppRouteProps[] = [
	{
		path: getMainRoutePath(),
		element: <MainPage />,
	},
	{
		path: getAboutRoutePath(),
		element: <AboutPage />,
	},
	{
		path: getNotFoundRoutePath(),
		element: <NotFoundPage />,
	},
	{
		path: getProfileRoutePath(":id"),
		element: <ProfilePage />,
		authOnly: true,
	},
	{
		path: getArticleRoutePath(),
		element: <ArticlesPage />,
		authOnly: true,
	},
	{
		path: getArticleRoutePath(":id"),
		element: <ArticleDetailsPage />,
		authOnly: true,
	},
];
