import { FC } from "react";
import cls from "./LoginModal.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui/Modal";
import { Button } from "shared/ui/Button";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
	className?: string,
	oppened: boolean,
	onToggle: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, oppened, onToggle }) => {
	return (
		<Modal 
			className={classNames(cls.LoginModal, {}, [className])}
			oppened={oppened} 
			onToggle={onToggle}
			lazy
		>
			<LoginForm/>
		</Modal>
	);
};