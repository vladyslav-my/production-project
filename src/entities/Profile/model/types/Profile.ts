import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

export interface Profile {
	first?: string,
   lastname?: string,
   age?: number,
   currency?: Currency,
   country?: Country,
   city?: string,
   username?: string,
   avatar?: string
}

export interface ProfileSchema {
   readonly: boolean;
   data?: Profile;
   formData?: Profile;
   isLoading: boolean;
   error?: ValidateProfileError[];
}

export enum ValidateProfileError {
   INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
   INCORRECT_AGE = "INCORRECT_AGE",
   INCORRECT_FIRST = "INCORRECT_FIRST",
   INCORRECT_LASTNAME = "INCORRECT_LASTNAME",
   NO_DATA = "NO_DATA",
   SERVER_ERROR = "SERVER_ERROR",
}