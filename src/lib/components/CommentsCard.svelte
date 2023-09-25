<script lang="ts">
  export let name: string;
  export let content: string;
  export let avatar: string;
  export let publishedTimeText: string;
</script>

<div class="flex gap-4">
  <img src={avatar} class="w-10 h-10 rounded-full" alt="" />
  <div class="space-y-2">
    <div class="flex items-baseline">
      <h1 class="font-medium text-sm capitalize">{name}</h1>
      <span class="text-xs text-gray-600">{publishedTimeText}</span>
    </div>
    <p class="text-sm">{content}</p>
    <div class="flex items-center gap-5">
      <button class=" p-1 text-xs rounded-full hover:bg-gray-200">
        <img src="/icons/likeIcon.svg" alt="" />
      </button>
      <button class=" p-1 text-xs rounded-full hover:bg-gray-200">
        <img src="/icons/dislikeIcon.svg" alt="" />
      </button>
      <button
        class="px-2 font-medium capitalize py-0.5 text-xs rounded-full hover:bg-gray-200"
      >
        reply
      </button>
    </div>
  </div>
</div>
