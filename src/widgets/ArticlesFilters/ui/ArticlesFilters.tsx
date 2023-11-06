import { FC } from "react";
import { SearchArticles, SelectTypeArticles, SortArticles } from "@/features/ArticlesFiltering";
import { CAVBorderStyle, CAVSizeStyle, ChangeArticlesView } from "@/features/ChangeArticleView";
import { Shell } from "@/shared/layouts/Shell";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppMediaQuery, Devices } from "@/shared/lib/mediaQuery";
import cls from "./ArticlesFilters.module.scss";

interface ArticlesFiltersProps {
	className?: string;
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = ({ className }) => (
	<Shell className={classNames(cls.ArticlesFilters, {}, [className])}>
		<SearchArticles className={cls.ArticlesFilters__search} />
		<AppMediaQuery maxWidth={Devices.LARGE_DESKTOP} minWidth={Devices.INTERMEDIATE_DESKTOP}>
			<ChangeArticlesView
				borderStyle={CAVBorderStyle.SECONDARY}
				className={cls.ArticlesFilters__changeArticlesView}
				sizeStyle={CAVSizeStyle.SMALL}
			/>
		</AppMediaQuery>
		<AppMediaQuery maxWidth={Devices.INTERMEDIATE_DESKTOP}>
			<div className={cls.ArticlesFilters__wrapper}>
				<SelectTypeArticles className={cls.ArticlesFilters__selectType} />
				<ChangeArticlesView
					borderStyle={CAVBorderStyle.SECONDARY}
					className={cls.ArticlesFilters__changeArticlesView}
					sizeStyle={CAVSizeStyle.SMALL}
				/>
			</div>
		</AppMediaQuery>
		<AppMediaQuery minWidth={Devices.INTERMEDIATE_DESKTOP}>
			<div>
				<SelectTypeArticles className={cls.ArticlesFilters__selectType} />
			</div>
		</AppMediaQuery>

		<SortArticles className={cls.ArticlesFilters__sort} />
	</Shell>
);
