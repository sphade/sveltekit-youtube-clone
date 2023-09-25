<script lang="ts">
  import RecommendedVideoCard from "./RecommendedVideoCard.svelte";
  export let recommendedVideos: any;
</script>

{#await recommendedVideos}
  <p>recommended videos loading.....</p>
{:then videos}
  <div class="basis-[360px] space-y-3">
    {#each videos as { type, video }}
      {#if type === "video"}
        <RecommendedVideoCard
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
{/await}
