<script>
  export let request;
</script>

<div class="bg-gray-900 text-white grid grid-cols-2 z-30 mt-8">
  <div class="col-span-1 px-12 border-r border-gray-700 h-full py-28">
    {#if request.hasPrevious}
      <a href="/{request.previousPage.slug}" class="flex justify-between">
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
          <h1 class="text-3xl font-bold">Page {request.page - 1}</h1>
        </div>
      </a>
    {/if}
  </div>

  <div class="col-span-1 px-12 border-r border-gray-700 h-full py-28">
    {#if request.hasNext}
      <a href="/{request.nextPage.slug}" class="flex justify-between">
        <div>
          <p class="text-xl text-gray-500 mb-6">Next</p>
          <h1 class="text-3xl font-bold">Page {request.page ? request.page + 1 : 2 }</h1>
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
