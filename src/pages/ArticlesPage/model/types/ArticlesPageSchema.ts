export interface ArticlesPageSchema {
	_inited: boolean;
	limit: 9 | 3;
	page: number;
	sort: Sort;
	order: Order;
	search?: string;
	type: Type;
}

export enum Order {
	DESC = "desc",
	ASC = "asc",
}

export enum Type {
	ALL = "all",
	IT = "IT",
	SCIENCE = "SCIENCE",
}

export enum Sort {
	VIEWS = "views",
	CREATEDAT = "createdAt",
}
