import { X_RapidAPI_Key } from '$env/static/private';
import { error } from '@sveltejs/kit';
import Axios from 'axios';

const axios = Axios.create({
	baseURL: 'https://youtube138.p.rapidapi.com/',
	headers: {
		'X-RapidAPI-Key': X_RapidAPI_Key,
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	},
	params: {
		hl: 'en',
		gl: 'US'
	}
});
export const getHomePage = async () => {
	try {
		const result = await axios('home/');

		return result.data.contents;
	} catch (e) {
		console.log('🚀 ~ file: services.ts:23 ~ getHomePage ~ e:', e.message);
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};

export const getSearch = async ({ query, filters }: { query: string; filters: string }) => {
	try {
		const result = await axios('search/', {
			params: {
				q: query,
				cursor: filters
			}
		});

		return result.data;
	} catch (error) {
		console.error(error);
	}
};
export const getVideoDetails = async (id: string) => {
	try {
		const result = await axios('video/details/', {
			params: {
				id
			}
		});
		return result.data;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};
export const getVideoComments = async (id: string) => {
	try {
		const result = await axios('video/comments/', {
			params: {
				id
			}
		});

		return result.data;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};
export const getRelatedContent = async (id: string) => {
	try {
		const result = await axios('video/related-contents/', {
			params: {
				id
			}
		});

		return result.data.contents;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};
