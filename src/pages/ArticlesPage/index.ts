import { ArticlesPageAsync as ArticlesPage } from "./ui/ArticlesPage/ArticlesPage.async";
import { articlesPageReducer } from "./models/slice/articlesPageSlice";
import { ArticlesPageSchema } from "./models/types/ArticlesPageSchema";


export {
	ArticlesPage,
	articlesPageReducer,
	type ArticlesPageSchema
};