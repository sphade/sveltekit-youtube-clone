<script lang="ts">
	import { formatLargeNumber } from '$lib/utils';

	export let title: string;
	export let publishedTimeText: string;
	export let views: number;
	export let videoId: string;
	export let thumbnail: string;
	export let channelName: string;
	export let avatar: string;
</script>

<a href={`/${videoId}`}>
	<div class="relative">
		<div
			class="bg-black/80 absolute bottom-1 right-1 text-xs text-white font-semibold rounded px-1"
		>
			10:40
		</div>

		<img
			src={thumbnail}
			alt="thumbnail"
			class="sm:h-[208px] h-[250px] w-full object-cover bg-gray-100 rounded-2xl"
		/>
	</div>
	<div class="flex gap-3 mt-3">
		<img src={avatar} class="w-9 h-9 rounded-full bg-gray-100" alt="" />
		<div>
			<h3 class="capitalize font-medium">{title}</h3>
			<p class="text-gray-600 text-sm capitalize mt-1">{channelName}</p>
			<p class="text-gray-600 text-sm">
				<span> {formatLargeNumber(views)} views </span>.
				<span> {publishedTimeText} </span>
			</p>
		</div>
	</div>
</a>
