<script>
  let youtubeModalOpen = false;

  // use this to show hide certain things
</script>

<!-- {#if youtubeModalOpen}
  <Modal bind:open={youtubeModalOpen} showBackground={false}>
    <div slot="content">
      <iframe
        width="780"
        height="560"
        src="https://www.youtube.com/embed/mYUif4cDFrA?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </Modal>
{/if} -->

<div id="hero-section" class="mt-32">
  <!-- Get widths -->
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-center text-7xl font-bold">[('home.heading')}</h1>
    </div>
    <div class="max-w-2xl mx-auto">
      <h2 class="text-center text-2xl text-gray-500 mt-8">[('home.subHeading')}</h2>
    </div>

    <div class="w-full max-w-sm mx-auto mt-8">
      <!-- will be form -->
      <div class="mt-1 flex rounded-md shadow-sm">
        <div class="relative flex items-stretch flex-grow focus-within:z-10">
          <input
            type="text"
            name="email"
            id="email"
            class="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-6 sm:text-sm border-2 border-blue-500 py-2" />
        </div>
        <button
          class="-ml-px relative inline-flex items-center space-x-2 px-2 py-1 lg:px-4 lg:py-4 border border-blue-500 text-sm font-medium rounded-r-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
          <span>[('StartFreeTrail')}</span>
        </button>
      </div>
    </div>

    <div class="flex justify-between text-gray-500 mt-8 text-sm max-w-2xl mx-auto">
      <!-- {#each $json('home.tags') as tag}
        <div class="inline-flex items-center">
          <svg
            class="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{tag}</span>
        </div>
      {/each} -->
    </div>

    <div>
      <div class="relative mt-8">
        <img class="block mx-auto" src="/assets/heroImage.png" alt="heroImage" loading="lazy" />
        <button
          type="button"
          class="absolute bg-white border bottom-0 font-medium inline-flex items-center px-4 py-2 sm:px-9 sm:py-4 right-1/2 rounded-full shadow-md text-gray-900 transform translate-x-1/2 translate-y-1/2 focus:outline-none">
          <img class="-ml-1 mr-2 h-8 w-8" src="/assets/Play.svg" alt="play" />
          <span class="text-lg font-medium"> [('home.watch')} </span>
        </button>
      </div>
    </div>
  </div>
</div>

<div id="companies-banner" class="max-w-7xl mx-auto py-12 lg:pb-24 lg:pt-32 px-4">
  <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 self-center">
      <img src="/assets/currencyfair.svg" alt="currencyfair" loading="lazy" />
    </div>

    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 self-center">
      <img src="/assets/fire.svg" alt="fire" loading="lazy" />
    </div>

    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 self-center">
      <img src="/assets/bearingpoint.svg" alt="bearingpoint" loading="lazy" />
    </div>

    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 self-center">
      <img src="/assets/lufthansaintouch.svg" alt="lufthansaintouch" loading="lazy" />
    </div>

    <div class="col-span-2 flex justify-center lg:col-span-1 self-center">
      <img src="/assets/bordbia.svg" alt="bordbia" loading="lazy" />
    </div>
  </div>
</div>

<div id="sub-heading" class="pt-20 px-4 sm:px-6 lg:pb-24 md:pt-32 lg:px-8">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-center text-5xl font-bold">[('home.recruitmentProcess')}</h1>
  </div>
  <div class="max-w-1xl mx-auto">
    <h2 class="text-center text-xl text-gray-500 mt-4">
      <!-- {@html ('home.recruitmentProcessSub')} -->
    </h2>
  </div>
</div>

<div id="features">
  <!-- Feature -->
  <div class="py-0 bg-white overflow-hidden lg:py-20">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-14 px-4">
        <div class="relative">
          <h1 class="text-4xl font-bold text-gray-900 tracking-tight">[('home.findCandidates.name')}</h1>
          <dl class="mt-10 space-y-10">
            <!-- Item -->
            <!-- {#each $json('home.findCandidates.info') as info}
              <div class="relative">
                <dt>
                  <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                    <svg
                      class="h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">
                    {info.heading}
                  </p>
                </dt>
                <dd class="mt-2 ml-12 text-base text-gray-500">
                  {info.description}
                </dd>
              </div>
            {/each} -->

            <a
              href="/[('home.findCandidates.url')}"
              class="inline-flex items-center ml-10 mt-8 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg">
              [('LearnMore')}
              <img class="h-2 w-4 ml-4 mt-1" src="/assets/arrowRight.svg" alt="arrowRight" loading="lazy" />
            </a>
          </dl>
        </div>
        <div class="mt-10 -mx-4 relative rounded-lg overflow-hidden" aria-hidden="true">
          <img class="relative mx-auto object-cover" src="/assets/findCandidates.png" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  </div>

  <div class="py-0 bg-white overflow-hidden lg:py-20">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-14 px-4">
        <div class="mt-10 -mx-4 relative pb-10 md:pb-0 overflow-hidden" aria-hidden="true">
          <img class="relative object-fill rounded-lg" src="/assets/ApplicationSource.png" alt="" loading="lazy" />
        </div>
        <div class="relative ">
          <h1 class="text-4xl font-bold text-gray-900 tracking-tight">[('home.manageApplications.name')}</h1>
          <dl class="mt-10 space-y-10">
            <!-- Item -->
            <!-- {#each $json('home.manageApplications.info') as info}
              <div class="relative">
                <dt>
                  <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                    <svg
                      class="h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">
                    {info.heading}
                  </p>
                </dt>
                <dd class="mt-2 ml-12 text-base text-gray-500">
                  {info.description}
                </dd>
              </div>
            {/each} -->
            <a
              href="/[('home.findCandidates.url')}"
              class="inline-flex items-center ml-10 mt-8 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg">
              [('LearnMore')}
              <img class="h-2 w-4 ml-4 mt-1" src="/assets/arrowRight.svg" alt="arrowRight" loading="lazy" />
            </a>
          </dl>
        </div>
      </div>
    </div>
  </div>

  <div class="py-0 bg-white overflow-hidden lg:py-20">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-14 px-4">
        <div class="relative">
          <h1 class="text-4xl font-bold text-gray-900 tracking-tight">[('home.assessCandidates.name')}</h1>
          <dl class="mt-10 space-y-10">
            <!-- Item -->
            <!-- {#each $json('home.assessCandidates.info') as info}
              <div class="relative">
                <dt>
                  <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                    <svg
                      class="h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">
                    {info.heading}
                  </p>
                </dt>
                <dd class="mt-2 ml-12 text-base text-gray-500">
                  {info.description}
                </dd>
              </div>
            {/each} -->
            <a
              href="/[('home.assessCandidates.url')}"
              class="inline-flex items-center ml-10 mt-8 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg">
              [('LearnMore')}
              <img class="h-2 w-4 ml-4 mt-1" src="/assets/arrowRight.svg" alt="arrowRight" loading="lazy" />
            </a>
          </dl>
        </div>

        <div class="mt-10 -mx-4 relative" aria-hidden="true">
          <img
            class="relative mx-auto rounded-lg"
            width="495"
            src="/assets/SetupInterview.png"
            alt="assessCandidates"
            loading="lazy" />
        </div>
      </div>
    </div>
  </div>

  <div class="py-0 bg-white overflow-hidden lg:py-20">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-14 px-4">
        <div class="mt-10 -mx-4 relative pb-10 md:pb-0" aria-hidden="true">
          <img
            class="relative mx-auto"
            width="495"
            src="/assets/ProgressReports.png"
            alt="analyseReports"
            loading="lazy" />
        </div>

        <div class="relative">
          <h1 class="text-4xl font-bold text-gray-900 tracking-tight">[('home.analyseReports.name')}</h1>
          <dl class="mt-10 space-y-10">
            <!-- Item -->

            <!-- {#each $json('home.analyseReports.info') as info}
              <div class="relative">
                <dt>
                  <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                    <svg
                      class="h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">
                    {info.heading}
                  </p>
                </dt>
                <dd class="mt-2 ml-12 text-base text-gray-500">
                  {info.description};
                </dd>
              </div>
            {/each} -->

            <a
              href="/[('home.analyseReports.url')}"
              class="inline-flex items-center ml-10 mt-8 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg">
              [('LearnMore')}
              <img class="h-2 w-4 ml-4 mt-1 rounded-lg" src="/assets/arrowRight.svg" alt="arrowRight" loading="lazy" />
            </a>
          </dl>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="overview" class="pt-24 px-4">
  <h1 class="text-4xl text-gray-900 font-bold text-center max-w-2xl mx-auto">
    <!-- {@html $_('home.everythingYouNeed.heading')} -->
  </h1>
  <div class="max-w-4xl mx-auto px-4 pt-8 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 px-4">
      <div class="bg-gray-50 p-6 rounded-md">
        <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </span>
        </div>
        <div class="mt-6">
          <h3 class="text-lg text-gray-900 font-rozanonva font-bold">
            [('home.everythingYouNeed.multilingual.heading')}
          </h3>
          <p class="mt-2 text-base text-gray-500">[('home.everythingYouNeed.multilingual.info')}</p>
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-md">
        <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </span>
        </div>
        <div class="mt-6">
          <h3 class="text-lg text-gray-900 font-rozanonva font-bold">
            [('home.everythingYouNeed.collaborative.heading')}
          </h3>
          <p class="mt-2 text-base text-gray-500">[('home.everythingYouNeed.collaborative.info')}</p>
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-md">
        <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </span>
        </div>
        <div class="mt-6">
          <h3 class="text-lg text-gray-900 font-rozanonva font-bold">
            [('home.everythingYouNeed.customHiring.heading')}
          </h3>
          <p class="mt-2 text-base text-gray-500">[('home.everythingYouNeed.customHiring.info')}</p>
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-md">
        <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </span>
        </div>
        <div class="mt-6">
          <h3 class="text-lg text-gray-900 font-rozanonva font-bold">[('home.everythingYouNeed.resume.heading')}</h3>
          <p class="mt-2 text-base text-gray-500">[('home.everythingYouNeed.resume.info')}</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="customers">
  <div class="flex flex-col justify-center items-center px-4 pt-8 md:pt-0">
    <h1 class="text-4xl text-gray-900 font-bold text-center block">[('home.customers.heading')}</h1>
    <!-- {#if !isFrench}
      <a
        href="#"
        class="inline-flex items-center mt-4 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg">
        [('home.customers.readMore')}
        <img class="h-2 w-4 ml-4 mt-1" src="/assets/arrowRight.svg" alt="arrowRight" loading="lazy" />
      </a>
    {/if} -->
  </div>

  <!-- Cards -->
  <section class="max-w-7xl mx-auto relative mt-16 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
    <h2 class="sr-only" id="contact-heading">Contact us</h2>

    <!-- Panel -->
    <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 px-2 py-6">
      <!-- {#each $json('home.customers.stories') as s}
        <div class="rounded-2xl {s.styles}">
          <div class="relative pt-16 px-6 pb-8 md:px-8 flex flex-col h-full">
            <div class="absolute top-0 inline-block transform -translate-y-6">
              <img src={s.img} alt="customerCharityWater" loading="lazy" />
            </div>

            <div class="pt-32 flex-grow">
              <img src={s.logo} alt="logo Charity Water" />
              <div class="relative">
                <div class="my-6">
                  <img class="absolute -left-3" src="/assets/quote.svg" loading="lazy" alt="quote" />
                </div>
                <p class="mt-4 text-base text-blue-gray-500">
                  {s.story}
                </p>
              </div>
            </div>

            <div class="mt-20">
              {@html s.person}
            </div>
          </div>
        </div>
      {/each} -->
    </div>
  </section>
</div>

<div id="stats">
  <!-- Stats section -->
  <div class="relative bg-gray-900 px-4">
    <div class="h-80 absolute bottom-0 sm:bottom-10 xl:inset-0 xl:h-full xl:w-full">
      <div class="h-full xl:grid xl:grid-cols-2">
        <div class="h-full flex items-center xl:relative xl:col-start-2">
          <img height="430px" src="/assets/map.png" loading="lazy" alt="People working on laptops" />
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
      <div class="relative pt-12 pb-96 sm:pt-24 sm:pb-96 xl:col-start-1 xl:pb-24">
        <h2 class="text-sm font-medium tracking-wide uppercase text-yellow-400">
          <span>[('home.stats.heading')}</span>
        </h2>
        <div class="max-w-md">
          <h1 class="mt-3 text-3xl font-bold text-white">[('home.stats.workWith')}</h1>
        </div>
        <div class="max-w-lg pr-5">
          <p class="mt-3 text-gray-500">[('home.stats.processed')}</p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          <!-- {#each $json('home.stats.metrics') as s}
            <p>
              <span class="block text-5xl font-bold font-rozanonva font-bold text-white">{s.stat}</span>
              <span class="mt-1 block text-base text-gray-500">
                {s.name}
              </span>
            </p>
          {/each} -->
        </div>
      </div>
    </div>
  </div>
</div>
