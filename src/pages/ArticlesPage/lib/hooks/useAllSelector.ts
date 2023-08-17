import { useSelector } from "react-redux";
import {	
	getArticlePageInited,
	getArticlePageLimit,
	getArticlePageOrder,
	getArticlePagePage,
	getArticlePageSearch,
	getArticlePageSort,
	getArticlePageType
} from "../../models/selectors";

export const useAllSelector = () => {
	
	const page = useSelector(getArticlePagePage);
	const order = useSelector(getArticlePageOrder);
	const sort = useSelector(getArticlePageSort);
	const type = useSelector(getArticlePageType);
	const search = useSelector(getArticlePageSearch);
	const limit = useSelector(getArticlePageLimit);
	const inited = useSelector(getArticlePageInited);

	return {
		page,
		order,
		sort,
		type,
		search,
		limit,
		inited
	};
};