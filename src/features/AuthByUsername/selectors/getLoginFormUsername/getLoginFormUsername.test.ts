import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { getLoginFormUsername } from "./getLoginFormUsername";

describe("getLoginFormPassword", () => {
	test("should return current value", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: "test",
			},
		};

		expect(getLoginFormUsername(state as StateSchema)).toEqual("test");
	});

	test("should work with emty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginFormUsername(state as StateSchema)).toEqual("");
	});
});
