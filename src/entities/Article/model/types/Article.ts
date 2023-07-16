export interface Article {
	id: number;
	title: string;
	subtitle: string;
	img: string;
	views: number;
	createdAt: string;
	type: ArticleTypes[]
	blocks: ArticleBlocks[]
}


enum ArticleTypes {
	IT = "IT",
	SCIENCE = "SCIENCE",
	ECONOMICS = "ECONOMICS"
}

enum ArticleBlockTypes {
	CODE = "CODE",
	TEXT = "TEXT",
	IMAGE = "IMAGE"
}

type ArticleBlocks = ArticleBlockCode | ArticleBlockText | ArticleBlockImage;

interface ArticleBlockBase {
	id: number;
	type: ArticleBlockTypes;
}

interface ArticleBlockCode extends ArticleBlockBase {
	type: ArticleBlockTypes.CODE;
	code: string;
}

interface ArticleBlockText {
	type: ArticleBlockTypes.TEXT;
	title: string;
	paragraph: string[];
}

interface ArticleBlockImage {
	type: ArticleBlockTypes.IMAGE;
	src: string;
	title: string;
}


