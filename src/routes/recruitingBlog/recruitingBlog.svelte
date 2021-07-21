<script>
  import BlogNavigation from '../../components/BlogNavigation.svelte';
  import BlogPagination from '../../components/BlogPagination.svelte';
  import ImageWrapper from '../../components/ImageWrapper.svelte';
  export let data, request, helpers;
  let blogPost = data.blogs.slice(request.postStart, request.postEnd);
</script>

<BlogNavigation hydrate-client={{ activeCategory: data.category }} />
<div class="grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8 my-8 max-w-7xl mx-auto px-6">
  {#each blogPost as { frontmatter, slug }, i}
    {#if i % data.pageSize === 0}
      <div class="relative col-span-1 lg:col-span-3 rounded-md h-80">
        <a href="/{slug}">
          <div class="relative h-full overflow-hidden rounded-lg">
            <img loading="lazy" src="{frontmatter.coverImage}?nf_resize=fit&w=450&h=350" alt={frontmatter.slug} />
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
    {:else if i % data.pageSize === 1}
      <div class="relative col-span-1 lg:col-span-3 rounded-md">
        <a href="/{slug}" class="flex flex-col overflow-hidden">
          <div class="relative h-56 overflow-hidden rounded-lg">
            <img loading="lazy" src="{frontmatter.coverImage}?nf_resize=fit&w=450&h=350" alt={frontmatter.slug} />
            <div class="absolute inset-0" />
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
    {:else if i % data.pageSize === 2 || i % data.pageSize === 3 || i % data.pageSize === 4}
      <div class="relative col-span-1 lg:col-span-2 rounded-md">
        <a href="/{slug}" class="flex flex-col overflow-hidden">
          <div class="relative h-48 overflow-hidden rounded-lg">
            <img loading="lazy" src="{frontmatter.coverImage}?nf_resize=fit&w=450&h=350" alt={frontmatter.slug} />
            <div class="absolute inset-0" />
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
    {:else if i % data.pageSize === 5}
      <div class="relative col-span-1 lg:col-span-4 rounded-md h-80">
        <a href="/{slug}">
          <div class="relative h-full overflow-hidden rounded-lg">
            <img loading="lazy" src="{frontmatter.coverImage}?nf_resize=fit&w=450&h=350" alt={frontmatter.slug} />
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
    {:else if i % data.pageSize === 6}
      <div class="relative col-span-1 lg:col-span-2 rounded-md">
        <a href="/{slug}" class="flex flex-col overflow-hidden">
          <div class="relative h-48 overflow-hidden rounded-lg">
            <img loading="lazy" src="{frontmatter.coverImage}?nf_resize=fit&w=450&h=350" alt={frontmatter.slug} />
            <div class="absolute inset-0" />
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
    {:else if i % data.pageSize === 7 || i % data.pageSize === 8 || i % data.pageSize === 9}
      <div class="relative col-span-1 lg:col-span-2  rounded-md">
        <a href="/{slug}" class="flex flex-col overflow-hidden">
          <div class="relative h-48 overflow-hidden rounded-lg">
            <img loading="lazy" src="{frontmatter.coverImage}?nf_resize=fit&w=450&h=350" alt={frontmatter.slug} />
            <div class="absolute inset-0" />
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

{#if data.blogs.length >= 10}
  <BlogPagination {request} />
{/if}
<div class="bg-white py-20 px-4">
  <div class=" max-w-7xl  mx-auto  lg:flex lg:items-center lg:justify-between">
    <h2 class="text-2xl font-bold text-gray-900 font-rozanonva sm:text-3xl">
      Thousands of businesses rely upon HireHive <br /> to help them find and hire the best candidates.
    </h2>
    <div class="mt-8 flex lg:mt-0 items-center lg:flex-shrink-0">
      <button
        class="bg-blue-500 rounded-md inline-flex items-center ml-10 px-3 py-2 border border-transparent bg-transparent text-white text-lg"
        >Sign Up <svg
          class="h-5 w-5 ml-4 mt-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg
        ></button>
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
