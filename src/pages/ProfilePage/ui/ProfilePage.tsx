import { FC, useCallback, useEffect } from "react";
import cls from "./ProfilePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ProfileCard } from "entities/Profile/ui/ProfileCard/ProfileCard";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { DynamicReduceLoader } from "shared/lib/components/DynamicReduceLoader";
import { ProfileActions, ProfileReducer } from "entities/Profile/model/slice/ProfileSlice";
import { useSelector } from "react-redux";
import { getProfileReadOnly } from "entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly";
import { ReducersList } from "app/providers/StoreProvider";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchProfileData } from "entities/Profile/model/services/fetchProfileData/fetchProfileData";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileFormData } from "entities/Profile/model/selectors/getProfileFormData/getProfileFormData";

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


	useEffect(() => {
		dispatch(fetchProfileData());
	}, []);

	return (
		<DynamicReduceLoader reducers={initialReducers}>
			<div className={classNames(cls.ProfilePage, {}, [className])}>
				<ProfileHeader />
				<ProfileCard 
					onFirstNameChange={onFirstNameChange}
					onLastNameChange={onLastNameChange}
					onAgeChange={onAgeChange}
					onAvatarChange={onAvatarChange}
					isLoading={isLoading} 
					readOnly={readOnly} 
					data={formData} 
				/>
			</div>
		</DynamicReduceLoader>

	);
};

export default ProfilePage;