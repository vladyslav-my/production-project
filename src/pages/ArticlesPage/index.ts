import { articlesPageReducer } from "./models/slice/articlesPageSlice";
import { ArticlesPageSchema } from "./models/types/ArticlesPageSchema";
import { ArticlesPageAsync as ArticlesPage } from "./ui/ArticlesPage/ArticlesPage.async";

export { ArticlesPage, articlesPageReducer, type ArticlesPageSchema };
