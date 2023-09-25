<script lang="ts">
  import { formatLargeNumber } from "$lib/utils";

  export let videoId: string;
  export let thumbnail: string;
  export let channelName: string;
  export let title: string;
  export let publishedTimeText: string;
  export let views: number;
</script>

<a href={`/${videoId}`} class="flex gap-2">
  <img src={thumbnail} class="h-[100px] rounded-lg" alt="" />
  <div class="text-xs text-gray-700 capitalize">
    <h1 class=" font-medium text-sm mb-1.5">
      {title}
    </h1>
    <p class="    ">{channelName}</p>
    <p>{formatLargeNumber(views)} views . {publishedTimeText}</p>
  </div>
</a>
