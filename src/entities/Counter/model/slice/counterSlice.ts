import { buildCreateSlice } from "@/shared/lib/buildCreateSlice/buildCreateSlice";
import { CounterSchema } from "../types/CounterSchema";

const initialState: CounterSchema = {
	value: 0,
};

export const counterSlice = buildCreateSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});

// Action creators are generated for each case reducer function
export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
export const { useActions: useCounterActions } = counterSlice;
