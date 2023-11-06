import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";
import cls from "./Counter.module.scss";

interface CounterProps {
	className?: string;
}

const Counter: FC<CounterProps> = ({ className }) => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);

	const onDecrement = useCallback(() => {
		dispatch(counterActions.decrement());
	}, [dispatch]);

	const onIncrement = useCallback(() => {
		dispatch(counterActions.increment());
	}, [dispatch]);

	return (
		<div className={classNames(cls.Counter, {}, [className])}>
			<button className={cls.dec} data-testid="dec" onClick={onDecrement}>
				-
			</button>
			<div className={cls.result} data-testid="result">
				{counterValue}
			</div>
			<button className={cls.inc} data-testid="inc" onClick={onIncrement}>
				+
			</button>
		</div>
	);
};

export default Counter;
