import { FC } from "react";
import { Skeleton } from "@/shared/layouts/Skeleton";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Comment } from "../../../model/types/Comment";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
	className?: string;
}

export const CommentCard: FC<CommentCardProps> = ({ className }) => (
	<div className={classNames(cls.CommentCard, {}, [className])}>
		<Skeleton circle="100%" className={cls.CommentCard__avatar} height={32} width={32} />
		<div className={cls.CommentCard__comment}>
			<Skeleton circle={8} className={cls.CommentCard__avatar} height={22} width="95%" />
			<Skeleton circle={8} className={cls.CommentCard__avatar} height={22} width="90%" />
			<Skeleton circle={8} className={cls.CommentCard__avatar} height={22} width="98%" />
		</div>
	</div>
);
