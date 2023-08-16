import { useSearchParams } from "react-router-dom";
import { ArticlesPageActions } from "../../models/slice/articlesPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useAllSelector } from "./useAllSelector";

export const useURLParamSetter = () => {
	const [URLSearchParams, SetURLSearchParams] = useSearchParams();
		
	const {
		page,
		order,
		sort,
		type,
		search,
		limit
	} = useAllSelector();

	SetURLSearchParams(
		{
			limit: limit + "",
			page: page + "",
			order,
			sort,
			type,
			...(search ? { search } : {})
		}
	);
};