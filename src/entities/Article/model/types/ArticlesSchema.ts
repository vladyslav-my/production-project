import { Article } from "./Article";

export interface ArticlesSchema {
	data?: Article[];
	isLoading?: boolean;
	error?: string;
	isTile?: false;
}