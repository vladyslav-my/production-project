import { FC, useCallback, useState } from "react";
import cls from "./AddComment.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";
import { Icon } from "@/shared/ui/Icon";
import Send from "@/shared/assets/send.svg";
import { Button } from "@/shared/ui/Buttons";
import { useUpdateArticleCommentsMutation } from "@/entities/Comment/model/api/commentsApi";

interface AddCommentProps {
	className?: string;
}

export const AddComment: FC<AddCommentProps> = ({ className }) => {
	const [comment, setComment] = useState<string>("");

	const onChangeHandler = useCallback((value: string) => {
		setComment(value);
	}, []);
	

	const [ updateArticle ] = useUpdateArticleCommentsMutation({

	});

	const onClickHandler = useCallback(() => {
		updateArticle({ userId: 1, articleId: 1, comment: "New comment" });
	}, []);

	return (
		<div className={classNames(cls.AddComment, {}, [className])}>
			<Input className={cls.AddComment__input} value={comment} onChange={onChangeHandler} />
			<Button onClick={onClickHandler}>
				<Icon className={cls.AddComment__icon} width={32} height={32} Svg={Send} />
			</Button>
		</div>
	);
};