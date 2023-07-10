import { Profile } from "../../types/Profile";
import { ValidateProfileError } from "../../types/Profile";


export const validateProfileData = (profile?: Profile) => {

	const errors: ValidateProfileError[] = []; 

	if (!profile) {
		return [ValidateProfileError.NO_DATA];
	}

	const { 
		age, first, lastname 
	} = profile;

	if (!age || !Number.isInteger(age)) {
		errors.push(ValidateProfileError.INCORRECT_AGE);
	}

	if (!first || first?.length === 0) {
		errors.push(ValidateProfileError.INCORRECT_FIRST);
	}

	if (!first || lastname?.length === 0) {
		errors.push(ValidateProfileError.INCORRECT_LASTNAME);
	}

	return errors;
};