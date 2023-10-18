import { FC } from "react";
import { useSelector } from "react-redux";
import { articlesListActions, articlesListSelectors } from "@/entities/Article";
import { fetchArticlesList } from "@/entities/Article/services/fetchArticlesList/fetchArticlesList";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { DropDown } from "@/shared/ui/DropDown";
import { orderOptionsData } from "../../lib/optionsData/orderOptionsData";
import { sortOptionData } from "../../lib/optionsData/sortOptionsData";
import cls from "./SortArticles.module.scss";

interface SortArticlesProps {
	className?: string;
}

export const SortArticles: FC<SortArticlesProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const { getArticlesListSortQP, getArticlesListOrderQP } = articlesListSelectors;

	const sort = useSelector(getArticlesListSortQP);
	const order = useSelector(getArticlesListOrderQP);

	const onChangeSortHandler = (value: string) => {
		dispatch(
			articlesListActions.setSort(value),
		);

		dispatch(
			fetchArticlesList({ replace: true }),
		);
	};

	const onChangeOrderHandler = (value: string) => {
		dispatch(
			articlesListActions.setOrder(value),
		);

		dispatch(
			fetchArticlesList({ replace: true }),
		);
	};

	return (
		<div className={classNames(cls.SortArticles, {}, [className])}>
			<span className={cls.SortArticles__label}>
				Сортувати за:
			</span>
			<div className={cls.SortArticles__wrapper}>
				<DropDown
					className={cls.SortArticles__sortedDropDown}
					options={sortOptionData}
					select={sort}
					onChange={onChangeSortHandler}
				/>
				<DropDown
					className={cls.SortArticles__orderedDropDown}
					options={orderOptionsData}
					select={order}
					onChange={onChangeOrderHandler}
				/>
			</div>
		</div>
	);
};
