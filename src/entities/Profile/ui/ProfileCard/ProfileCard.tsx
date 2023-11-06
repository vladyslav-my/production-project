import { FC } from "react";
import { CountryDropDown } from "@/entities/Country";
import { CurrencyDropDown } from "@/entities/Currency";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";
import { Loader } from "@/shared/ui/Loader";
import { IProfile } from "../../model/types/IProfile";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
	className?: string;
	data?: IProfile;
	error?: string;
	readOnly?: boolean;
	isLoading?: boolean;
	onFirstNameChange?: () => void;
	onLastNameChange?: () => void;
	onAgeChange?: () => void;
	onAvatarChange?: () => void;
	onCurrencyChange?: () => void;
	onCountryChange?: () => void;
	onChangeCity?: () => void;
	onChangeUsername?: () => void;
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
	onCountryChange,
	onChangeCity,
	onChangeUsername,
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
						label="Name"
						readOnly={readOnly}
						value={data?.first}
						onChange={onFirstNameChange}
					/>
					<Input
						className={cls.ProfileCard__lastNameInput}
						label="Last name"
						readOnly={readOnly}
						value={data?.lastname}
						onChange={onLastNameChange}
					/>
					<Input
						className={cls.ProfileCard__ageInput}
						label="Age"
						readOnly={readOnly}
						value={data?.age?.toString()}
						onChange={onAgeChange}
					/>
					<Input
						className={cls.ProfileCard__cityInput}
						label="City"
						readOnly={readOnly}
						value={data?.city}
						onChange={onChangeCity}
					/>
				</div>
				<div className={cls.ProfileCard__rightColumn}>
					<Input
						className={cls.ProfileCard__usernameInput}
						label="Username"
						readOnly={readOnly}
						value={data?.username}
						onChange={onChangeUsername}
					/>
					<Input
						className={cls.ProfileCard__avatarURLInput}
						label="Avatar URL"
						readOnly={readOnly}
						value={data?.avatar}
						onChange={onAvatarChange}
					/>
					<CurrencyDropDown
						className={cls.ProfileCard__currencyDropDown}
						label="Currency"
						readOnly={readOnly}
						value={data?.currency}
						onChange={onCurrencyChange}
					/>
					<CountryDropDown
						className={cls.ProfileCard__countryDropDown}
						label="Country"
						readOnly={readOnly}
						value={data?.country}
						onChange={onCountryChange}
					/>
				</div>
			</div>
		</div>
	);
};
