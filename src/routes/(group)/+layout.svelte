<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="flex">
	<Sidebar />
	<main class="md:ml-[74px] p-6 flex-1">
		<slot />
	</main>
</div>
