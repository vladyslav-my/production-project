import { FC, Suspense } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Loader } from "@/shared/ui/Loader";
import { Modal } from "@/shared/ui/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import cls from "./LoginModal.module.scss";

interface LoginModalProps {
	className?: string;
	oppened: boolean;
	onToggle: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ className, oppened, onToggle }) => (
	<Modal
		className={classNames(cls.LoginModal, {}, [className])}
		lazy
		oppened={oppened}
		onToggle={onToggle}
	>
		<Suspense fallback={<Loader />}>
			<LoginFormAsync onToggle={onToggle} />
		</Suspense>
	</Modal>
);
