import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import Star from "@/shared/assets/icons/star.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Icon } from "@/shared/ui/Icon";
import { useGetArticleRatingQuery, useWriteArticleRatingMutation } from "../../api/ratingApi";
import { RatingModal } from "../RatingModal/RatingModal";
import cls from "./Rating.module.scss";

interface RatingProps {
	className?: string;
	articleId: number;
}

const ratingNumbers = [1, 2, 3, 4, 5];

export const Rating: FC<RatingProps> = ({ className, articleId }) => {
	const user = useSelector(getUserAuthData);

	const [writeArticleRating] = useWriteArticleRatingMutation();
	const { data, isLoading } = useGetArticleRatingQuery({ articleId, userId: 1 }); // hard

	const [hoverRating, setHoverRating] = useState(0);
	const [currentRating, setCurrentRating] = useState(0);
	const [isOpennedModal, setIsOpennedModal] = useState(false);

	useEffect(() => {
		setCurrentRating(data?.stars || 0);
	}, [data]);

	const onMouseOverHandler = (RatingNumber: number) => () => {
		if (!data?.stars) {
			setHoverRating(RatingNumber);
		}
	};

	const onMouseOutHandler = () => {
		if (!data?.stars) {
			setHoverRating(0);
		}
	};

	const onClickHandler = (ratingNumber: number) => () => {
		if (!data?.stars) {
			setCurrentRating(ratingNumber);
			setIsOpennedModal(true);
		}
	};

	const onSendHandler = (feedback?: string) => () => {
		writeArticleRating({
			articleId, userId: 1, stars: currentRating, feedback,
		}); // hard
		setIsOpennedModal(false);
	};

	if (isLoading) {
		return (
			<div>
				Loading
			</div>
		);
	}

	return (
		<div className={classNames(cls.Rating, {}, [className])}>
			{data ? (
				<h2>
					Дякую за оцінку
				</h2>
			) : (
				<h2>
					Оцініть статтю
				</h2>
			)}
			<div className={cls.stars}>
				{
					ratingNumbers.map((ratingNumber) => (
						<Icon
							Svg={Star}
							className={classNames(cls.stars__item, {
								[cls.stars__item_active]: ratingNumber <= hoverRating || ratingNumber <= currentRating,
							}, [])}
							height={30}
							key={ratingNumber}
							width={32}
							onClick={onClickHandler(ratingNumber)}
							onMouseOut={onMouseOutHandler}
							onMouseOver={onMouseOverHandler(ratingNumber)}
						/>
					))
				}
			</div>
			<RatingModal oppened={isOpennedModal} onSend={onSendHandler} onToggle={setIsOpennedModal} />
		</div>

	);
};
