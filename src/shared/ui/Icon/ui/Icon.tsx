import { FC, SVGProps } from "react";
import { classNames } from "../../../lib/classNames/classNames";
import cls from "./Icon.module.scss";

type SvgProps = Omit<SVGProps<SVGSVGElement>, "className">;

interface IconProps extends SvgProps {
	Svg: FC<SVGProps<SVGSVGElement>>;
	className?: string;
}

export const Icon: FC<IconProps> = ({ className, Svg, ...props }) => (
	<Svg className={classNames(cls.Icon, {}, [className])} {...props} />
);
