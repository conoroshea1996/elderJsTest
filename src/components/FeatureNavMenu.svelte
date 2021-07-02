<script>
  import { slide } from 'svelte/transition';
  import { clickOutside } from '../actions/clickOutside';

  export let currentUrl;

  let featuresMenuOpen = false;
</script>

<div>
  <button
    on:click={() => (featuresMenuOpen = !featuresMenuOpen)}
    type="button"
    class="group inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
    class:text-blue-500={(featuresMenuOpen && currentUrl !== '/plans/') || currentUrl.includes('recruiting-features')}
    class:text-white={featuresMenuOpen && currentUrl === '/plans/'}
    aria-expanded="false">
    <span>[('Navbar.features.name')}</span>
    <svg
      class=" ml-2 h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd" />
    </svg>
  </button>

  {#if featuresMenuOpen}
    <div
      use:clickOutside={() => (featuresMenuOpen = false)}
      transition:slide={{ duration: 350 }}
      class="absolute z-50 mt-8 transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 w-full bg-white">
      <div class="w-full" class:dark-mode={currentUrl === '/plans/'} class:light-mode={currentUrl !== '/plans/'}>
        <div
          class="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
          <a
            href="/recruiting-features/find-candidates"
            class="-m-3 p-3 flex flex-col justify-between rounded-lg transition ease-in-out duration-150 {currentUrl ===
            '/plans/'
              ? 'hover:bg-gray-800'
              : 'hover:bg-gray-50'}">
            <div class="flex md:h-full lg:flex-col">
              <div class="flex-shrink-0">
                <div
                  class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-navy text-white sm:h-12 sm:w-12">
                  <svg
                    class="h-6 w-6"
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
              </div>
              <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                <div>
                  <p class="text-base font-medium {currentUrl === '/plans/' ? 'text-white' : 'text-gray-900'}">
                    [('Navbar.features.findCandidates.name')}
                  </p>
                  <p class="mt-1 text-sm">[('Navbar.features.findCandidates.info')}</p>
                </div>
                <p class="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
                  [('LearnMore')}
                  <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </div>
          </a>

          <a
            href="/recruiting-features/manage-applications"
            class="-m-3 p-3 flex flex-col justify-between rounded-lg transition ease-in-out duration-150 {currentUrl ===
            '/plans/'
              ? 'hover:bg-gray-800'
              : 'hover:bg-gray-50'}">
            <div class="flex md:h-full lg:flex-col">
              <div class="flex-shrink-0">
                <div
                  class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                  <!-- Heroicon name: outline/cursor-click -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
              </div>
              <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                <div>
                  <p class="text-base font-medium {currentUrl === '/plans/' ? 'text-white' : 'text-gray-900'}">
                    [('Navbar.features.manageApplications.name')}
                  </p>
                  <p class="mt-1 text-sm">[('Navbar.features.manageApplications.info')}</p>
                </div>
                <p class="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
                  [('LearnMore')}
                  <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </div>
          </a>

          <a
            href="/recruiting-features/assess-candidates"
            class="-m-3 p-3 flex flex-col justify-between rounded-lg transition ease-in-out duration-150 {currentUrl ===
            '/plans/'
              ? 'hover:bg-gray-800'
              : 'hover:bg-gray-50'}">
            <div class="flex md:h-full lg:flex-col">
              <div class="flex-shrink-0">
                <div
                  class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-yellow-500 text-white sm:h-12 sm:w-12">
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                <div>
                  <p class="text-base font-medium {currentUrl === '/plans/' ? 'text-white' : 'text-gray-900'}">
                    [('Navbar.features.assessCandidates.name')}
                  </p>
                  <p class="mt-1 text-sm">[('Navbar.features.assessCandidates.info')}</p>
                </div>
                <p class="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
                  [('LearnMore')}
                  <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </div>
          </a>

          <a
            href="/recruiting-features/analyse-reports"
            class="-m-3 p-3 flex flex-col justify-between rounded-lg transition ease-in-out duration-150 {currentUrl ===
            '/plans/'
              ? 'hover:bg-gray-800'
              : 'hover:bg-gray-50'}">
            <div class="flex md:h-full lg:flex-col">
              <div class="flex-shrink-0">
                <div
                  class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-yellow-400 text-navy sm:h-12 sm:w-12">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                <div>
                  <p class="text-base font-medium {currentUrl === '/plans/' ? 'text-white' : 'text-gray-900'}">
                    [('Navbar.features.analyseReports.name')}
                  </p>
                  <p class="mt-1 text-sm">[('Navbar.features.analyseReports.info')}</p>
                </div>
                <p class="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
                  [('LearnMore')}
                  <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class={currentUrl === '/plans/' ? 'bg-gray-800' : 'bg-gray-50'}>
        <div class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
          <div class="flow-root">
            <a
              href="#"
              class="-m-3 p-3 flex items-center rounded-md text-base font-medium transition ease-in-out duration-150
                  {currentUrl === '/plans/' ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}
                  ">
              <svg
                class="flex-shrink-0 h-6 w-6 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="ml-3 {currentUrl === '/plans/' ? 'text-white ' : 'text-gray-900'}">[('Navbar.watch')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
