import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { getLoginFormIsLoading } from "./getLoginFormIsLoading";

describe("getLoginFormIsLoading", () => {
	test("should return true", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				isLoading: true,
			},
		};

		expect(getLoginFormIsLoading(state as StateSchema)).toEqual(true);
	});

	test("should work with emty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginFormIsLoading(state as StateSchema)).toEqual(false);
	});
});
