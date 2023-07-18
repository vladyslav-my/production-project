import { FC, useCallback } from "react";
import cls from "./ProfileHeader.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ThemeButton } from "@/shared/ui/Button";
import { useSelector } from "react-redux";
import { ProfileActions } from "@/entities/Profile/model/slice/ProfileSlice";
import { getProfileReadOnly } from "@/entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly";
import { updateProfileData } from "@/entities/Profile/model/services/updateProfileData/updateProfileData";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

interface ProfileHeaderProps {
	className?: string
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const readOnly = useSelector(getProfileReadOnly);

	const onEditClick = useCallback(() => {
		dispatch(ProfileActions.setReadOnly(false));
		
	}, [dispatch]);

	const onSaveClick = useCallback(() => {
		dispatch(ProfileActions.setReadOnly(true));
		dispatch(updateProfileData());
	}, [dispatch]);

	const onCancelEditClick = useCallback(() => {
		dispatch(ProfileActions.cancelEdit());
	}, [dispatch]);

	return (
		<div className={classNames(cls.ProfileHeader, {}, [className])}>
			{readOnly 
				?
				<Button onClick={onEditClick} theme={ThemeButton.OUTLINE}>Edit</Button>
				:
				<>
					<Button onClick={onSaveClick} theme={ThemeButton.OUTLINE}>Save</Button>
					<Button onClick={onCancelEditClick} theme={ThemeButton.OUTLINE}>Cancel</Button>
				</>
			} 
			

		</div>
	);
};