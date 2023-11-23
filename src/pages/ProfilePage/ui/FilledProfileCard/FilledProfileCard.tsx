import { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { Currency } from "@/entities/Currency";
import {
	ProfileActions, ProfileCard, getProfileFormData, getProfileIsLoading, getProfileReadOnly, getProfileValidateError,
} from "@/entities/Profile";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import cls from "./FilledProfileCard.module.scss";

interface FilledProfileCardProps {
	className?: string
}

export const FilledProfileCard: FC<FilledProfileCardProps> = ({ className }) => {
	const dispatch = useAppDispatch();

	const readOnly = useSelector(getProfileReadOnly);
	const formData = useSelector(getProfileFormData);
	const isLoading = useSelector(getProfileIsLoading);

	const onFirstNameChange = useCallback(
		(value?: string) => {
			dispatch(ProfileActions.setFormData({ first: value }));
		},
		[dispatch],
	);

	const onLastNameChange = useCallback(
		(value?: string) => {
			dispatch(ProfileActions.setFormData({ lastname: value }));
		},
		[dispatch],
	);

	const onAgeChange = useCallback(
		(value?: string) => {
			dispatch(ProfileActions.setFormData({ age: Number(value) }));
		},
		[dispatch],
	);

	const onAvatarChange = useCallback(
		(value?: string) => {
			dispatch(ProfileActions.setFormData({ avatar: value }));
		},
		[dispatch],
	);

	const onCurrencyChange = useCallback(
		(value?: Currency) => {
			dispatch(ProfileActions.setFormData({ currency: value }));
		},
		[dispatch],
	);

	const onChangeUsername = useCallback(
		(value?: string) => {
			dispatch(ProfileActions.setFormData({ username: value }));
		},
		[dispatch],
	);

	const onChangeCity = useCallback(
		(value?: string) => {
			dispatch(ProfileActions.setFormData({ city: value }));
		},
		[dispatch],
	);

	return (
		<ProfileCard
			className={classNames(cls.FilledProfileCard, {}, [className])}
			data={formData}
			readOnly={readOnly}
			isLoading={isLoading}
			onAgeChange={onAgeChange}
			onAvatarChange={onAvatarChange}
			onCurrencyChange={onCurrencyChange}
			onFirstNameChange={onFirstNameChange}
			onLastNameChange={onLastNameChange}
			onChangeUsername={onChangeUsername}
			onChangeCity={onChangeCity}
		/>
	);
};
