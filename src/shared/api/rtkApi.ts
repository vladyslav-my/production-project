import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USER_LOCALSTORAGE_KEY } from "../const/localstorage";

export const rtkApi = createApi({
	tagTypes: ["Comments", "Rating"],
	reducerPath: "rtkApi",
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers) => {
			headers.set("Authorization", localStorage.getItem(USER_LOCALSTORAGE_KEY) || "");
			return headers;
		},
	}),
	endpoints: () => ({}),
});
