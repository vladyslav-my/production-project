import { FC } from "react";
import cls from "./ProfileCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";
import { Profile } from "@/entities/Profile/model/types/Profile";
import { Loader } from "@/shared/ui/Loader";
import { CurrencyDropDown } from "@/entities/Currency";
import { CountryDropDown } from "@/entities/Country";
import { Shell } from "@/shared/layouts/Shell";
import { Button } from "@/shared/ui/Buttons";

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
			<div className={cls.ProfileCard__row}>
				<div className={cls.ProfileCard__leftColumn}>
					<Input 
						className={cls.ProfileCard__firstNameInput} 
						onChange={onFirstNameChange} 
						readOnly={readOnly}
						label="Name" 
						value={data?.first} 
					/>
					<Input 
						className={cls.ProfileCard__lastNameInput} 
						onChange={onLastNameChange} 
						readOnly={readOnly} 
						label="Last name" 
						value={data?.lastname} 
					/>
					<Input className={cls.ProfileCard__ageInput} 
						onChange={onAgeChange} 
						readOnly={readOnly} 
						label="Age" 
						value={data?.age?.toString()} 
					/>
					<Input 
						className={cls.ProfileCard__cityInput} 
						onChange={onAvatarChange} 
						readOnly={readOnly} 
						label="City"
						value={data?.city} 
					/>
				</div>
				<div className={cls.ProfileCard__rightColumn}>
					<Input className={cls.ProfileCard__usernameInput} 
						onChange={onAvatarChange} 
						readOnly={readOnly} 
						label="Username" 
						value={data?.username} 
					/>
					<Input className={cls.ProfileCard__avatarURLInput} 
						onChange={onAvatarChange} 
						readOnly={readOnly} 
						label="Avatar URL" 
						value={data?.avatar} 
					/>
					<CurrencyDropDown 
						className={cls.ProfileCard__currencyDropDown} 
						onChange={onCurrencyChange} 
						readOnly={readOnly} 
						label="Currency" 
						value={data?.currency} 
					/>
					<CountryDropDown 
						className={cls.ProfileCard__countryDropDown} 
						onChange={onCountryChange} 
						readOnly={readOnly} 
						label="Country" 
						value={data?.country} 
					/>
				</div>
			</div>
		</div>
	);
};