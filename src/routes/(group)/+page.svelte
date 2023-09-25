<script lang="ts">
	export let data;
	import VideoCard from '$lib/components/VideoCard.svelte';
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-16">
	{#each data.contents as { type, video }}
		{#if type === 'video'}
			<VideoCard
				avatar={video.author.avatar?.[0].url}
				publishedTimeText={video.publishedTimeText}
				thumbnail={video.thumbnails[0].url}
				title={video.title}
				videoId={video.videoId}
				views={video.stats.views}
				channelName={video.author.title}
			/>
		{/if}
	{/each}
</div>
