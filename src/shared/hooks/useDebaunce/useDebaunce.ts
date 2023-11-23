import { useCallback, useRef } from "react";

export function useDebounce() {
	const timer = useRef<any>();

	const debaunced = useCallback((callback: () => void, delay: number) => {
		if (timer.current) {
			clearTimeout(timer.current);
		}
		timer.current = setTimeout(() => {
			callback();
		}, delay);
	}, []);

	return debaunced;
}
