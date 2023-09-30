import { Article } from "./Article";

export enum ViewMode {
	TILE = "tile",
	LIST = "list"
}

export interface ArticlesListSchema {
	data?: Article[];
	hasMore: boolean;
	isLoading?: boolean;
	error?: string;
	viewMode: ViewMode;
	queryParams: QueryParams;
}


export interface QueryParams {
	_inited: boolean,
	limit: 9 | 3;
	page: number;
	sort: Sort;
	order: Order;
	search?: string;
	type: Type;
} 

export enum Order {
	DESC = "desc",
	ASC = "asc"
}

export enum Type {
	ALL = "all",
	IT = "IT",
	SCIENCE = "SCIENCE"
}

export enum Sort {
	VIEWS = "views",
	CREATEDAT = "createdAt" 
}