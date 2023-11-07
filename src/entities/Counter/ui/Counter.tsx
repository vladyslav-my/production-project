import { FC, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useCounterActions } from "../model/slice/counterSlice";
import cls from "./Counter.module.scss";

interface CounterProps {
	className?: string;
}

const Counter: FC<CounterProps> = ({ className }) => {
	const counterValue = useCounterValue();
	const { decrement, increment } = useCounterActions();

	const onDecrement = useCallback(() => {
		decrement();
	}, [decrement]);

	const onIncrement = useCallback(() => {
		increment();
	}, [increment]);

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
