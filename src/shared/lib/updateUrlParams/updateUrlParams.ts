export function updateUrlParams(paramsObject: Record<string, any>): void {
	const urlParams = new URLSearchParams(window.location.search);

	Object.keys(paramsObject).forEach((key) => {
		if (paramsObject[key]) {
			urlParams.set(key, paramsObject[key].toString());
		} else {
			urlParams.delete(key);
		}
	});

	const newUrl = `${window.location.pathname}?${urlParams.toString()}`;

	window.history.replaceState({}, "", newUrl);
}
