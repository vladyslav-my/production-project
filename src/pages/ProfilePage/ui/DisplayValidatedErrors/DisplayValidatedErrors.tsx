import {
	FC,
} from "react";
import { useSelector } from "react-redux";
import { getProfileValidateError } from "@/entities/Profile";

export const DisplayValidatedErrors: FC = () => {
	const validateError = useSelector(getProfileValidateError);

	return validateError?.map((error) => {
		return <div key={error} style={{ color: "red" }}>{error}</div>;
	});
};
