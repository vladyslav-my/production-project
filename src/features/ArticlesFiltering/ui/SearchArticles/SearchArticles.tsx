import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { articlesListActions, articlesListSelectors } from "@/entities/Article";
import { fetchArticlesList } from "@/entities/Article/services/fetchArticlesList/fetchArticlesList";
import SearchIcon from "@/shared/assets/icons/articlesList/search.svg";
import { useDebounce } from "@/shared/hooks/useDebaunce/useDebaunce";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Input, InputTheme } from "@/shared/ui/Input/Input";
import cls from "./SearchArticles.module.scss";

const { getArticlesListSearchQP } = articlesListSelectors;

interface SearchArticlesProps {
	className?: string;
}

export const SearchArticles: FC<SearchArticlesProps> = ({ className }) => {
	const dispatch = useAppDispatch();

	const search = useSelector(getArticlesListSearchQP);
	const debaunced = useDebounce();

	const onChangeSearchHandler = useCallback(
		(value: string) => {
			dispatch(articlesListActions.setSearch(value));

			debaunced(() => dispatch(fetchArticlesList({ replace: true })), 500);
		},
		[],
	);

	return (
		<Input
			Icon={SearchIcon}
			className={classNames(cls.SearchArticles, {}, [className])}
			theme={InputTheme.SMALL}
			value={search}
			onChange={onChangeSearchHandler}
		/>
	);
};
