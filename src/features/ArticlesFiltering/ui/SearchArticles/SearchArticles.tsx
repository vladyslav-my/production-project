import { FC } from "react";
import cls from "./SearchArticles.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input, InputTheme } from "@/shared/ui/Input/Input";
import SearchIcon from "@/shared/assets/icons/articlesList/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { articlesListActions, articlesListSelectors } from "@/entities/Article";
import { fetchArticlesList } from "@/entities/Article/services/fetchArticlesList/fetchArticlesList";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";


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
			articlesListActions.setSearch(value)
		);
		
		dispatch(
			fetchArticlesList({ replace: true })
		);
	};

	return (
		<Input 
			className={classNames(cls.SearchArticles, {}, [className])} 
			theme={InputTheme.SMALL} 
			Icon={SearchIcon} 
			onChange={onChangeSearchHandler}
			value={search}
		/>
	);
};