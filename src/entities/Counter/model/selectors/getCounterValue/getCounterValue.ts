import { buildSelector } from "@/shared/lib/buildSelector/buildSelector";

export const [useCounterValue, getCounterValue] = buildSelector((state) => state.counter.value);
