import { FC } from "react";
import cls from "./CommentCard.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Comment } from "../../../model/types/Comment";


interface CommentCardProps {
	className?: string;
	data: Comment;
}

export const CommentCard: FC<CommentCardProps> = ({ className, data }) => {
	return (
		<div className={classNames(cls.CommentCard, {}, [className])}>
			<Avatar className={cls.CommentCard__avatar} size={32} src={data.user.avatar} />
			<p className={cls.CommentCard__comment}>{data.comment}</p>
		</div>
	);
};

