import { getRelatedContent, getVideoComments, getVideoDetails } from '$lib/services';

export const load = async ({ params }) => {
	const { videoId } = params;

	return {
		details: getVideoDetails(videoId),

		streamed: {
			comments: getVideoComments(videoId),
			relatedContent: getRelatedContent(videoId)
		}
	};
};
