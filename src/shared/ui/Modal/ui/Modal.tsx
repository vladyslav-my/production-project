import React, {
	FC, ReactNode, useEffect, useRef, useState,
} from "react";
import { Shell } from "../../../layouts/Shell";
import { classNames } from "../../../lib/classNames/classNames";
import { Portal } from "../../Portal";
import cls from "./Modal.module.scss";

interface ModalProps {
	className?: string;
	oppened: boolean;
	lazy?: boolean;
	onToggle: (oppened: boolean) => void;
	children: ReactNode;
}

export const Modal: FC<ModalProps> = ({
	className, oppened, lazy, onToggle, children,
}) => {
	const [isMounted, setIsMounted] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => {
		if (oppened) {
			setIsMounted(true);
		}

		if (!oppened) {
			timeoutRef.current = setTimeout(() => {
				setIsMounted(false);
			}, 300);
		}

		return () => {
			clearTimeout(timeoutRef.current);
		};
	}, [oppened]);

	const onCloseHandler = () => {
		onToggle(false);
		timeoutRef.current = setTimeout(() => {
			setIsMounted(false);
		}, 300);
	};

	const onClickShell = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const modalMods = {
		[cls.Modal_oppened]: oppened,
		[cls.Modal_clossed]: !oppened,
	};

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={classNames(cls.Modal, modalMods, [])} onClick={onCloseHandler}>
				<Shell
					className={classNames(cls.Modal__shell, {}, [cls.Modal__shell_animation, className])}
					onClick={onClickShell}
				>
					{children}
				</Shell>
			</div>
		</Portal>
	);
};
