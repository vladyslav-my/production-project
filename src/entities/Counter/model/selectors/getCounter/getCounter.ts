import { StateSchema } from "app/providers/StoreProvider/config/stateSchema";

export const getCounter = (state: StateSchema) => state.counter;