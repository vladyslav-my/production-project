import { FC, useCallback } from "react";
import cls from "./Counter.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

interface CounterProps {
	className?: string
}

export const Counter: FC<CounterProps> = ({ className }) => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);

	const onDecrement = useCallback(() => {
		dispatch(counterActions.decrement());
	}, []);
	
	const onIncrement = useCallback(() => {
		dispatch(counterActions.increment());
	}, []);

	return (
		<div className={classNames(cls.Counter, {}, [className])}>
			<button data-testid="dec" onClick={onDecrement} className={cls.dec}>-</button>
			<div data-testid="result" className={cls.result}>{counterValue}</div>
			<button data-testid="inc" onClick={onIncrement} className={cls.inc}>+</button>
		</div>
	);
};
