import { FC } from "react";
import cls from "./ArticlesFilters.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Shell } from "@/shared/layouts/Shell";
import { SearchArticles, SelectTypeArticles, SortArticles } from "@/features/ArticlesFiltering";
import { CAVBorderStyle, CAVSizeStyle, ChangeArticlesView } from "@/features/ChangeArticleView";
import { AppMediaQuery, Devices } from "@/shared/lib/mediaQuery";

interface ArticlesFiltersProps {
	className?: string
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = ({ className }) => {
	return (
		<Shell className={classNames(cls.ArticlesFilters, {}, [className])}>
			<SearchArticles 
				className={cls.ArticlesFilters__search}
			/>
			<AppMediaQuery maxWidth={Devices.BREAKPOINT_1800} minWidth={Devices.BREAKPOINT_1394}>
				<ChangeArticlesView 
					className={cls.ArticlesFilters__changeArticlesView} 
					borderStyle={CAVBorderStyle.SECONDARY} 
					sizeStyle={CAVSizeStyle.SMALL}
				/>
			</AppMediaQuery>
			<AppMediaQuery maxWidth={Devices.BREAKPOINT_1394}>
				<div className={cls.ArticlesFilters__wrapper}>
					<SelectTypeArticles
						className={cls.ArticlesFilters__selectType}
					/>
					<ChangeArticlesView 
						className={cls.ArticlesFilters__changeArticlesView} 
						borderStyle={CAVBorderStyle.SECONDARY} 
						sizeStyle={CAVSizeStyle.SMALL}
					/>
				</div>

			</AppMediaQuery>
			<AppMediaQuery minWidth={Devices.BREAKPOINT_1394}>
				<div>
					<SelectTypeArticles
						className={cls.ArticlesFilters__selectType}
					/>
				</div>
			</AppMediaQuery>
	
			<SortArticles
				className={cls.ArticlesFilters__sort}
			/>

		</Shell>
	);
};