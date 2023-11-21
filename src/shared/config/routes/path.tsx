export const getMainRoutePath = () => "/";
export const getAboutRoutePath = () => "/about";
export const getProfileRoutePath = (profileId?: number | string) => `/profile${profileId ? `/${profileId}` : ""}`;
export const getArticleRoutePath = (articleId?: number | string) => `/article${articleId ? `/${articleId}` : ""}`;
export const getNotFoundRoutePath = () => "/*";
