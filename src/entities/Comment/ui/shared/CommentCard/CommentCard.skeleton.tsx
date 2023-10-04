import { FC } from "react";
import cls from "./CommentCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Comment } from "../../../model/types/Comment";
import { Skeleton } from "@/shared/layouts/Skeleton";


interface CommentCardProps {
	className?: string;
}

export const CommentCard: FC<CommentCardProps> = ({ className }) => {
	return (
		<div className={classNames(cls.CommentCard, {}, [className])}>
			<Skeleton className={cls.CommentCard__avatar} circle="100%" height={32} width={32} />
			<div className={cls.CommentCard__comment}>
				<Skeleton className={cls.CommentCard__avatar} height={22} width="95%" circle={8} />
				<Skeleton className={cls.CommentCard__avatar} height={22} width="90%" circle={8} />
				<Skeleton className={cls.CommentCard__avatar} height={22} width="98%" circle={8} />
			</div>
		</div>
	);
};

