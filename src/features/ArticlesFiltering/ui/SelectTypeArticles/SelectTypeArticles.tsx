import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { articlesListActions, articlesListSelectors } from "@/entities/Article";
import { fetchArticlesList } from "@/entities/Article/services/fetchArticlesList/fetchArticlesList";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Devices } from "@/shared/lib/mediaQuery";
import { DropDown } from "@/shared/ui/DropDown";
import { GroupButton } from "@/shared/ui/GroupButton";
import { typeOptionsData } from "../../lib/optionsData/typeOptionsData";
import cls from "./SelectTypeArticles.module.scss";

interface SelectTypeArticlesProps {
	className?: string;
}

const { getArticlesListTypeQP, getArticlesListIsLoading } = articlesListSelectors;

export const SelectTypeArticles: FC<SelectTypeArticlesProps> = ({ className }) => {
	const dispatch = useAppDispatch();

	const { t } = useTranslation();

	const type = useSelector(getArticlesListTypeQP);
	const isLoading = useSelector(getArticlesListIsLoading);

	const isSmallMobile = useMediaQuery({ maxWidth: Devices.SMALLMOBILE });

	const onChangeTypeHandler = (type: string) => {
		dispatch(articlesListActions.setType(type));

		dispatch(fetchArticlesList({ replace: true }));
	};

	if (isSmallMobile) {
		return (
			<DropDown
				className={classNames(cls.SelectTypeArticles, {}, [className])}
				options={typeOptionsData(t)}
				select={type}
				onChange={onChangeTypeHandler}
				disabled={isLoading}
			/>
		);
	}

	return (
		<GroupButton
			className={classNames(cls.SelectTypeArticles, {}, [className])}
			options={typeOptionsData(t)}
			value={type}
			onChange={onChangeTypeHandler}
			disabled={isLoading}
		/>
	);
};
