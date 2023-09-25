import { getSearch } from '$lib/services.js';

export const load = async ({ url }) => {
	const query = (url.searchParams.get('q') || '').replace(/\s+/g, '');

	const filters = url.searchParams.get('filters') || '';

	console.log('search page ran');

	return {
		contents: getSearch({ query, filters })
	};
};
