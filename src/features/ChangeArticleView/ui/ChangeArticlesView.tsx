import { FC, SVGProps } from "react";
import cls from "./ChangeArticlesView.module.scss";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import ListIcon from "@/shared/assets/icons/articlesList/list.svg";
import TileIcon from "@/shared/assets/icons/articlesList/tile.svg";
import { Icon } from "@/shared/ui/Icon";
import { Button } from "@/shared/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesViewMode } from "@/entities/Article/model/selectors/articles";
import { ViewMode, articlesActions } from "@/entities/Article";
import { articlesSlice } from "@/entities/Article/model/slice/articlesSlice";


export enum CAVBorderStyle {
	PRIMARY = "ChangeArticlesView_border_primary",
	SECONDARY = "ChangeArticlesView_border_secondary"
}

export enum CAVSizeStyle {
	SMALL = "ChangeArticlesView_size_small",
	MEDIUM = "ChangeArticlesView_size_medium"
}

interface ChangeArticlesViewProps {
	className?: string
	borderStyle?: CAVBorderStyle;
	sizeStyle?: CAVSizeStyle;
}


interface DataViewBtns { 
	key: number;
	Icon: FC<SVGProps<SVGSVGElement>>;
	viewMode: ViewMode;
	width: number;
	height: number;
}
const dataViewBtns: DataViewBtns[] = [
	{
		key: 1,
		Icon: ListIcon,
		viewMode: ViewMode.LIST,
		width: 18,
		height: 16
	},
	{
		key: 2,
		Icon: TileIcon,
		viewMode: ViewMode.TILE,
		width: 18,
		height: 18,
	}
];

export const ChangeArticlesView: FC<ChangeArticlesViewProps> = ({ 
	className,
	borderStyle = CAVBorderStyle.PRIMARY, 
	sizeStyle = CAVSizeStyle.MEDIUM
}) => {
	const dispatch = useDispatch();

	const viewMode = useSelector(getArticlesViewMode);

	const onClickSwitchView = () => {
		if (viewMode === ViewMode.LIST) {
			dispatch(
				articlesActions.setViewMode(ViewMode.TILE)
			);
			
		} else if (viewMode === ViewMode.TILE) {
			dispatch(
				articlesActions.setViewMode(ViewMode.LIST)
			);
		}
	}; 


	return (
		<Button className={cn(cls.ChangeArticlesView, {}, [className, cls[borderStyle], cls[sizeStyle]])} onClick={onClickSwitchView}>
			{
				dataViewBtns.map(({ key, Icon: IconParam, viewMode: viewModeParam, width, height }) => (
					<div key={key} className={cn(cls.viewMode, {
						[cls.viewMode_active]: viewMode === viewModeParam
					})}>
						<Icon 
							className={cls.viewMode__icon}
							width={width} 
							height={height} 
							Svg={IconParam}
						/>				
					</div>
				))
			}
		</Button>
	);
};