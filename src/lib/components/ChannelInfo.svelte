<script lang="ts">
	// import { formatLargeNumber } from "$lib/utils";

	export let name: string;
	export let subscribersText: string;
	export let avatar: string;
	export let likes: number;
</script>

<div class="flex my-5 items-center justify-between">
	<div class="flex items-center gap-5">
		<div class="flex items-center gap-3">
			<img src={avatar} class="w-10 h-10 rounded-full" alt="" />
			<div>
				<p class="font-medium capitalize">{name}</p>
				<p class="text-gray-700 text-xs">{subscribersText}</p>
			</div>
		</div>
		<button class="text-white text-sm bg-black font-medium rounded-full py-2 px-4">
			Subscribe
		</button>
	</div>

	<div class="flex gap-3 items-center">
		<div class="divide-x-2 bg-gray-100 rounded-full flex items-center overflow-hidden">
			<button class="hover:bg-gray-200 py-2 px-4 flex items-center gap-2">
				<img src="/icons/likeIcon.svg" class="" alt="" />
				<!-- <span class="text-sm font-medium">{formatLargeNumber(likes)}</span> -->
			</button>
			<button class="hover:bg-gray-200 py-2 px-4">
				<img src="/icons/dislikeIcon.svg" alt="" />
			</button>
		</div>
		<button class="hover:bg-gray-200 py-2 rounded-full bg-gray-100 px-4 flex items-center gap-2">
			<img src="/icons/shareIcon.svg" class="" alt="" />
			<span class="text-sm font-medium">share</span>
		</button>
		<button class="hover:bg-gray-200 p-2 rounded-full bg-gray-100 flex items-center gap-2">
			<img src="/icons/moreIcon.svg" class="" alt="" />
		</button>
	</div>
</div>
