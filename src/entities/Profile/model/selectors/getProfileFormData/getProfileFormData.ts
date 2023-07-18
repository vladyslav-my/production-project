import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileFormData = (state: StateSchema) => state.profile?.formData;