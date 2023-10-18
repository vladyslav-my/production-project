// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { User } from "@/entities/User";

export interface Article {
	user: User;
	id: number;
	title: string;
	subtitle: string;
	img: string;
	views: number;
	createdAt: string;
	type: ArticleTypes[];
	blocks: ArticleBlocks[];
}

enum ArticleTypes {
	IT = "IT",
	SCIENCE = "SCIENCE",
	ECONOMICS = "ECONOMICS",
}

enum ArticleBlockTypes {
	CODE = "CODE",
	TEXT = "TEXT",
	IMAGE = "IMAGE",
}

export type ArticleBlocks = ArticleBlockCode | ArticleBlockText | ArticleBlockImage;

interface ArticleBlockBase {
	id: number;
	type: ArticleBlockTypes;
}

interface ArticleBlockCode extends ArticleBlockBase {
	type: ArticleBlockTypes.CODE;
	code: string;
}

interface ArticleBlockText extends ArticleBlockBase {
	type: ArticleBlockTypes.TEXT;
	title: string;
	paragraphs: string[];
}

interface ArticleBlockImage extends ArticleBlockBase {
	type: ArticleBlockTypes.IMAGE;
	src: string;
	title: string;
}
