export function debounce(func, wait) {
	let timeout;

	return function executedFunction(...args) {
		const later = () => {
			timeout = null;

			func(...args);
		};
		clearTimeout(timeout);

		timeout = setTimeout(later, wait);
	};
}

export const combineData = (data, params) => {
	const obj = {};
	for (const property in params) {
		obj[property] = params[property];
	}
	return { ...data, ...obj };
};
