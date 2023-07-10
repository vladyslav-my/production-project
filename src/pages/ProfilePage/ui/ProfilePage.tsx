import { FC, useCallback, useEffect } from "react";
import cls from "./ProfilePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ProfileCard } from "entities/Profile/ui/ProfileCard/ProfileCard";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { DynamicReduceLoader } from "shared/lib/components/DynamicReduceLoader";
import { ProfileActions, ProfileReducer } from "entities/Profile/model/slice/ProfileSlice";
import { useSelector } from "react-redux";
import { getProfileReadOnly } from "entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly";
import { ReducersList } from "app/providers/StoreProvider";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchProfileData } from "entities/Profile/model/services/fetchProfileData/fetchProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileFormData } from "entities/Profile/model/selectors/getProfileFormData/getProfileFormData";
import { Currency } from "entities/Currency";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";

interface ProfilePageProps {
   className?: string
}

const initialReducers: ReducersList = {
	profile: ProfileReducer,
};

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const readOnly = useSelector(getProfileReadOnly);
	const formData = useSelector(getProfileFormData);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);

	const onFirstNameChange = useCallback((value?: string) => {
		dispatch(ProfileActions.setFormData({ first: value }));
	}, [dispatch]);

	const onLastNameChange = useCallback((value?: string) => {
		dispatch(ProfileActions.setFormData({ lastname: value }));
	}, [dispatch]);

	const onAgeChange = useCallback((value?: string) => {
		dispatch(ProfileActions.setFormData({ age: Number(value) }));
	}, [dispatch]);

	const onAvatarChange = useCallback((value?: string) => {
		dispatch(ProfileActions.setFormData({ avatar: value }));
	}, [dispatch]);

	const onCurrencyChange = useCallback((value?: Currency) => {
		dispatch(ProfileActions.setFormData({ currency: value }));
	}, [dispatch]);


	useEffect(() => {
		dispatch(fetchProfileData());
	}, []);

	return (
		<DynamicReduceLoader reducers={initialReducers}>
			<div className={classNames(cls.ProfilePage, {}, [className])}>
				<ProfileHeader />
				{ error?.length !== 0 && error?.map(error => (
					<div key={error} className={cls.error}>{error}</div>
				)) }
				<ProfileCard
					onFirstNameChange={onFirstNameChange}
					onLastNameChange={onLastNameChange}
					onAgeChange={onAgeChange}
					onAvatarChange={onAvatarChange}
					onCurrencyChange={onCurrencyChange}
					isLoading={isLoading} 
					readOnly={readOnly} 
					data={formData} 
				/>
			</div>
		</DynamicReduceLoader>

	);
};

export default ProfilePage;