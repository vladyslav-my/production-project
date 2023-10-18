import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { articlesListActions, articlesListSelectors } from "@/entities/Article";
import { fetchArticlesList } from "@/entities/Article/services/fetchArticlesList/fetchArticlesList";
import SearchIcon from "@/shared/assets/icons/articlesList/search.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Input, InputTheme } from "@/shared/ui/Input/Input";
import cls from "./SearchArticles.module.scss";

interface SearchArticlesProps {
	className?: string;
}

export const SearchArticles: FC<SearchArticlesProps> = ({ className }) => {
	const dispatch = useAppDispatch();

	const { getArticlesListSearchQP } = articlesListSelectors;

	const search = useSelector(getArticlesListSearchQP);
	console.log(search);

	const onChangeSearchHandler = (value: string) => {
		dispatch(
			articlesListActions.setSearch(value),
		);

		dispatch(
			fetchArticlesList({ replace: true }),
		);
	};

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
