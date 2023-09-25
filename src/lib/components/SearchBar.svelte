<script>
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
</script>

<form
  method="POST"
  use:enhance
  action="/?/search"
  class="h-[40px] flex basis-[600px]"
>
  <input
    type="text"
    class="h-[40px] outline-none focus:border-blue-600 focus:border-2 px-3 rounded-s-3xl flex-1 border border-gray-400"
    placeholder="Search"
    name="q"
    class:border-red-500={$page.form?.error}

  />
  <button
    class="flex items-center justify-center border border-l-0 rounded-e-3xl border-gray-400 w-16 bg-slate-50"
  >
    <img src="/icons/searchIcon.svg" alt="" />
  </button>
</form>
