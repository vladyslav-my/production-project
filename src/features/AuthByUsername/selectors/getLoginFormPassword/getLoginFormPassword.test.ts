import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { getLoginFormPassword } from "./getLoginFormPassword";

describe("getLoginFormPassword", () => {
	test("should return current value", () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: "test",
			},
		};

		expect(getLoginFormPassword(state as StateSchema)).toEqual("test");
	});

	test("should work with emty state", () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginFormPassword(state as StateSchema)).toEqual("");
	});
});
