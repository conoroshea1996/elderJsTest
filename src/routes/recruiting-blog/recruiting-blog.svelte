<script>
  import { request } from 'http';

  import { tweened } from 'svelte/motion';
  import { clickOutside } from '../../actions/clickOutside';

  // grab page number from layout
  let pageNumber = 1;
  const pageSize = 10;
  let totalPages;
  let filteredPosts = [];
  let displayPosts = [];

  const paginate = (posts) => {
    // make deep copy so we can mutate categories
    var postToShow = posts.slice(0, pageNumber * pageSize);
    return postToShow;
  };

  const getTotalPages = (posts) => {
    totalPages = Math.round(posts.length / pageSize);
  };

  export let data, helpers;

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
                class:text-gray-900={blogCategories.includes(option.value)}
                href={`/recruiting-blog/${option.value}`}>
                {option.display}
              </a>
            {:else}
              <a class="px-3" href="/recruiting-blog" class:text-gray-900={!blogCategories.length}>
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

<!-- Current: "ring-2 ring-offset-2 ring-indigo-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" -->
<div class="grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8 my-8 max-w-7xl mx-auto px-6">
  {#each data.blogs as { frontmatter, slug }, i}
    {JSON.stringify(frontmatter)}
    {#if i % pageSize === 0}
      <div class="relative col-span-1 lg:col-span-3 rounded-md h-80">
        <a href={slug}>
          <div class="relative h-full overflow-hidden rounded-lg">
            <img
              loading="lazy"
              class="absoulte inset-0 h-full w-full object-cover"
              src="{frontmatter.coverImage}?nf_resize=fit&w=450&h=350"
              alt={frontmatter.slug} />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-700 opacity-80" />
          </div>

          <div class="block w-full h-full overflow-hidden">
            <div class="absolute bottom-8 left-8">
              <p class="text-yellow-400 text-xl font-medium capitalize">
                {frontmatter.categories.map((c) => c.replace(/-/g, ' ')).join(' | ')}
              </p>
              <h1 class="font-rozanonva text-white text-xl">
                {frontmatter.title}
              </h1>
            </div>
          </div>
        </a>
      </div>
    {:else if i % pageSize === 1}
      <div class="relative col-span-1 lg:col-span-3 rounded-md">
        <a href={slug} class="flex flex-col overflow-hidden">
          <div class="flex-shrink-0">
            <img
              loading="lazy"
              class="h-56 w-full object-cover rounded-lg"
              src="{frontmatter.coverImage}?nf_resize=fit&w=450&h=350"
              alt={frontmatter.slug} />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-500 capitalize">
                {frontmatter.categories.map((c) => c.replace(/-/g, ' ')).join(' | ')}
              </p>
              <div href="#" class="block mt-2">
                <h1 class="font-rozanonva text-gray-900 text-xl">
                  {frontmatter.title}
                </h1>
              </div>
            </div>
          </div>
        </a>
      </div>
    {:else if i % pageSize === 2 || i % pageSize === 3 || i % pageSize === 4}
      <div class="relative col-span-1 lg:col-span-2 rounded-md">
        <a href={slug} class="flex flex-col overflow-hidden">
          <div class="flex-shrink-0">
            <img
              loading="lazy"
              class="h-48 w-full object-cover rounded-lg"
              src="{frontmatter.coverImage}?nf_resize=fit&w=350&h=350"
              alt={frontmatter.slug} />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-500 capitalize">
                {frontmatter.categories.map((c) => c.replace(/-/g, ' ')).join(' | ')}
              </p>
              <div href="#" class="block mt-2">
                <h1 class="font-rozanonva text-gray-900 text-xl">
                  {frontmatter.title}
                </h1>
              </div>
            </div>
          </div>
        </a>
      </div>
    {:else if i % pageSize === 5}
      <div class="relative col-span-1 lg:col-span-4 rounded-md h-80">
        <a href={slug}>
          <div class="relative h-full overflow-hidden rounded-lg">
            <img
              loading="lazy"
              class="absoulte inset-0 h-full w-full object-cover"
              src="{frontmatter.coverImage}?nf_resize=fit&w=450&h=350"
              alt={frontmatter.slug} />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-700 opacity-80" />
          </div>

          <div class="block w-full h-full overflow-hidden">
            <div class="absolute bottom-8 left-8">
              <p class="text-yellow-400 text-xl font-medium capitalize">
                {frontmatter.categories.map((c) => c.replace(/-/g, ' ')).join(' | ')}
              </p>
              <h1 class="font-rozanonva text-white text-xl">
                {frontmatter.title}
              </h1>
            </div>
          </div>
        </a>
      </div>
    {:else if i % pageSize === 6}
      <div class="relative col-span-1 lg:col-span-2 rounded-md">
        <a href={slug} class="flex flex-col overflow-hidden">
          <div class="flex-shrink-0">
            <img
              loading="lazy"
              class="h-48 w-full object-cover rounded-lg"
              src="{frontmatter.coverImage}?nf_resize=fit&w=350&h=350"
              alt={frontmatter.slug} />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-500 capitalize">
                {frontmatter.categories.map((c) => c.replace(/-/g, ' ')).join(' | ')}
              </p>
              <div href="#" class="block mt-2">
                <h1 class="font-rozanonva text-gray-900 text-xl">
                  {frontmatter.title}
                </h1>
              </div>
            </div>
          </div>
        </a>
      </div>
    {:else if i % pageSize === 7 || i % pageSize === 8 || i % pageSize === 9}
      <div class="relative col-span-1 lg:col-span-2  rounded-md">
        <a href={slug} class="flex flex-col overflow-hidden">
          <div class="flex-shrink-0">
            <img
              loading="lazy"
              class="h-48 w-full object-cover rounded-lg"
              src="{frontmatter.coverImage}?nf_resize=fit&w=450&h=350"
              alt={frontmatter.slug} />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-500 capitalize">
                {frontmatter.categories.map((c) => c.replace(/-/g, ' ')).join(' | ')}
              </p>
              <div href="#" class="block mt-2">
                <h1 class="text-xl  text-gray-900">
                  {frontmatter.title}
                </h1>
              </div>
            </div>
          </div>
        </a>
      </div>
    {/if}
  {/each}
</div>

<div class="bg-navy py-16 my-8">
  <h1 on:click={() => {}} class="text-center text-white text text-3xl font-bold cursor-pointer">$_('Loadmore')</h1>
</div>

<div class="bg-white py-20 px-4">
  <div class=" max-w-7xl  mx-auto  lg:flex lg:items-center lg:justify-between">
    <h2 class="text-2xl font-bold text-gray-900 font-rozanonva sm:text-3xl">
      <!-- {@html $_('blog.cta.heading')} -->
    </h2>
    <div class="mt-8 flex lg:mt-0 items-center lg:flex-shrink-0">
      <button
        class="bg-blue-500 rounded-md inline-flex items-center ml-10 px-3 py-2 border border-transparent bg-transparent text-white text-lg">
        $_('SignUp')}
        <svg
          class="h-5 w-5 ml-4 mt-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>

  <div id="companies-banner" class="mx-auto max-w-7xl box-border py-12 lg:pb-24 lg:pt-32">
    <div class="grid grid-cols-2 gap-8  lg:grid-cols-6">
      <div class="col-span-1 flex self-center">
        <img src="/assets/logoCurrencyfairLightGray.svg" loading="lazy" alt="Currency Fair" />
      </div>

      <div class="col-span-1 flex self-center">
        <img src="/assets/logoLufthansaInTouchLightGray.svg" loading="lazy" alt="lufthansaintouch" />
      </div>

      <div class="col-span-1 flex self-center">
        <img src="/assets/logoFireLightGray.svg" alt="fire" loading="lazy" />
      </div>

      <div class="col-span-1 flex   self-center">
        <img src="/assets/logoBluefaceLightGray.svg" alt="bordbia" loading="lazy" />
      </div>

      <div class="col-span-1 flex self-center">
        <img src="/assets/logoStormLightGray.svg" alt="bordbia" loading="lazy" />
      </div>

      <div class="col-span-1 flex lg:justify-center self-center">
        <img src="/assets/logoBearingpointLightGray.svg" alt="bearingpoint" loading="lazy" />
      </div>
    </div>
  </div>
</div>
<!-- Current: "ring-2 ring-offset-2 ring-indigo-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" -->

<div class="bg-white py-20 px-4">
  <div class=" max-w-7xl  mx-auto  lg:flex lg:items-center lg:justify-between">
    <h2 class="text-2xl font-bold text-gray-900 font-rozanonva sm:text-3xl" />
    <div class="mt-8 flex lg:mt-0 items-center lg:flex-shrink-0">
      <button
        class="bg-blue-500 rounded-md inline-flex items-center ml-10 px-3 py-2 border border-transparent bg-transparent text-white text-lg">
        $_('SignUp')}
        <svg
          class="h-5 w-5 ml-4 mt-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>

  <div id="companies-banner" class="mx-auto max-w-7xl box-border py-12 lg:pb-24 lg:pt-32">
    <div class="grid grid-cols-2 gap-8  lg:grid-cols-6">
      <div class="col-span-1 flex self-center">
        <img src="/assets/logoCurrencyfairLightGray.svg" loading="lazy" alt="Currency Fair" />
      </div>

      <div class="col-span-1 flex self-center">
        <img src="/assets/logoLufthansaInTouchLightGray.svg" loading="lazy" alt="lufthansaintouch" />
      </div>

      <div class="col-span-1 flex self-center">
        <img src="/assets/logoFireLightGray.svg" alt="fire" loading="lazy" />
      </div>

      <div class="col-span-1 flex   self-center">
        <img src="/assets/logoBluefaceLightGray.svg" alt="bordbia" loading="lazy" />
      </div>

      <div class="col-span-1 flex self-center">
        <img src="/assets/logoStormLightGray.svg" alt="bordbia" loading="lazy" />
      </div>

      <div class="col-span-1 flex lg:justify-center self-center">
        <img src="/assets/logoBearingpointLightGray.svg" alt="bearingpoint" loading="lazy" />
      </div>
    </div>
  </div>
</div>
