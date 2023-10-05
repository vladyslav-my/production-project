import { rtkApi } from "@/shared/api/rtkApi";
import { Comment } from "../types/Comment";


interface UpdateArticleComments {
	articleId: number | string; 
	userId: number | string;
	comment: string;
}

const commentsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleComments: build.query<Comment[], string>({
			providesTags: ["Comments"],
			query: (articleId) => ({
				url: "comments",
				params: {
					_expand: "user",
					articleId
				},
				
			}),
		}),

		updateArticleComments: build.mutation<unknown, UpdateArticleComments>({
			invalidatesTags: ["Comments"],
			query: ({ articleId, userId, comment }) => ({
				url: "comments",
				method: "POST",
				
				body: {
					articleId,
					userId,
					comment
				},
			}),
		}),
	}),
	overrideExisting: false,
});

export const { useGetArticleCommentsQuery, useUpdateArticleCommentsMutation } = commentsApi;