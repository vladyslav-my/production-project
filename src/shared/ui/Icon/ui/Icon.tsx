import { FC } from "react";
import cls from "./Icon.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "../../Button";


type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "className">

interface IconProps extends SvgProps {
	Svg: React.FC<React.SVGProps<SVGSVGElement>>;
	className?: any | classNameType;
	clickable?: boolean;
	onClick?: () => void;
	width?: number;
	height?: number;
}


interface classNameType {
	icon?: string;
	button?: string;
}


export const Icon: FC<IconProps> = ({ className, Svg, width, height, clickable, onClick, ...props }) => {  
	if (clickable) {
		return (
			<Button className={className?.parent} onClick={onClick}>
				<Svg
					//@ts-ignore
					width={`${width / 16}em`} 
					//@ts-ignore
					height={`${height / 16}em`} 
					className={classNames(cls.Icon, {}, [className?.icon])} 
					{...props}
				/>
			</Button>
		);
	}

	return (
		<Svg width={width && `${width / 16}em`} height={height && `${height / 16}em`} className={classNames(cls.Icon, {}, [className])} {...props}/>
	);
};