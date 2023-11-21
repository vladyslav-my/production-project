import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import {
	getProfileReadOnly, updateProfileData, ProfileActions, getProfileFormData, getProfileIsMe,
	getProfileData,
} from "@/entities/Profile";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "@/shared/ui/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Buttons";
import cls from "./ProfileHeader.module.scss";

interface ProfileHeaderProps {
	className?: string;
	profileId: number;
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({ className, profileId }) => {
	const dispatch = useAppDispatch();
	const readOnly = useSelector(getProfileReadOnly);
	const isMe = useSelector(getProfileIsMe);
	const formData = useSelector(getProfileFormData);
	const data = useSelector(getProfileData);

	const onEditClickHandler = useCallback(() => {
		if (isMe) {
			dispatch(ProfileActions.setReadOnly(false));
		}
	}, [dispatch, isMe]);

	const onSaveClickHandler = useCallback(() => {
		if (!readOnly) {
			dispatch(ProfileActions.setReadOnly(true));
			dispatch(updateProfileData({ profileId: data.userId! }));
		}
	}, [readOnly, dispatch, data.userId]);

	const onCancelEditClickHandler = useCallback(() => {
		if (!readOnly) {
			dispatch(ProfileActions.cancelEdit());
		}
	}, [dispatch, readOnly]);

	return (
		<div className={classNames(cls.ProfileHeader, {}, [className])}>
			<div className={cls.ProfileHeader__row}>
				<div className={cls.ProfileHeader__leftBtn}>
					<Button
						className={classNames(
							cls.ProfileHeader__cancel,
							{
								[cls.ProfileHeader__cancel_hide]: !!readOnly,
							},
							[],
						)}
						theme={ButtonTheme.OUTLINE}
						onClick={!readOnly ? onCancelEditClickHandler : undefined}
					>
						Cancel
					</Button>
				</div>
				<Avatar className={cls.ProfileHeader__avatar} size={128} src={formData?.avatar} />
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
