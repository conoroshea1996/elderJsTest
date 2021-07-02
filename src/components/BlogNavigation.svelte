<script>
  import { clickOutside } from '../actions/clickOutside';
  import { tweened } from 'svelte/motion';

  export let activeCategory;
  let blogCategories = [
    {
      display: 'All',
      value: null,
    },
    {
      display: 'Strategy',
      value: 'recruiting-strategy',
    },
    {
      display: 'Culture & Branding',
      value: 'culture-branding',
    },
    {
      display: 'Social',
      value: 'social-recruiting',
    },
    {
      display: 'Remote Hiring',
      value: 'remote-hiring',
    },
    {
      display: 'Compliance & Data',
      value: 'compliance-and-data',
    },
    {
      display: 'Infographics',
      value: 'infographics',
    },
    {
      display: 'Events',
      value: 'hr-events-and-people',
    },
    {
      display: 'Updates',
      value: 'hirehive-updates',
    },
    {
      display: 'Guides',
      value: 'Guides',
    },
  ];

  let widthBarSearch = tweened(0, {
    duration: 250,
  });
</script>

<style>
  .animate-fade {
    transition: 0.22s ease all;
  }
  .fade-out {
    opacity: 0;
  }
</style>

<div class="py-2 lg:py-4 border-b border-t border-gray-200 lg:flex items-center sm:justify-between relative">
  <div class="flex sm:mt-0 max-w-7xl mx-auto px-10">
    <div class="w-full">
      <ul
        class="flex text-sm justify-end lg:justify-center items-center text-gray-500 font-rozanonva font-bold flex-wrap uppercase">
        {#each blogCategories as option}
          <li class="px-3 animate-fade hidden lg:block" class:fade-out={$widthBarSearch}>
            {#if option.value}
              <a
                on:click={() => console.log('x')}
                class:text-gray-900={activeCategory == option.value || blogCategories.includes(option.value)}
                href={`/recruiting-blog/${option.value}`}>
                {option.display}
              </a>
            {:else}
              <a class="px-3" href="/recruiting-blog" class:text-gray-900={!activeCategory}>
                {option.display}
              </a>
            {/if}
          </li>
        {/each}

        <div class="w-full lg:w-1 z-10" use:clickOutside={() => widthBarSearch.set(0)}>
          <div
            class="relative rounded-md shadow-sm float-right {$widthBarSearch ? '-right-6' : ''}"
            style="width:{$widthBarSearch}px;">
            <div
              class="absolute inset-y-0 left-0 flex items-center cursor-pointer"
              on:click={() => widthBarSearch.set(320)}>
              <svg
                class="h-5 w-5 text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <input
              type="text"
              name="search"
              id="search"
              class="block bg-transparent  sm:text-sm w-full border-gray-900 box-border h-8 outline-none font-sans"
              autocomplete="off"
              class:border-b={$widthBarSearch}
              class:bg-white={$widthBarSearch}
              class:pl-10={$widthBarSearch}
              placeholder="search blogs"
              on:keydown={(e) => console.log(e)} />

            {#if $widthBarSearch}
              <div
                class="absolute inset-y-0 right-0 flex items-center cursor-pointer"
                on:click={() => widthBarSearch.set(0)}>
                <svg
                  class="h-5 w-5 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            {/if}
          </div>
        </div>
      </ul>
    </div>
  </div>
</div>
