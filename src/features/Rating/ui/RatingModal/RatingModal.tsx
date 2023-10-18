import { FC, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Buttons";
import { Input } from "@/shared/ui/Input/Input";
import { Modal } from "@/shared/ui/Modal";
import { useWriteArticleRatingMutation } from "../../api/ratingApi";
import cls from "./RatingModal.module.scss";

interface RatingModalProps {
	className?: string;
	oppened: boolean;
	onToggle: (oppened: boolean) => void;
	onSend: (feedback?: string) => () => void;
}

export const RatingModal: FC<RatingModalProps> = ({
	className, oppened, onToggle, onSend,
}) => {
	const [feedbackText, setFeedbackText] = useState<string>("");

	const onChangeFeedbackHandler = (value: string) => {
		setFeedbackText(value);
	};

	return (
		<Modal
			className={classNames(cls.RatingModal, {}, [className])}
			lazy
			oppened={oppened}
			onToggle={onToggle}
		>
			<h2>
				Залиште свій відгук про прочитану статтю, це допоможе нам покращити якість
			</h2>
			<Input label="Feedback" value={feedbackText} onChange={onChangeFeedbackHandler} />
			<Button onClick={onSend(feedbackText)}>
				Відправити
			</Button>
			<Button onClick={onSend()}>
				Закрити
			</Button>
		</Modal>
	);
};
