<script lang="ts">
  export let title: string;
  export let userName: string;
  export let descriptionSnippet: string;
  export let subscribers: string;
  export let avatar: string;
</script>

<div class="flex gap-4 items-center">
  <div class="max-w-[360px] w-full flex items-center justify-center">
    <img src={avatar} class="w-[136px] h-[136px] rounded-full" alt="" />
  </div>
  <div>
    <h1 class="capitalize font-medium text-lg mb-2">{title}</h1>
    <p class="text-gray-600 text-xs mb-1">{userName} . {subscribers}</p>
    <p class="text-gray-600 text-xs">
      {descriptionSnippet || ""}
    </p>
  </div>
  <button
    class="text-white text-sm ml-auto bg-black font-medium rounded-full py-2 px-4"
  >
    Subscribe
  </button>
</div>
<hr />
