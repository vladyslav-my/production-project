import { FC } from "react";
import { RouteContainer } from "@/shared/layouts/RouteContainer";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AboutPage.module.scss";

interface AboutPageProps {
	className?: string;
}

const AboutPage: FC<AboutPageProps> = ({ className }) => {
	return (
		<RouteContainer className={classNames(cls.AboutPage, {}, [className])}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque atque iste, eaque quaerat dolorum aliquam tempora fugiat, neque eveniet voluptates doloribus fuga exercitationem obcaecati quae expedita ea quidem sequi, incidunt optio. Architecto deleniti ex vel eius. Nihil eaque earum atque facere dolor ea nisi quaerat culpa, animi accusantium, inventore assumenda consectetur cumque et eveniet necessitatibus dolorum doloremque ipsa nostrum quam corrupti impedit. Odit nostrum minus dolore officiis deserunt odio vero veritatis beatae mollitia esse natus eum, suscipit voluptatibus, non consequuntur aliquam excepturi accusantium optio incidunt, exercitationem ab voluptates! Odit suscipit similique et omnis magni architecto. Aspernatur et quo odit ex!
		</RouteContainer>
	);
};

export default AboutPage;
