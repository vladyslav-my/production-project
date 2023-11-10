import { FC, SVGProps } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewMode, articlesListActions, articlesListSelectors } from "@/entities/Article";
import { fetchArticlesList } from "@/entities/Article/services/fetchArticlesList/fetchArticlesList";
import ListIcon from "@/shared/assets/icons/articlesList/list.svg";
import TileIcon from "@/shared/assets/icons/articlesList/tile.svg";
import { classNames as cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "@/shared/ui/Buttons";
import { Icon } from "@/shared/ui/Icon";
import cls from "./ChangeArticlesView.module.scss";

export enum CAVBorderStyle {
	PRIMARY = "ChangeArticlesView_border_primary",
	SECONDARY = "ChangeArticlesView_border_secondary",
}

export enum CAVSizeStyle {
	SMALL = "ChangeArticlesView_size_small",
	MEDIUM = "ChangeArticlesView_size_medium",
}

interface ChangeArticlesViewProps {
	className?: string;
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
		Icon: TileIcon,
		viewMode: ViewMode.TILE,
		width: 18,
		height: 18,
	},
	{
		key: 2,
		Icon: ListIcon,
		viewMode: ViewMode.LIST,
		width: 18,
		height: 16,
	},
];

export const ChangeArticlesView: FC<ChangeArticlesViewProps> = ({
	className,
	borderStyle = CAVBorderStyle.PRIMARY,
	sizeStyle = CAVSizeStyle.MEDIUM,
}) => {
	const dispatch = useAppDispatch();
	const { getArticlesListViewMode } = articlesListSelectors;

	const viewMode = useSelector(getArticlesListViewMode);

	const onClickSwitchView = () => {
		if (viewMode === ViewMode.LIST) {
			dispatch(articlesListActions.setViewMode(ViewMode.TILE));

			dispatch(fetchArticlesList({ replace: true }));
		} else if (viewMode === ViewMode.TILE) {
			dispatch(articlesListActions.setViewMode(ViewMode.LIST));

			dispatch(fetchArticlesList({ replace: true }));
		}
	};

	return (
		<Button
			className={cn(cls.ChangeArticlesView, {}, [className, cls[borderStyle], cls[sizeStyle]])}
			onClick={onClickSwitchView}
		>
			{dataViewBtns.map(({
				key, Icon: IconParam, viewMode: viewModeParam, width, height,
			}) => (
				<div
					className={cn(cls.viewMode, {
						[cls.viewMode_active]: viewMode === viewModeParam,
					})}
					key={key}
				>
					<Icon Svg={IconParam} className={cls.viewMode__icon} height={height} width={width} />
				</div>
			))}
		</Button>
	);
};
