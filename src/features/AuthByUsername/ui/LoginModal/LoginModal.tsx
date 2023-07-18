import cls from "./LoginModal.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { FC, Suspense } from "react";
import { Modal } from "@/shared/ui/Modal";
import { Loader } from "@/shared/ui/Loader";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
	className?: string,
	oppened: boolean,
	onToggle?: () => void,
}

export const LoginModal: FC<LoginModalProps> = ({ className, oppened, onToggle }) => {
	return (
		<Modal 
			className={classNames(cls.LoginModal, {}, [className])}
			oppened={oppened} 
			lazy
			onToggle={onToggle}
		>
			<Suspense fallback={<Loader />}>
				<LoginFormAsync />
			</Suspense>
		</Modal>
	);
};