import { counterActions, counterReducer } from "./model/slice/counterSlice";
import { CounterSchema } from "./model/types/CounterSchema";
import Counter from "./ui/Counter";

export { Counter, counterActions, counterReducer };

export type { CounterSchema };
