<script>
  export let url;
</script>

<div class="relative max-w-7xl mx-auto my-20">
  <div class="text-center">
    <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
      Discover the entire Hirehive offering
    </h2>
  </div>
  <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
    <div
      class="flex flex-col rounded-lg overflow-hidden p-3 border border-gray-100"
      class:bg-gray-50={url === '/recruiting-features/find-candidates/'}>
      <div class="flex md:h-full lg:flex-col">
        <div class="flex-shrink-0">
          <div class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-navy text-white sm:h-12 sm:w-12">
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
            <p class="text-base font-medium text-gray-900">Find candidates</p>
            <p class="mt-1 text-sm">Reach a wider audience with automated posting.</p>
          </div>
          {#if url !== '/recruiting-features/find-candidates/'}
            <a href="/recruiting-features/find-candidates" class="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
              Learn More
              <span aria-hidden="true">&rarr;</span>
            </a>
          {/if}
        </div>
      </div>
    </div>

    <div
      class="flex flex-col rounded-lg overflow-hidden p-3 border border-gray-100"
      class:bg-gray-50={url === '/recruiting-features/manage-applications/'}>
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
            <p class="text-base font-medium text-gray-900">Manage applications</p>
            <p class="mt-1 text-sm">Move your candidates through a clear hiring pipeline.</p>
          </div>

          {#if url !== '/recruiting-features/manage-applications/'}
            <a href="/recruiting-features/manage-applications" class="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
              Learn More
              <span aria-hidden="true">&rarr;</span>
            </a>
          {/if}
        </div>
      </div>
    </div>

    <div
      class="flex flex-col rounded-lg overflow-hidden p-3 border border-gray-100"
      class:bg-gray-50={url === '/recruiting-features/assess-candidates/'}>
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
            <p class="text-base font-medium text-gray-900">Assess candidates</p>
            <p class="mt-1 text-sm">Add unlimited users to your hiring team for collaborative hiring.</p>
          </div>

          {#if url !== '/recruiting-features/assess-candidates/'}
            <a href="/recruiting-features/assess-candidates" class="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
              Learn More
              <span aria-hidden="true">&rarr;</span>
            </a>
          {/if}
        </div>
      </div>
    </div>

    <div
      class="flex flex-col rounded-lg overflow-hidden p-3 border border-gray-100"
      class:bg-gray-50={url === '/recruiting-features/analyse-reports/'}>
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
            <p class="text-base font-medium text-gray-900">Analyse reports</p>
            <p class="mt-1 text-sm">Review data and make informed data driven recruiting decisions.</p>
          </div>

          {#if url !== '/recruiting-features/analyse-reports/'}
            <a href="/recruiting-features/analyse-reports" class="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
              Learn More
              <span aria-hidden="true">&rarr;</span>
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
