import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
	container?: HTMLElement;
	children: ReactNode;
}

export const Portal: FC<PortalProps> = ({ children, container = document.body }) => createPortal(children, container);
