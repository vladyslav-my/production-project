import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileIsFetching = (state: StateSchema) => state.profile?.isFetching;
