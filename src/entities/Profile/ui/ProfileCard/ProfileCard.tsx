import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import cls from "./ProfileCard.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "entities/Profile/model/types/Profile";
import { Loader } from "shared/ui/Loader";

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	error?: string;
	readOnly?: boolean;
	isLoading?: boolean;
	onFirstNameChange?: () => void;
	onLastNameChange?: () => void;
	onAgeChange?: () => void;
	onAvatarChange?: () => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({ 
	className,
	data,
	readOnly = true,
	isLoading,
	error,
	onFirstNameChange,
	onLastNameChange,
	onAgeChange,
	onAvatarChange
}) => {

	if (error) {
		return <div>error</div>;
	}

	if (isLoading) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className])}>
				<Loader />
			</div>
		);
	}


	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<Input onChange={onFirstNameChange} readOnly={readOnly} externalPlaceholder="First name" value={data?.first} />
			<Input onChange={onLastNameChange} readOnly={readOnly} externalPlaceholder="Last name" value={data?.lastname} />
			<Input onChange={onAgeChange} readOnly={readOnly} externalPlaceholder="Age" value={data?.age?.toString()} />
			<Input onChange={onAvatarChange} readOnly={readOnly} externalPlaceholder="Avatar url" value={data?.avatar} />
		</div>
	);
};