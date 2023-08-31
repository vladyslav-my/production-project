import { FC } from "react";
import cls from "./SelectTypeArticles.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { GroupButton } from "@/shared/ui/GroupButton";
import { articlesActions } from "@/entities/Article/model/slice/articlesSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticlesQueryParams } from "@/entities/Article/model/selectors/articles";
import { useMediaQuery } from "react-responsive";
import { Devices } from "@/shared/lib/mediaQuery";
import { DropDown } from "@/shared/ui/DropDown";
import { typeOptionsData } from "../../lib/optionsData/typeOptionsData";

interface SelectTypeArticlesProps {
	className?: string;
}

export const SelectTypeArticles: FC<SelectTypeArticlesProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const queryParams = useSelector(getArticlesQueryParams);
	const isSmallMobile = useMediaQuery({ maxWidth: Devices.SMALLMOBILE });

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

	if (isSmallMobile) {
		return (
			<DropDown 
				className={classNames(cls.SelectTypeArticles, {}, [className])} 
				options={typeOptionsData} 
				select={queryParams?.type} 
				onChange={onChangeTypeHandler} 
			/>
		);
	}	

	return (
		<GroupButton 
			className={classNames(cls.SelectTypeArticles, {}, [className])} 
			options={typeOptionsData} 
			value={queryParams?.type} 
			onChange={onChangeTypeHandler} 
		/>
	);
};