import {
	DependencyList, FC, useCallback, useEffect, useRef,
} from "react";
import { TriggerFetch } from "../ui/TriggerFetch";

interface IUseTriggerFetch {
	condition?: boolean;
	action: any;
}

export const useTriggerFetch = ({ condition, action }: IUseTriggerFetch, [...args]: DependencyList): FC => {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const { current } = ref;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && condition) {
					action();
				}
			});
		});

		if (current) {
			observer.observe(current);
		}

		return () => {
			if (current) {
				observer.unobserve(current);
			}
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [action, condition, ref, ...args]);

	const Trigger = useCallback(() => {
		if (condition) {
			return <TriggerFetch ref={ref} />;
		}

		return null;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [action, condition, ref]);

	return Trigger;
};
