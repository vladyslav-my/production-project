import { FC } from "react";
import cls from "./SelectTypeArticles.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { GroupButton } from "@/shared/ui/GroupButton";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Devices } from "@/shared/lib/mediaQuery";
import { DropDown } from "@/shared/ui/DropDown";
import { typeOptionsData } from "../../lib/optionsData/typeOptionsData";
import { articlesListActions, articlesListSelectors } from "@/entities/Article";
import { fetchArticlesList } from "@/entities/Article/services/fetchArticlesList/fetchArticlesList";


interface SelectTypeArticlesProps {
	className?: string;
}

export const SelectTypeArticles: FC<SelectTypeArticlesProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const { getArticlesListTypeQP } = articlesListSelectors;

	const type = useSelector(getArticlesListTypeQP);

	const isSmallMobile = useMediaQuery({ maxWidth: Devices.SMALLMOBILE });

	const onChangeTypeHandler = (type: string) => {
		dispatch(
			articlesListActions.setType(type)
		);


		dispatch(
			fetchArticlesList({ replace: true })
		);
	};

	if (isSmallMobile) {
		return (
			<DropDown 
				className={classNames(cls.SelectTypeArticles, {}, [className])} 
				options={typeOptionsData} 
				select={type} 
				onChange={onChangeTypeHandler} 
			/>
		);
	}	

	return (
		<GroupButton 
			className={classNames(cls.SelectTypeArticles, {}, [className])} 
			options={typeOptionsData} 
			value={type} 
			onChange={onChangeTypeHandler} 
		/>
	);
};