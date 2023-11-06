import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileIsMe = (state: StateSchema) => state.profile?.isMe;
