import { FC, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateArticleCommentsMutation } from "@/entities/Comment";
import { getUserAuthData } from "@/entities/User";
import Send from "@/shared/assets/send.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Buttons";
import { Icon } from "@/shared/ui/Icon";
import { Input } from "@/shared/ui/Input/Input";
import cls from "./AddArticleComment.module.scss";

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

	const [updateArticle] = useUpdateArticleCommentsMutation();

	const onClickHandler = useCallback(() => {
		if (authData) {
			// @ts-ignore
			updateArticle({ userId: authData.id || authData, articleId, comment });
		}
		setComment("");
	}, [comment, articleId, authData, updateArticle]);

	return (
		<div className={classNames(cls.AddArticleComment, {}, [className])}>
			<Input className={cls.AddArticleComment__input} value={comment} onChange={onChangeHandler} />
			<Button onClick={onClickHandler}>
				<Icon
					Svg={Send}
					className={cls.AddArticleComment__icon}
					height={32}
					width={32}
				/>
			</Button>
		</div>
	);
};
