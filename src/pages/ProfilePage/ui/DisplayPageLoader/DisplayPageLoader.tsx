import { FC } from "react";
import { useSelector } from "react-redux";
import { getProfileIsLoading } from "@/entities/Profile";
import { PageLoader } from "@/shared/ui/PageLoader";

interface DisplayPageLoaderProps {
	className?: string
}

export const DisplayPageLoader: FC<DisplayPageLoaderProps> = ({ className }) => {
	const isLoading = useSelector(getProfileIsLoading);

	if (isLoading) {
		return (
			<PageLoader className={className} />
		);
	}

	return null;
};
