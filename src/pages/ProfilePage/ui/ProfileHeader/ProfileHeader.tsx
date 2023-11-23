import { FC, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {
	getProfileReadOnly, updateProfileData, ProfileActions, getProfileFormData, getProfileIsMe,
	getProfileData,
} from "@/entities/Profile";
import { getUserAuthData } from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "@/shared/ui/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Buttons";
import cls from "./ProfileHeader.module.scss";

interface ProfileHeaderProps {
	className?: string;
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const readOnly = useSelector(getProfileReadOnly);
	const isMe = useSelector(getProfileIsMe);
	const data = useSelector(getProfileData);
	const authData = useSelector(getUserAuthData);

	useEffect(() => {
		if (authData?.id === data?.userId) {
			dispatch(ProfileActions.setIsMe(true));
		}
	}, []);

	const onEditClickHandler = useCallback(() => {
		if (isMe) {
			dispatch(ProfileActions.setReadOnly(false));
		}
	}, [isMe]);

	const onSaveClickHandler = useCallback(() => {
		if (!readOnly && isMe) {
			dispatch(updateProfileData({ profileId: data.userId! }));
		}
	}, [readOnly, data.userId, isMe]);

	const onCancelEditClickHandler = useCallback(() => {
		if (!readOnly && isMe) {
			dispatch(ProfileActions.cancelEdit());
		}
	}, [readOnly]);

	return (
		<div className={classNames(cls.ProfileHeader, {}, [className])}>
			<div className={cls.ProfileHeader__row}>
				<div className={cls.ProfileHeader__leftBtn}>
					<Button
						className={classNames(
							cls.ProfileHeader__cancel,
							{
								[cls.ProfileHeader__cancel_hide]: readOnly,
							},
							[],
						)}
						theme={ButtonTheme.OUTLINE}
						onClick={!readOnly ? onCancelEditClickHandler : undefined}
					>
						Cancel
					</Button>
				</div>
				<Avatar className={cls.ProfileHeader__avatar} size={128} src={data.avatar} />
				<div className={cls.ProfileHeader__rightBtn}>
					<Button
						className={cls.ProfileHeader__editAndSave}
						theme={ButtonTheme.OUTLINE}
						onClick={readOnly ? onEditClickHandler : onSaveClickHandler}
					>
						{readOnly ? "Edit" : "Save"}
					</Button>
				</div>
			</div>
		</div>
	);
};
