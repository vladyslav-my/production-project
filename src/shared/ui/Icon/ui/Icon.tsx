import { FC } from "react";
import cls from "./Icon.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "../../Buttons";


type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "className">

interface IconProps extends SvgProps {
	Svg: React.FC<React.SVGProps<SVGSVGElement>>;
	className?: string;
	clickable?: boolean;
	width?: number;
	height?: number;
}



export const Icon: FC<IconProps> = ({ className, Svg, width, height, ...props }) => {  

	return (
		<Svg width={width && `${width / 16}em`} height={height && `${height / 16}em`} className={classNames(cls.Icon, {}, [className])} {...props}/>
	);
};