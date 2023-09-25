<script lang="ts">
  import CommentsCard from "./CommentsCard.svelte";
  export let commentsData: any;
</script>

{#await commentsData}
  <p>comments loading....</p>
{:then comments}
  <h1 class="font-medium mb-5">{comments.totalCommentsCount} Comments</h1>
  <div class="space-y-5">
    {#each comments.comments as comment}
      <CommentsCard
        avatar={comment.author.avatar[0].url}
        name={comment.author.title}
        content={comment.content}
        publishedTimeText={comment.publishedTimeText}
      />
    {/each}
  </div>
{/await}
