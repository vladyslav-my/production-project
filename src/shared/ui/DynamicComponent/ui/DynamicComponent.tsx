import { FC, HTMLAttributes, ReactNode } from "react";

interface DynamicComponentProps extends HTMLAttributes<HTMLElement> {
	Component: any;
	children: ReactNode;
}

const DynamicComponent: FC<DynamicComponentProps> = ({ Component, children, ...otherProps }) => {
	return (
		<Component {...otherProps}>{children}</Component>
	);
};

export default DynamicComponent;
