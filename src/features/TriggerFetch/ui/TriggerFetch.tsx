import {	forwardRef } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./TriggerFetch.module.scss";

interface TriggerFetchProps {
	className?: string;
}

export const TriggerFetch = forwardRef<HTMLDivElement, TriggerFetchProps>(({ className }, ref) => {
	return (
		<div className={classNames(cls.TriggerFetch, {}, [className])} ref={ref} />
	);
});
