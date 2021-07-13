<script>
  import { onMount } from 'svelte';
  import Pagination from '../components/Pagination.svelte';
  import { slide } from 'svelte/transition';
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let queryParams = {};
  let searchFilters = {};
  let requestStatus = {
    loading: false,
    error: false,
  };

  let data;

  // view status of filter
  const filtersToggle = {
    countries: false,
    types: false,
    experience: false,
  };

  const numberOfFacets = 5;

  const apiUrl = 'https://localhost:44330/v1/hirehive/jobboard?';
  const perPage = 30;

  const searchJobs = async () => {
    queryParams.page = 1;
    await getJobs();
  };

  const clearAll = async () => {
    queryParams.page = 1;
    searchFilters.country = [];
    searchFilters.types = [];
    searchFilters.experience = [];
    searchFilters.remote = false;
    await getJobs();
  };

  const getJobs = async () => {
    requestStatus.loading = true;

    let searchParams = new URLSearchParams();
    let urlsParams = {};

    if (queryParams.page > 1) {
      searchParams.set('skip', (queryParams.page - 1) * perPage);
      searchParams.set('top', perPage);

      urlsParams.page = queryParams.page;
    }
    if (queryParams.q) {
      searchParams.set('q', queryParams.q);
      urlsParams.q = queryParams.q;
    }
    if (searchFilters.country.length > 0) {
      searchFilters.country.map((c) => {
        searchParams.append('countries', c);
      });
      urlsParams.country = searchFilters.country;
    }
    if (searchFilters.types.length > 0) {
      searchFilters.types.map((c) => {
        searchParams.append('types', c);
      });
      urlsParams.types = searchFilters.types;
    }

    if (searchFilters.experience.length > 0) {
      searchFilters.experience.map((c) => {
        searchParams.append('experience', c);
      });
      urlsParams.experience = searchFilters.experience;
    }

    if (searchFilters.remote) {
      searchParams.append('remote', searchFilters.remote);
      urlsParams.remote = searchFilters.remote;
    }

    const searchQuery = searchParams.toString();

    const response = await fetch(`${apiUrl}${searchQuery}`);
    const result = await response.json();

    data = result.data;
    console.log(data);

    data.jobs.forEach((j) => {
      const newDate = new Date(j.publishedDate * 1000);

      j.publishedDate = `${newDate.getUTCDate()} ${monthNames[newDate.getMonth()]} ${newDate.getUTCFullYear()}`;
    });

    requestStatus.loading = false;

    // $goto('', { ...urlsParams });

    window.location.href = '/jobs?=' + +encodeURIComponent(queryParams);
  };

  onMount(async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    queryParams = {
      country: params.country ? params.country.split(',') : [],
      types: params.types ? params.types.split(',') : [],
      experience: params.experience ? params.experience.split(',') : [],
      remote: params.remote ? params.remote : false,
      page: params.page ? params.page : 1,
      q: params.q ? params.q : '',
    };

    // filters to apply
    searchFilters = {
      country: queryParams.country,
      types: queryParams.types,
      experience: queryParams.experience,
      remote: queryParams.remote,
    };

    try {
      await getJobs();
    } catch (e) {
      requestStatus.error = true;
      requestStatus.loading = false;
    }
  });
</script>

<div id="jobs">
  <div class="shadow-xl flex items-start relative py-40">
    <img class="absolute inset-0 h-full w-full object-cover" src="/assets/textBackground.png" alt="" />

    <h1 class="text-gray-900 text-center w-full text-5xl relative">Find your dream job</h1>
  </div>
