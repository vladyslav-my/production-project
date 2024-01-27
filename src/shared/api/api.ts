import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "../const/localstorage";

export const $api = axios.create({
	baseURL: __API__,

});

$api.interceptors.request.use(
	(config) => {
		config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";

		return config;
	},
	(error) => {
		console.error("Error in request interceptor:", error);
		return Promise.reject(error);
	},
);
