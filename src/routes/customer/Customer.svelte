<script>
  export let data, request; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;
</script>

<svelte:head>
  <title>{frontmatter.seoTitle}</title>
  <meta name="description" content={frontmatter.seoDescription} />
  <link href={request.permalink} rel="canonical" />
</svelte:head>

<div class="min-h-screen">
  <div class="relative overflow-hidden">
    <main>
      <div class="bg-gray-900 lg:overflow-hidden py-16 sm:py-28 relative">
        <img class="absolute hidden xl:block top-0 right-0 h-full" src="/assets/Polygon.png" alt="" />
        <img class="absolute hidden xl:block bottom-0 left-0" src="/assets/Polygon2.png" alt="" />
        <img class="absolute hidden xl:block top-0 left-0" src="/assets/Polygon3.png" alt="" />

        <div class="mx-auto max-w-5xl  grid grid-cols-1 lg:grid-cols-5 px-4">
          <div class="col-span-1 lg:col-span-3">
            <p class="mt-4 tracking-tight text-yellow-400 sm:mt-5 lg:mt-6">
              {frontmatter.company}’s customer story
            </p>
            <h1 class="mt-4 text-white text-5xl font-bold">
              {frontmatter.challenge}
            </h1>

            <p class="max-w-xl mt-12 text-white text-xl">
              {frontmatter.solution}
            </p>

            <p class="max-w-xl mt-6 text-white text-xl">
              {@html frontmatter.results}
            </p>
          </div>
        </div>
      </div>
    </main>

    <div class="lg:overflow-hidden py-14">
      <div class="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-5 px-4">
        <div class="prose-xl customer-story col-span-1 lg:col-span-3">
          {@html html}
        </div>
      </div>
    </div>
  </div>
  <!--   
    <CustomerStoryNavigatior {currentIndex} {customerStories} />
  
    <SignUpCta isLightGray /> -->
</div>

<div class="bg-gray-900 text-white grid grid-cols-2">
  <div class="col-span-1 px-12 border-r border-gray-700 h-full py-28">
    {#if data.previousStory}
      <a href="/customers/{data.previousStory.slug}" class="flex justify-between">
        <div class="flex items-center">
          <svg
            class="h-12 w-12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </div>

        <div>
          <p class="text-xl text-gray-500 text-right mb-6">Previous</p>
          <h1 class="text-3xl font-bold">
            {data.previousStory.frontmatter.company} Story
          </h1>
        </div>
      </a>
    {/if}
  </div>

  <div class="col-span-1 px-12 border-r border-gray-700 h-full py-28">
    {#if data.nextStory}
      <a href="/customers/{data.nextStory.slug}" class="flex justify-between">
        <div>
          <p class="text-xl text-gray-500 mb-6">Next</p>
          <h1 class="text-3xl font-bold">
            {data.nextStory.frontmatter.company} Story
          </h1>
        </div>

        <div class="flex items-center">
          <svg
            class="h-12 w-12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </a>
    {/if}
  </div>
</div>
