import { FC } from "react";
import cls from "./ProfileCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";
import { Profile } from "@/entities/Profile/model/types/Profile";
import { Loader } from "@/shared/ui/Loader";
import { CurrencySelect } from "@/entities/Currency";
import { CountrySelect } from "@/entities/Country";

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
	onCurrencyChange?: () => void;
	onCountryChange?: () => void;
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
	onAvatarChange,
	onCurrencyChange,
	onCountryChange
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
			<Input onChange={onAvatarChange} readOnly={readOnly} externalPlaceholder="City" value={data?.city} />
			<CurrencySelect onChange={onCurrencyChange} readOnly={readOnly} externalPlaceholder="Currency" value={data?.currency} />
			<CountrySelect onChange={onCountryChange} readOnly={readOnly} externalPlaceholder="Country" value={data?.country} />
		</div>
	);
};