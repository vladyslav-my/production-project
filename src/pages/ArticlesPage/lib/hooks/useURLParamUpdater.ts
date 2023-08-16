import { useSearchParams } from "react-router-dom";
import { ArticlesPageActions } from "../../models/slice/articlesPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

export const useURLParamUpdater = () => {
	const dispatch = useAppDispatch();
	const [URLSearchParams, SetURLSearchParams] = useSearchParams();
		
	const pageParam = URLSearchParams.get("page");
	const orderParam = URLSearchParams.get("order");
	const sortParam = URLSearchParams.get("sort");
	const searchParam = URLSearchParams.get("search");

	if (pageParam) {
		dispatch(
			ArticlesPageActions.setPage(pageParam)
		);
	}

	if (orderParam) {
		dispatch(
			ArticlesPageActions.setOrder(orderParam)
		);
	}

	if (sortParam) {
		dispatch(
			ArticlesPageActions.setSort(sortParam)
		);
	}

	if (searchParam) {
		dispatch(
			ArticlesPageActions.setSearch(searchParam)
		);
	}
};