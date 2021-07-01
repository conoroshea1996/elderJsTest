<div id="hero-section" class="mt-32">
  <!-- Get widths -->
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-center text-7xl font-bold">
        <slot name="home.heading">("home.heading")</slot>
      </h1>
    </div>
    <div class="max-w-2xl mx-auto">
      <h2 class="text-center text-2xl text-gray-500 mt-8">
        <slot name="home.subHeading">("home.subHeading")</slot>
      </h2>
    </div>

    <div class="w-full max-w-sm mx-auto mt-8">
      <!-- will be form -->
      <div class="mt-1 flex rounded-md shadow-sm">
        <slot name="slot.input">
          <div class="relative flex items-stretch flex-grow focus-within:z-10">
            <input
              type="text"
              name="email"
              id="email"
              class="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-6 sm:text-sm border-2 border-blue-500 py-2"
              placeholder="#" />
          </div>
          <button
            class="-ml-px relative inline-flex items-center space-x-2 px-2 py-1 lg:px-4 lg:py-4 border border-blue-500 text-sm font-medium rounded-r-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <!-- <span>{$_('StartFreeTrail')}</span> -->
          </button>
        </slot>
      </div>
    </div>

    <div class="flex justify-between text-gray-500 mt-8 text-sm max-w-2xl mx-auto">
      <slot name="tags">
        <div class="inline-flex items-center">
          <svg
            class="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>Totally free for 14 days</span>
        </div>
        <div class="inline-flex items-center">
          <svg
            class="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>No credit card needed</span>
        </div>
        <div class="inline-flex items-center">
          <svg
            class="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
          <span>Get started in 5 minutes</span>
        </div>
      </slot>
    </div>

    <div>
      <div class="relative mt-8">
        <img class="block mx-auto" src="/assets/heroImage.png" alt="heroImage" loading="lazy" />
        <button
          on:click={() => (youtubeModalOpen = true)}
          type="button"
          class="absolute bg-white border bottom-0 font-medium inline-flex items-center px-4 py-2 sm:px-9 sm:py-4 right-1/2 rounded-full shadow-md text-gray-900 transform translate-x-1/2 translate-y-1/2 focus:outline-none">
          <img class="-ml-1 mr-2 h-8 w-8" src="/assets/Play.svg" alt="play" />
          <span class="text-lg font-medium">
            {$_('home.watch')}
          </span>
        </button>
      </div>
    </div>
  </div>
</div>
