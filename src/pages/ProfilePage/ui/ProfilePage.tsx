import { FC } from "react";
import cls from "./ProfilePage.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

interface ProfilePageProps {
   className?: string
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
	return (
		<div className={classNames(cls.ProfilePage, {}, [className])}>
			Profile
		</div>
	);
};

export default ProfilePage;