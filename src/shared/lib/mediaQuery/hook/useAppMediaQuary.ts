import { useMediaQuery, MediaQueryAllQueryable, MediaQueryMatchers } from "react-responsive";
import { Devices } from "../types/Devices";

type MediaQuerySettings = Partial<MediaQueryAllQueryable & {
	query?: string;
	minHeight?: number | string | Devices;
	maxHeight?: number | string | Devices;
}>;




export const useAppMediaQuary = (
	settings: MediaQuerySettings,
	device?: MediaQueryMatchers,
	onChange?: ((_: boolean) => void) | undefined,
) => {
	useMediaQuery(settings, device, onChange);
};