import React, { FC, ReactNode, useState } from "react";
import cls from "./Modal.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ModalProps {
	className?: string,
	oppened: boolean,
	onToggle?: () => void
	children: ReactNode,
}

export const Modal: FC<ModalProps> = ({ className, oppened, children, onToggle }) => {
	const mods = {
		[cls.oppened]: oppened,
		[cls.clossed]: !oppened
	};
	return (
		<div onClick={onToggle} className={classNames(cls.Modal, mods, [className])}>
			<div className={classNames(cls.wrapper, {}, [cls.scalled])}>
				{ children }
			</div>
		</div>
	);
};