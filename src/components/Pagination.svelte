<script>
  export let current = 1;
  export let num_items;
  export let per_page = 50;
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  $: num_pages = Math.ceil(num_items / per_page);
  let arr_pages = [];
  function buildArr(c, n) {
    if (n <= 7) {
      return [...Array(n)].map((_, i) => i + 1);
    } else {
      if (c < 3 || c > n - 2) {
        return [1, 2, 3, '...', n - 2, n - 1, n];
      } else {
        return [1, '...', c - 1, c, c + 1, '...', n];
      }
    }
  }
  function setArrPages() {
    arr_pages = buildArr(current, num_pages);
  }
  $: if (current) {
    setArrPages();
  }
  $: if (per_page) {
    setArrPages();
  }
  $: if (num_items) {
    num_pages = Math.ceil(num_items / per_page);
    current = current || 1;
  }
  function setCurrent(i) {
    if (isNaN(i)) return;
    current = i;
    dispatch('pageChange');
  }
</script>

<nav class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
  <div class="-mt-px w-0 flex-1 flex">
    {#if current > 1}
      <div
        on:click={() => setCurrent(current - 1)}
        class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
        <!-- Heroicon name: solid/arrow-narrow-left -->
        <svg
          class="mr-3 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd" />
        </svg>
        Previous
      </div>
    {/if}
  </div>
  <div class="hidden md:-mt-px md:flex">
    {#each arr_pages as i}
      <div
        class="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium 
          {isNaN(i) ? '' : 'hover:border-gray-300'}"
        class:border-blue-500={current == i}
        class:text-blue-500={current == i}
        on:click={() => setCurrent(i)}>
        {i}
      </div>
    {/each}
  </div>
  <div class="-mt-px w-0 flex-1 flex justify-end">
    {#if current < num_pages}
      <div
        on:click={() => setCurrent(current + 1)}
        class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
        Next
        <!-- Heroicon name: solid/arrow-narrow-right -->
        <svg
          class="ml-3 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </div>
    {/if}
  </div>
</nav>
