import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider/config/stateSchema";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
	test("Check default value", () => {
		const state: DeepPartial<StateSchema> = {
			counter: {
				value: 10
			}
		};
		expect(getCounterValue(state as StateSchema)).toEqual(10);
	});
});