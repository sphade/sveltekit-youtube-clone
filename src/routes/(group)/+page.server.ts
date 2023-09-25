import { getHomePage } from '$lib/services.js';
import { fail, redirect } from '@sveltejs/kit';
export const load = async () => {
	console.log('home page ran');
	return {
		contents: getHomePage()
	};
};

export const actions = {
	search: async ({ request }) => {
		const data = await request.formData();
		const query = data.get('q');
		if (!query) {
			return fail(400, {
				error: 'you have an empty search'
			});
		}
		throw redirect(301, `/result?q=${query}`);
	}
};
