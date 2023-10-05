import { FC, useCallback, useState } from "react";
import cls from "./AddArticleComment.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input/Input";
import { Icon } from "@/shared/ui/Icon";
import Send from "@/shared/assets/send.svg";
import { Button } from "@/shared/ui/Buttons";
import { useUpdateArticleCommentsMutation } from "@/entities/Comment/model/api/commentsApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";

interface AddArticleCommentProps {
	className?: string;
	articleId: number | string;
}

export const AddArticleComment: FC<AddArticleCommentProps> = ({ className, articleId }) => {
	const authData = useSelector(getUserAuthData);
	const [comment, setComment] = useState<string>("");

	const onChangeHandler = useCallback((value: string) => {
		setComment(value);
	}, []);
	

	const [ updateArticle ] = useUpdateArticleCommentsMutation();
	
	const onClickHandler = useCallback(() => {
		//@ts-ignore
		authData && updateArticle({ userId: authData.id || authData, articleId, comment });
		setComment("");
	}, [comment, articleId, authData]);

	return (
		<div className={classNames(cls.AddArticleComment, {}, [className])}>
			<Input className={cls.AddArticleComment__input} value={comment} onChange={onChangeHandler} />
			<Button onClick={onClickHandler}>
				<Icon className={cls.AddArticleComment__icon} width={32} height={32} Svg={Send} />
			</Button>
		</div>
	);
};