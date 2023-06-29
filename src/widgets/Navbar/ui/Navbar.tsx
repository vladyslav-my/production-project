import cls from "./Navbar.module.scss";

import { FC, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button";
import { Modal } from "shared/ui/Modal";
import { Portal } from "shared/ui/Portal";
import { LoginModal } from "features/AuthByUsername";

interface NavBarProps {
    className?: string
}

export const Navbar: FC<NavBarProps> = ({ className }) => {
	const {t} = useTranslation("navbar");
	const [modalOpenned, setModalOpenned] = useState(false);

	const onToggleModal = useCallback(() => {
		setModalOpenned(prev => !prev);
	}, []); 


	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button onClick={onToggleModal} theme={ThemeButton.OUTLINE}>toggle modal</Button>
			<Portal>
				<LoginModal oppened={modalOpenned} onToggle={onToggleModal}></LoginModal>
			</Portal>
		</div>
	);
};
