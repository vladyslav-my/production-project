import { FC, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { ReducersList } from "@/app/providers/StoreProvider";
import { PageError } from "@/widgets/ErrorPage";
import { Currency } from "@/entities/Currency";
import {
	ProfileActions,
	ProfileCard,
	ProfileReducer,
	fetchProfileData, getProfileError, getProfileFormData, getProfileIsLoading, getProfileReadOnly,
} from "@/entities/Profile";
import { getUserAuthData } from "@/entities/User";
import { Shell } from "@/shared/layouts/Shell";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDynamicReduce } from "@/shared/lib/hooks/useDynamicReduce/useDynamicReduce";
import { PageLoader } from "@/shared/ui/PageLoader";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import cls from "./Profile.module.scss";

interface ProfileProps {
	className?: string;
	profileId: number;
}

// const initialReducers: ReducersList = {
// 	profile: ProfileReducer,
// };

export const Profile: FC<ProfileProps> = ({ className, profileId }) => {
	// useDynamicReduce(initialReducers, false);

	const dispatch = useAppDispatch();
	const readOnly = useSelector(getProfileReadOnly);
	const formData = useSelector(getProfileFormData);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const authData = useSelector(getUserAuthData);

	// useEffect(() => {
	// 	dispatch(fetchProfileData({ profileId }));
	// }, [dispatch, profileId]);

	const onFirstNameChange = useCallback(
		(value?: string) => {
			dispatch(ProfileActions.setFormData({ first: value }));
		},
		[dispatch],
	);

	const onLastNameChange = useCallback(
		(value?: string) => {
			dispatch(ProfileActions.setFormData({ lastname: value }));
		},
		[dispatch],
	);

	const onAgeChange = useCallback(
		(value?: string) => {
			dispatch(ProfileActions.setFormData({ age: Number(value) }));
		},
		[dispatch],
	);

	const onAvatarChange = useCallback(
		(value?: string) => {
			dispatch(ProfileActions.setFormData({ avatar: value }));
		},
		[dispatch],
	);

	const onCurrencyChange = useCallback(
		(value?: Currency) => {
			dispatch(ProfileActions.setFormData({ currency: value }));
		},
		[dispatch],
	);

	const onChangeUsername = useCallback(
		(value?: string) => {
			dispatch(ProfileActions.setFormData({ username: value }));
		},
		[dispatch],
	);

	const onChangeCity = useCallback(
		(value?: string) => {
			dispatch(ProfileActions.setFormData({ city: value }));
		},
		[dispatch],
	);

	useEffect(() => {
		if (authData?.id === formData?.userId) {
			dispatch(ProfileActions.setIsMe(true));
		}
	}, [dispatch, authData, formData]);

	// const DisplayError = useCallback(() => {
	// 	if (errorList?.length !== 0) {
	// 		errorList?.map((error) => (
	// 			<div className={cls.error} key={error}>
	// 				{error}
	// 			</div>
	// 		));
	// 	}

	// 	return null;
	// }, [errorList]);

	// if (error) {
	// 	console.log("error");
	// 	return <Navigate replace to="*" />;
	// 	// return (
	// 	// 	<div>
	// 	// 		<div>{error.status}</div>
	// 	// 	</div>
	// 	// );
	// }

	// if (isLoading) {
	// 	console.log("loading");
	// 	return <PageLoader />;
	// }

	return (
		<Shell className={classNames(cls.Profile, {}, [className])}>
			<ProfileHeader profileId={profileId} />
			{/* <DisplayError /> */}
			<ProfileCard
				data={formData}
				readOnly={readOnly}
				onAgeChange={onAgeChange}
				onAvatarChange={onAvatarChange}
				onCurrencyChange={onCurrencyChange}
				onFirstNameChange={onFirstNameChange}
				onLastNameChange={onLastNameChange}
				onChangeUsername={onChangeUsername}
				onChangeCity={onChangeCity}
			/>
		</Shell>
	);
};
