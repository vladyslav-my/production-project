import { Rating } from "@/entities/Rating";
import { rtkApi } from "@/shared/api/rtkApi";

const ratingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRating: build.query<Rating, { articleId: number, userId: number }>({
			providesTags: ["Rating"],
			query: ({ articleId, userId }) => ({
				url: "rating",
				params: {
					articleId,
					userId,
				},

			}),
			transformResponse: (response: Rating[], meta, arg) => response[0],
		}),

		writeArticleRating: build.mutation<void, { articleId: number, userId: number, feedback?: string, stars: number }>({
			invalidatesTags: ["Rating"],
			query: ({
				articleId, userId, stars, feedback,
			}) => ({
				url: "rating",
				method: "POST",

				body: {
					articleId,
					userId,
					stars,
					feedback,
				},
			}),
		}),
	}),
	overrideExisting: false,
});

export const { useGetArticleRatingQuery, useWriteArticleRatingMutation } = ratingApi;
