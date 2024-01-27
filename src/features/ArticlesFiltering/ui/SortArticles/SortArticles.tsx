import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { articlesListActions, articlesListSelectors } from "@/entities/Article";
import { fetchArticlesList } from "@/entities/Article/services/fetchArticlesList/fetchArticlesList";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { DropDown } from "@/shared/ui/DropDown";
import { orderOptionsData } from "../../lib/optionsData/orderOptionsData";
import { sortOptionsData } from "../../lib/optionsData/sortOptionsData";
import cls from "./SortArticles.module.scss";

const { getArticlesListSortQP, getArticlesListOrderQP, getArticlesListIsLoading } = articlesListSelectors;

interface SortArticlesProps {
	className?: string;
}

export const SortArticles: FC<SortArticlesProps> = ({ className }) => {
	const dispatch = useAppDispatch();

	const { t } = useTranslation();

	const sort = useSelector(getArticlesListSortQP);
	const order = useSelector(getArticlesListOrderQP);
	const isLoading = useSelector(getArticlesListIsLoading);

	const onChangeSortHandler = (value: string) => {
		dispatch(articlesListActions.setSort(value));

		dispatch(fetchArticlesList({ replace: true }));
	};

	const onChangeOrderHandler = (value: string) => {
		dispatch(articlesListActions.setOrder(value));

		dispatch(fetchArticlesList({ replace: true }));
	};

	return (
		<div className={classNames(cls.SortArticles, {}, [className])}>
			<span className={cls.SortArticles__label}>
				{t("sort by")}
				:
			</span>
			<div className={cls.SortArticles__wrapper}>
				<DropDown
					disabled={isLoading}
					className={cls.SortArticles__sortedDropDown}
					options={sortOptionsData(t)}
					select={sort}
					onChange={onChangeSortHandler}
				/>
				<DropDown
					disabled={isLoading}
					className={cls.SortArticles__orderedDropDown}
					options={orderOptionsData(t)}
					select={order}
					onChange={onChangeOrderHandler}
				/>
			</div>
		</div>
	);
};
