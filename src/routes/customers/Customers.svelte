<script>
  export let data, helpers;
</script>

<svelte:head>
  <title>Customer Stories | HireHive</title>
  <meta
    name="description"
    content="We are lucky to be able to work with amazing customers from all over the world every day. Read some of their testimonials!" />
</svelte:head>

<div id="customCTA" class="mt-24">
  <!-- Main story -->
  <div class="max-w-7xl mx-auto py-16 px-6">
    <div class="rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
      <div class="lg:pr-0 flex flex-col">
        <div class="lg:self-center flex-grow pr-4">
          <div class="flex text-gray-500 items-center">
            <h1 class="mt-2 mr-8 font-sans font-normal">Featured customer</h1>
            <img src={data.mainStory.frontmatter.coverImage} alt="WaterProject" />
          </div>
          <h1 class="text-4xl text-gray-900 sm:text-5xl my-10 leading-loose">
            Finding The Water Project people who <br /> share their company values.
          </h1>
          <p class="mt-3 text-lg leading-6 text-gray-900">
            “HireHive is the perfect example of a company that has created a product designed for the business user.”
          </p>
          <p class="mt-3 text-lg leading-6 text-gray-900">
            <span class="font-bold font-rozanonva"> <span class="text-yellow-400"> - </span> Peter Chasse,</span> Founder
            of The Water Project
          </p>
        </div>
        <div>
          <a
            href="#"
            class="mt-14 align-self bg-blue-500 border border-transparent rounded-md shadow px-5 py-2 inline-flex items-center text-base font-medium text-white hover:bg-blue-400">
            Read the story
          </a>
        </div>
      </div>

      <div class="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <img
          class="rounded-md object-cover object-left-top"
          src="/assets/customerStoryWaterProject.png"
          alt="Customer Story Water Project" />
      </div>
    </div>
  </div>

  <!-- Customer story cards -->
  <div class="relative pt-10 pb-20 lg:pb-28 max-w-7xl mx-auto px-6">
    <div class="relative mx-auto">
      <div class="max-w-lg mx-auto grid gap-12 lg:grid-cols-3 lg:max-w-none">
        {#each data.otherCustomerStories as { frontmatter, slug }}
          <!-- Customer Card -->
          <div class="flex flex-col overflow-hidden">
            <div class="flex-shrink-0 relative h-80">
              <img
                loading="lazy"
                class="absoulte inset-0 w-full h-full object-cover rounded-md"
                src={frontmatter.coverImage}
                alt="Customer Story {frontmatter.company}" />
            </div>
            <a href="/customers/{slug}" class="flex-1 py-6 flex flex-col justify-between">
              <div class="flex-1 text-gray-500">
                {#if frontmatter.coverLogo}
                  <img loading="lazy" src={frontmatter.coverLogo} alt="Logo {frontmatter.company}" />
                {:else}
                  <span>** Need Logo **</span>
                {/if}
                <div class="block mt-6">
                  <p class="text-xl font-bold font-rozanonva text-gray-900">
                    {frontmatter.coverCaption}
                  </p>
                  <p class="mt-6 text-sm text-gray-500">
                    Read {frontmatter.company}’s story
                  </p>
                </div>
              </div>
              <div class="mt-6 flex items-center text-blue-500">
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<div class="bg-navy py-20">
  <div class="max-w-7xl mx-auto  lg:flex lg:items-center lg:justify-between px-6">
    <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl font-rozanonva">
      We help world class companies and organisations of all <br /> shapes and sizes, across all industries grow.
    </h2>
    <div class="mt-8 flex lg:mt-0 items-center lg:flex-shrink-0">
      <button
        class="bg-blue-500 rounded-md inline-flex items-center ml-10 px-3 py-2 border border-transparent bg-transparent text-white text-lg">
        Sign Up
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

  <div id="companies-banner" class="mx-auto max-w-7xl py-12 px-6 lg:pb-24 lg:pt-32">
    <div class="grid grid-cols-2 gap-8  lg:grid-cols-6">
      <div class="col-span-1 flex lg:justify-center self-center">
        <img src="/assets/logoCurrencyfairLightGray.svg" alt="Currency Fair" />
      </div>

      <div class="col-span-1 flex lg:justify-center  self-center">
        <img src="/assets/logoLufthansaInTouchLightGray.svg" alt="lufthansaintouch" />
      </div>

      <div class="col-span-1 flex lg:justify-center  self-center">
        <img src="/assets/logoFireLightGray.svg" alt="fire" />
      </div>

      <div class="col-span-1 flex lg:justify-center  self-center">
        <img src="/assets/logoBluefaceLightGray.svg" alt="bordbia" />
      </div>

      <div class="col-span-1 flex lg:justify-center  self-center">
        <img src="/assets/logoStormLightGray.svg" alt="bordbia" />
      </div>

      <div class="col-span-1 flex lg:justify-center self-center">
        <img src="/assets/logoBearingpointLightGray.svg" alt="bearingpoint" />
      </div>
    </div>
  </div>
</div>
