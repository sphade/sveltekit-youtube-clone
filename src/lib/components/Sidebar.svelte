<script lang="ts">
  const nav = [
    {
      icon: "homeIcon",
      title: "home",
    },
    {
      icon: "shortsIcon",
      title: "shorts",
    },
    {
      icon: "subIcon",
      title: "subscription",
    },
    {
      icon: "libraryIcon",
      title: "library",
    },
  ];
</script>

<div
  class="bg-white hidden py-2 flex-col md:flex  fixed  px-1 top-[60px] h-screen"
>
  {#each nav as { icon, title }}
    <a
      href="/"
      class="flex items-center justify-center flex-col rounded-lg gap-1 py-4 hover:bg-gray-100"
    >
      <img src={`/icons/${icon}.svg`} alt="" />
      <p class="text-xs capitalize">{title}</p>
    </a>
  {/each}
</div>
