import { FC, InputHTMLAttributes } from "react";
import cls from "./SearchArticles.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input, InputTheme } from "@/shared/ui/Input/Input";
import SearchIcon from "@/shared/assets/icons/articlesList/search.svg";
import { articlesActions } from "@/entities/Article/model/slice/articlesSlice";
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";

interface SearchArticlesProps {
	className?: string;
	search?: string;
}

export const SearchArticles: FC<SearchArticlesProps> = ({ className, search }) => {
	const dispatch = useDispatch();

	const onChangeSearchHandler = (value: string) => {

		dispatch(
			articlesActions.removeData()
		);

		dispatch(
			articlesActions.setPage(1)
		);
		
		dispatch(
			articlesActions.setSearch(value)
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