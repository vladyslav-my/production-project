import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import cls from "./Modal.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Portal } from "@/shared/ui/Portal";

interface ModalProps {
	className?: string,
	oppened: boolean,
	lazy?: boolean,
	onToggle?: () => void
	children: ReactNode,
}

export const Modal: FC<ModalProps> = ({ className, oppened, lazy, onToggle, children }) => {
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
	}, [oppened]);


	useEffect(() => {
		return () => {
			clearTimeout(timeoutRef.current);
		};
	}, []);

	const onCloseHandler = () => {
		onToggle && onToggle();
		timeoutRef.current = setTimeout(() => {
			setIsMounted(false);
		}, 300);
	};

	const onWrapperClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};
	
	const modalMods = {
		[cls.oppened]: oppened,
		[cls.clossed]: !oppened
	};

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div onClick={onCloseHandler} className={classNames(cls.Modal, modalMods, [className])}>
				<div onClick={onWrapperClick} className={classNames(cls.wrapper, {}, [cls.animation])}>
					{ children }
				</div>
			</div>
		</Portal>
	);
};