import {
	FC, useCallback, useEffect, useMemo,
} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReducersList } from "@/app/providers/StoreProvider";
import { Currency } from "@/entities/Currency";
import {
	getProfileError,
	getProfileFormData,
	getProfileIsLoading,
	getProfileReadOnly,
	fetchProfileData,
	ProfileActions,
	ProfileReducer,
	ProfileCard,
} from "@/entities/Profile";
import { getUserAuthData } from "@/entities/User";
import { RouteContainer } from "@/shared/layouts/RouteContainer";
import { Shell } from "@/shared/layouts/Shell";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DynamicReduceLoader } from "@/shared/lib/components/DynamicReduceLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import cls from "./ProfilePage.module.scss";

interface ProfilePageProps {
	className?: string;
}

const initialReducers: ReducersList = {
	profile: ProfileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
	const { id } = useParams();
	const profileId = useMemo(() => Number(id), [id]);

	const dispatch = useAppDispatch();
	const readOnly = useSelector(getProfileReadOnly);
	const formData = useSelector(getProfileFormData);
	const isLoading = useSelector(getProfileIsLoading);
	const errorList = useSelector(getProfileError);
	const authData = useSelector(getUserAuthData);

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

	useEffect(() => {
		dispatch(fetchProfileData({ profileId }));
	}, [dispatch, profileId]);

	if (profileId) {
		return (
			<RouteContainer>
				<DynamicReduceLoader reducers={initialReducers}>
					<Shell>
						<div className={classNames(cls.ProfilePage, {}, [className])}>
							<ProfileHeader profileId={profileId} />
							{errorList?.length !== 0
								&& errorList?.map((error) => (
									<div className={cls.error} key={error}>
										{error}
									</div>
								))}
							<ProfileCard
								data={formData}
								isLoading={isLoading}
								readOnly={readOnly}
								onAgeChange={onAgeChange}
								onAvatarChange={onAvatarChange}
								onCurrencyChange={onCurrencyChange}
								onFirstNameChange={onFirstNameChange}
								onLastNameChange={onLastNameChange}
								onChangeUsername={onChangeUsername}
								onChangeCity={onChangeCity}
							/>
						</div>
					</Shell>
				</DynamicReduceLoader>
			</RouteContainer>
		);
	}

	return null;
};

export default ProfilePage;
