import { FC } from "react";
import cls from "./SortArticles.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DropDown } from "@/shared/ui/DropDown";
import { AnyAction } from "@reduxjs/toolkit";
import { articlesActions } from "@/entities/Article/model/slice/articlesSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getArticlesQueryParams } from "@/entities/Article/model/selectors/articles";
import { useSelector } from "react-redux";

const sortOption = [
	{
		content: "Датою загрузки",
		value: "createdAt"
	},
	{
		content: "Перегдяду",
		value: "views"
	}
];

const orderOption = [
	{
		content: "Зростанням",
		value: "asc"
	},
	{
		content: "Зменьшуванням",
		value: "desc"
	}
];


interface SortArticlesProps {
	className?: string;
}

export const SortArticles: FC<SortArticlesProps> = ({ className }) => {
	const dispatch = useAppDispatch();

	const queryParams = useSelector(getArticlesQueryParams);

	const onChangeSortHandler = (value: string) => {
		dispatch(
			articlesActions.removeData()
		);

		dispatch(
			articlesActions.setPage(1)
		);
		
		dispatch(
			articlesActions.setSort(value)
		);
	};

	const onChangeOrderHandler = (value: string) => {
		dispatch(
			articlesActions.removeData()
		);

		dispatch(
			articlesActions.setPage(1)
		);

		dispatch(
			articlesActions.setOrder(value)
		);
	};


	return (
		<div className={classNames(cls.SortArticles, {}, [className])}>
			<span className={cls.SortArticles__label}>Сортувати за:</span>
			<DropDown 
				className={cls.SortArticles__sortedDropDown} 
				options={sortOption}
				select={queryParams?.sort} 
				onChange={onChangeSortHandler}
			/>
			<DropDown 
				className={cls.SortArticles__orderedDropDown}
				options={orderOption} 
				select={queryParams?.order} 
				onChange={onChangeOrderHandler}
			/>
		</div>
	);
};