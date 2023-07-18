import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

import { getLoginFormError } from "./getLoginFormError";

describe("getLoginFormError", () => {
	test("should return error", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				error: "error"
			}
		};

		expect(getLoginFormError(state as StateSchema)).toEqual("error");
	});
	test("should return undefined", () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginFormError(state as StateSchema)).toEqual(undefined);
	});
});