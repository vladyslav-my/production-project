import { MutableRefObject, useEffect } from "react";

interface IUseSmartHeader {
	ref: MutableRefObject<any>;
	className: string;
	condition: any;
	defaultOffset?: number;
}

export const useSmartHeader = ({
	ref, className, condition, defaultOffset = 0,
}: IUseSmartHeader) => {
	useEffect(() => {
		let lastScroll = 0;

		const scrollPosition = () => window.scrollY;
		const containHide = () => ref.current.classList.contains(className);
		const smartHeader = () => {
			if (scrollPosition() > lastScroll && scrollPosition() > defaultOffset && !containHide()) {
				ref.current.classList.add(className);
			} else if (scrollPosition() < lastScroll && containHide()) {
				ref.current.classList.remove(className);
			}

			lastScroll = scrollPosition();
		};

		if (condition) {
			window.addEventListener("scroll", smartHeader);
		}

		return () => {
			window.removeEventListener("scroll", smartHeader);
		};
	}, [className, condition, defaultOffset, ref]);
};
