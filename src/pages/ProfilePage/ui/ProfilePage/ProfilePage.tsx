import { error } from "console";
import {
	FC, useEffect, useMemo,
} from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReducersList } from "@/app/providers/StoreProvider";
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { NotFoundPage } from "@/pages/NotFoundPage";
import {
	ProfileReducer, fetchProfileData, getProfileError, getProfileIsFetching,
} from "@/entities/Profile";
import { RouteContainer } from "@/shared/layouts/RouteContainer";
import { Shell } from "@/shared/layouts/Shell";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { PageLoader } from "@/shared/ui/PageLoader";
import { DisplayPageLoader } from "../DisplayPageLoader/DisplayPageLoader";
import { DisplayValidatedErrors } from "../DisplayValidatedErrors/DisplayValidatedErrors";
import { FilledProfileCard } from "../FilledProfileCard/FilledProfileCard";
import { ProfileHeader } from "../ProfileHeader/ProfileHeader";
import cls from "./ProfilePage.module.scss";

// const initialReducers: ReducersList = {
// 	profile: ProfileReducer,
// };
const ProfilePage: FC = () => {
	const { id } = useParams();
	const profileId = useMemo(() => Number(id), [id]);
	// useDynamicReduce(initialReducers, false);

	const dispatch = useAppDispatch();

	const isFetching = useSelector(getProfileIsFetching);
	const error = useSelector(getProfileError);

	useEffect(() => {
		dispatch(fetchProfileData({ profileId }));
	}, [dispatch, profileId]);

	if (error) {
		return <NotFoundPage />;
	}

	if (isFetching) {
		return <PageLoader />;
	}

	if (profileId) {
		return (
			<RouteContainer>
				<Shell className={cls.profileShell}>
					<ProfileHeader />
					<FilledProfileCard />
					<DisplayValidatedErrors />
					<DisplayPageLoader className={cls.profileShell__pageLoader} />
				</Shell>
			</RouteContainer>
		);
	}

	return null;
};

export default ProfilePage;
