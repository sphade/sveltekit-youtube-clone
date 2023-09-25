<script lang="ts">
  import { formatLargeNumber } from "$lib/utils";

  let showMore = false;
  export let views: number;
  export let desc: string;
  export let publishedDate: string;
</script>

<div
  class:h-fit={showMore}
  class:h-[105px]={!showMore}
  class="bg-gray-200 group mb-5 relative overflow-hidden text-sm rounded-lg hover:bg-gray-300 p-3"
>
  <div class=" font-medium mb-2">
    <span> {formatLargeNumber(views)} views {publishedDate}</span>
  </div>
  <p class="mb-5">
    {desc}
  </p>
  <button
    class="absolute bottom-1 group-hover:bg-gray-300 right-1 bg-gray-200 capitalize font-medium p-1"
    on:click={() => {
      showMore = !showMore;
    }}>show {showMore ? "less" : "more"}</button
  >
</div>
