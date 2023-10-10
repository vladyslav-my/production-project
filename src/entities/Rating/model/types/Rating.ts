export interface Rating {
	id: number;
	articleId: number;
	userId: number;
	stars: number;
	feedback: string;
}