import { FC, useState } from "react";
import cls from "./RatingModal.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Modal } from "@/shared/ui/Modal";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Buttons";
import { useWriteArticleRatingMutation } from "../../api/ratingApi";

interface RatingModalProps {
	className?: string;
	oppened: boolean;
	onToggle: (oppened: boolean) => void;
	onSend: (feedback?: string) => () => void;
}



export const RatingModal: FC<RatingModalProps> = ({ className, oppened, onToggle, onSend }) => {
	const [feedbackText, setFeedbackText] = useState<string>("");

	const onChangeFeedbackHandler = (value: string) => {
		setFeedbackText(value);
	};

	return (
		<Modal className={classNames(cls.RatingModal, {}, [className])} lazy oppened={oppened} onToggle={onToggle}>
			<h2 >Залиште свій відгук про прочитану статтю, це допоможе нам покращити якість</h2>
			<Input onChange={onChangeFeedbackHandler} value={feedbackText} label="Feedback" />
			<Button onClick={onSend(feedbackText)}>Відправити</Button>
			<Button onClick={onSend()}>Закрити</Button>
		</Modal>
	);
};