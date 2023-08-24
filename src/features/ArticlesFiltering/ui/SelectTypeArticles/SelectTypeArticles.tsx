import { FC } from "react";
import cls from "./SelectTypeArticles.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { GroupButton } from "@/shared/ui/GroupButton";
import { articlesActions } from "@/entities/Article/model/slice/articlesSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { AnyAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getArticlesQueryParams } from "@/entities/Article/model/selectors/articles";

interface SelectTypeArticlesProps {
	className?: string;
}

const typesOptions = [
	{
		content: "Всі статті",
		value: "all",
	},
	{
		content: "IT",
		value: "IT",
	},
	{
		content: "Наука",
		value: "science",
	}
];

export const SelectTypeArticles: FC<SelectTypeArticlesProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const queryParams = useSelector(getArticlesQueryParams);

	const onChangeTypeHandler = (type: string) => {
		dispatch(
			articlesActions.removeData()
		);

		dispatch(
			articlesActions.setPage(1)
		);

		dispatch(
			articlesActions.setType(type)
		);
	};

	return (
		<GroupButton 
			className={classNames(cls.SelectTypeArticles, {}, [className])} 
			options={typesOptions} 
			value={queryParams?.type} 
			onChange={onChangeTypeHandler} 
		/>
	);
};