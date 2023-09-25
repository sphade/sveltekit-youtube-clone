<script>
	import SearchBar from './SearchBar.svelte';
</script>

<header
	class="px-4 flex items-center h-[64px] py-2 bg-white z-10 justify-between sticky top-0 left-0"
>
	<a href="/" class="md:hidden mr-5">
		<img src="./icons/ytLogo.svg" alt="logo" />
	</a>
	<div class="md:flex gap-4 items-center hidden">
		<img
			src="./icons/bugerIcon.svg"
			alt="buger"
			class="w-[40px] h-[40px] p-2 rounded-full hover:bg-gray-200"
		/>
		<a href="/">
			<img src="./icons/ytLogo.svg" alt="logo" />
		</a>
	</div>

	<SearchBar />

	<div class=" gap-3 items-center hidden md:flex">
		<img
			src="./icons/createIcon.svg"
			class="hover:bg-gray-200 rounded-full p-3 cursor-pointer"
			alt="logo"
		/>
		<img
			src="./icons/notIcon.svg"
			class="hover:bg-gray-200 rounded-full p-3 cursor-pointer"
			alt="logo"
		/>
		<img src="/avatar.png" class="bg-gray-200 h-8 w-8 rounded-full cursor-pointer" alt="logo" />
	</div>
</header>
