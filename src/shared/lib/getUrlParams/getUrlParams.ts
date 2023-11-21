export function getUrlParams(parameter: string): string | null {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(parameter);
}
