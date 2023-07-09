import { Currency } from "entities/Currency";

export interface Profile {
	first?: string,
   lastname?: string,
   age?: number,
   currency?: Currency,
   country?: any,
   city?: string,
   username?: string,
   avatar?: string
}

export interface ProfileSchema {
   readonly: boolean,
   data?: Profile,
   formData?: Profile,
   isLoading: boolean,
   error?: string
}