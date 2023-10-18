import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Comment } from "../../../model/types/Comment";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
	className?: string;
	data: Comment;
}

export const CommentCard: FC<CommentCardProps> = ({ className, data }) => (
	<div className={classNames(cls.CommentCard, {}, [className])}>
		<Avatar className={cls.CommentCard__avatar} size={32} src={data.user.avatar} />
		<p className={cls.CommentCard__comment}>
			{data.comment}
		</p>
	</div>
);