</div>
<div class="bg-gray-50">
  <div class="max-w-6xl mx-auto -mt-14 relative px-4">
    <div class="bg-white py-8 flex items-center rounded-md shadow-sm w-full z-20 px-4">
      <form class="grid md:grid-cols-8 gap-6 w-full" on:submit|preventDefault={async () => await searchJobs()}>
        <div class="w-full md:col-span-7">
          <div class="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              name="q"
              bind:value={queryParams.q}
              id="q"
              class="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              placeholder="Search by keyword" />
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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
        </div>

        <div class="w-full md:col-span-1 flex items-center">
          <button
            type="submit"
            class="whitespace-nowrap border border-transparent rounded-md shadow-sm py-1 px-3  flex w-full items-center justify-center text-base font-medium text-white bg-blue-500">
            Search
          </button>
        </div>
      </form>
    </div>
  </div>

  {#if requestStatus.loading}
    <div class="bg-gray-50 h-72 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16 text-yellow-400 animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    </div>
  {/if}

  {#if !requestStatus.loading && requestStatus.error}
    <div class="bg-gray-50 h-72 flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16 text-yellow-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <h1 class="text-gray-900 text-2xl font-bold">Something went wrong try refresh the page</h1>
    </div>
  {/if}

  {#if data && !requestStatus.loading}
    <div class="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto">
      <div class="col-span-1 lg:col-span-3">
        <div class="py-4">
          <!-- Job Lists -->
          <div id="jobList" class="mt-12 px-4">
            <h1 class="text-bold text-gray-900">Results: {data.count}</h1>
            <ul>
              {#each data.jobs as job}
                <li class="bg-white my-6 p-2 shadow-md rounded-md hover:bg-gray-50">
                  <div class="block">
                    <div class="flex items-center px-4 py-4 sm:px-6">
                      <div class="min-w-0 flex-1 flex items-center">
                        <div class="flex-shrink-0 border-gray-200 border h-24 w-24 hidden md:block">
                          <img
                            class="w-full h-full object-contain"
                            src={job.logoUrl}
                            alt={job.companyName}
                            loading="lazy" />
                        </div>
                        <div class="min-w-0 w-full flex-1 px-4 md:grid md:grid-cols-6 md:gap-4">
                          <div class="col-span-5">
                            <h1 class="font-bold text-blue-500 capitalize ">
                              {job.companyName}
                            </h1>
                            <h1 class="font-bold text-gray-900 capitalize text-2xl">
                              {@html job.title}
                            </h1>

                            {#if job.descriptionHighlight}
                              <p class="text-gray-900 text-sm">
                                {@html job.descriptionHighlight}
                              </p>
                            {/if}
                            <p class="mt-2 flex items-center text-sm text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span class="truncate">{@html job.location}, {@html job.country.name}</span>
                            </p>

                            <p class="mt-2 flex items-center text-sm text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <span>{job.type.name}</span>
                            </p>
                          </div>

                          <div class="flex flex-col col-span-1 justify-between items-end">
                            <p class="text-sm text-gray-500 text-center">
                              {job.publishedDate}
                            </p>

                            <a
                              href={job.hostedUrl}
                              class="whitespace-nowrap border flex mt-2 justify-center w-full border-transparent rounded-md shadow-sm py-1 px-4 text-base font-medium text-white bg-blue-500">
                              Apply</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
      {#if data && !requestStatus.loading}
        <div class="hidden col-span-1 lg:block mt-20 bg-white shadow-md rounded-md self-start my-6 w-full  p-4">
          <div>
            <div class="flex justify-between">
              <h1 class="font-bold text-gray-900">Filters</h1>
              <button class="font-bold text-gray-500 text-sm" on:click={async () => await clearAll()}>Clear all</button>
            </div>
            {#if data.countries}
              <div>
                <h4 class="font-bold text-gray-500 text-sm mt-4 cursor-pointer">Countries</h4>
                <div>
                  {#each data.countries.slice(0, numberOfFacets) as country}
                    <div class="w-full inline-flex items-center justify-between">
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            class="form-checkbox"
                            bind:group={searchFilters.country}
                            value={country.key}
                            checked={searchFilters.country.includes(country.key)} />
                          <span class="text-sm ml-1 text-gray-500">{country.key}</span>
                        </label>
                      </div>
                      <span class="text-sm ml-1 text-gray-500">({country.value})</span>
                    </div>
                  {/each}
                  {#if data.countries.length > numberOfFacets}
                    <button
                      class="text-yellow-500 ml-auto block text-sm"
                      on:click={() => (filtersToggle.countries = !filtersToggle.countries)}>Show More</button>
                  {/if}
                </div>

                {#if filtersToggle.countries}
                  <div transition:slide>
                    {#each data.countries.slice(numberOfFacets) as country}
                      <div class="w-full inline-flex items-center justify-between">
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              class="form-checkbox"
                              bind:group={searchFilters.country}
                              value={country.key}
                              checked={searchFilters.country.includes(country.key)} />
                            <span class="text-sm ml-1 text-gray-500">{country.key}</span>
                          </label>
                        </div>
                        <span class="text-sm ml-1 text-gray-500">({country.value})</span>
                      </div>
                    {/each}
                  </div>
                {/if}
              </div>
            {/if}
            {#if data.types}
              <div>
                <h4 class="font-bold text-gray-500 text-sm mt-4 cursor-pointer">Job type</h4>
                <div>
                  {#each data.types.slice(0, numberOfFacets) as jobType}
                    <div class="w-full inline-flex items-center justify-between">
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            class="form-checkbox"
                            bind:group={searchFilters.types}
                            value={jobType.key}
                            checked={searchFilters.types.includes(jobType.key)} />
                          <span class="text-sm ml-1 text-gray-500">{jobType.key}</span>
                        </label>
                      </div>
                      <span class="text-sm ml-1 text-gray-500">({jobType.value})</span>
                    </div>
                  {/each}
                  {#if data.types.length > numberOfFacets}
                    <button
                      class="text-yellow-500 ml-auto block text-sm"
                      on:click={() => (filtersToggle.types = !filtersToggle.types)}>Show More</button>
                  {/if}
                </div>

                {#if filtersToggle.types}
                  <div transition:slide>
                    {#each data.types.slice(numberOfFacets) as jobType}
                      <div class="w-full inline-flex items-center justify-between">
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              class="form-checkbox"
                              bind:group={searchFilters.types}
                              value={jobType.key}
                              checked={searchFilters.types.includes(jobType.key)} />
                            <span class="text-sm ml-1 text-gray-500">{jobType.key}</span>
                          </label>
                        </div>
                        <span class="text-sm ml-1 text-gray-500">({jobType.value})</span>
                      </div>
                    {/each}
                  </div>
                {/if}
              </div>
            {/if}

            {#if data.experience}
              <div>
                <h4 class="font-bold text-gray-500 text-sm mt-4 cursor-pointer">Experience</h4>
                <div>
                  {#each data.experience.slice(0, numberOfFacets) as experience}
                    <div class="w-full inline-flex items-center justify-between">
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            class="form-checkbox"
                            bind:group={searchFilters.experience}
                            value={experience.key}
                            checked={searchFilters.experience.includes(experience.key)} />
                          <span class="text-sm ml-1 text-gray-500">{experience.key}</span>
                        </label>
                      </div>
                      <span class="text-sm ml-1 text-gray-500">({experience.value})</span>
                    </div>
                  {/each}
                  {#if data.experience.length > numberOfFacets}
                    <button
                      class="text-yellow-500 ml-auto block text-sm"
                      on:click={() => (filtersToggle.experience = !filtersToggle.experience)}>Show More</button>
                  {/if}
                </div>

                {#if filtersToggle.experience}
                  <div transition:slide>
                    {#each data.experience.slice(numberOfFacets) as experience}
                      <div class="w-full inline-flex items-center justify-between">
                        <div>
                          <label>
                            <input
                              type="checkbox"
                              class="form-checkbox"
                              bind:group={searchFilters.types}
                              value={experience.key}
                              checked={searchFilters.types.includes(experience.key)} />
                            <span class="text-sm ml-1 text-gray-500">{experience.key}</span>
                          </label>
                        </div>
                        <span class="text-sm ml-1 text-gray-500">({experience.value})</span>
                      </div>
                    {/each}
                  </div>
                {/if}
              </div>
            {/if}

            <div class="flex justify-between items-center my-3">
              <h4 class="font-bold text-gray-500 text-sm">Remote</h4>
              <button
                on:click={() => (searchFilters.remote = !searchFilters.remote)}
                type="button"
                class="bg-gray-200 relative inline-flex flex-shrink-0 h-5 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                class:bg-blue-500={searchFilters.remote}
                role="switch">
                <span
                  class="translate-x-0 pointer-events-none inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                  class:translate-x-5={searchFilters.remote} />
              </button>
            </div>
            <button
              on:click={async () => await searchJobs()}
              type="submit"
              class="whitespace-nowrap text-sm font-medium border bg-white hover:bg-gray-50 inline-flex justify-center w-full mt-2 py-1 rounded-md text-gray-500">
              Apply Filter
            </button>
          </div>
        </div>
      {/if}
    </div>
  {/if}
</div>

<div class="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto">
  <div class="col-span-1 lg:col-span-3">
    {#if data && !requestStatus.loading}
      <Pagination
        bind:current={queryParams.page}
        num_items={data.count}
        per_page={perPage}
        on:pageChange={async () => await getJobs()} />
    {/if}
  </div>
</div>
