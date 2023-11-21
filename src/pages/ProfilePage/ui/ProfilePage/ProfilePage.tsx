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
	ProfileReducer, fetchProfileData, getProfileData, getProfileError, getProfileIsLoading,
} from "@/entities/Profile";
import { RouteContainer } from "@/shared/layouts/RouteContainer";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDynamicReduce } from "@/shared/lib/hooks/useDynamicReduce/useDynamicReduce";
import { PageLoader } from "@/shared/ui/PageLoader";
import { Profile } from "../Profile/Profile";

const initialReducers: ReducersList = {
	profile: ProfileReducer,
};

const ProfilePage: FC = () => {
	const { id } = useParams();
	const profileId = useMemo(() => Number(id), [id]);
	useDynamicReduce(initialReducers, false);

	const dispatch = useAppDispatch();

	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);

	useEffect(() => {
		dispatch(fetchProfileData({ profileId }));
	}, [dispatch, profileId]);

	if (error) {
		return <NotFoundPage />;
	}

	if (isLoading) {
		return <PageLoader />;
	}

	if (profileId) {
		return (
			<RouteContainer>
				<Profile profileId={profileId} />
			</RouteContainer>
		);
	}

	return null;
};

export default ProfilePage;
