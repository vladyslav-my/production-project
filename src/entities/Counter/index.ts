import { CounterSchema } from "./model/types/CounterSchema";
import { counterActions } from "./model/slice/counterSlice";
import { counterReducer } from "./model/slice/counterSlice";

export {
	counterActions,
	counterReducer
};

export type {
	CounterSchema
};