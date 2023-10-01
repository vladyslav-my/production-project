import { FC, useCallback } from "react";
import cls from "./ProfileHeader.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Buttons";
import { useSelector } from "react-redux";
import { ProfileActions } from "@/entities/Profile/model/slice/ProfileSlice";
import { getProfileReadOnly } from "@/entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly";
import { updateProfileData } from "@/entities/Profile/model/services/updateProfileData/updateProfileData";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar } from "@/shared/ui/Avatar";

interface ProfileHeaderProps {
	className?: string
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const readOnly = useSelector(getProfileReadOnly);

	const onEditClickHandler = useCallback(() => {
		dispatch(ProfileActions.setReadOnly(false));
		
	}, [dispatch]);

	const onSaveClickHandler = useCallback(() => {
		dispatch(ProfileActions.setReadOnly(true));
		dispatch(updateProfileData());
	}, [dispatch]);

	const onCancelEditClickHandler = useCallback(() => {
		dispatch(ProfileActions.cancelEdit());
	}, [dispatch]);

	return (
		<div className={classNames(cls.ProfileHeader, {}, [className])}>
			<div className={cls.ProfileHeader__row}>
				<div className={cls.ProfileHeader__leftBtn}>
					<Button onClick={readOnly ? undefined : onCancelEditClickHandler} className={classNames(cls.ProfileHeader__cancel, {
						[cls.ProfileHeader__cancel_hide]: !!readOnly
					}, [])} theme={ButtonTheme.OUTLINE}>Cancel</Button>
				</div>
				<Avatar className={cls.ProfileHeader__avatar} size={128}/>
				<div className={cls.ProfileHeader__rightBtn}>
					<Button 
						className={cls.ProfileHeader__editAndSave}
						onClick={readOnly ? onEditClickHandler : onSaveClickHandler}
						theme={ButtonTheme.OUTLINE}
					>
						{readOnly ? "Edit" : "Save"}
					</Button>
				</div>

				
			</div>
			{/* {readOnly 
				?
				<Button onClick={onEditClick} theme={ButtonTheme.OUTLINE}>Edit</Button>
				:
				<>
					<Button onClick={onSaveClick} theme={ButtonTheme.OUTLINE}>Save</Button>
					<Button onClick={onCancelEditClick} theme={ButtonTheme.OUTLINE}>Cancel</Button>
				</>
			}  */}
		</div>
	);
};