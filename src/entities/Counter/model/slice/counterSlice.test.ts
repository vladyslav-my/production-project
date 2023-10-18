// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { CounterSchema, counterReducer, counterActions } from "@/entities/Counter";

describe("counterSlice", () => {
	test("Check increment action", () => {
		const state: DeepPartial<CounterSchema> = {
			value: 10,
		};
		expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 });
	});
	test("Check increment action", () => {
		const state: DeepPartial<CounterSchema> = {
			value: 10,
		};
		expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 });
	});
	test("Check increment action with emty state", () => {
		expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
	});
});
