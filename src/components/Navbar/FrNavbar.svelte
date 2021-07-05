<script>
  import { slide } from 'svelte/transition';

  import { clickOutside } from '../../actions/clickOutside';

  //   $: currentUrls = _currentUrls.map((currentUrlOptions) => ({
  //     name: currentUrlOptions.name,
  //     active: !!$isActive(currentUrlOptions.currentUrl, true) && !featuresMenuOpen,
  //   }));

  let featuresMenuOpen = false;

  let mobileMenuOpen = false;

  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };

  const closeMobileMenu = () => {
    mobileMenuOpen = false;
  };

  //   $beforecurrentUrlChange((event, store) => {
  //     // close menus before changing route
  //     if (mobileMenuOpen) {
  //       mobileMenuOpen = false;
  //     }
  //     if (featuresMenuOpen) {
  //       featuresMenuOpen = false;
  //     }

  //     return true;
  //   });

  export let currentUrl;
  export let isHomePage = currentUrl === '/fr/';
  const isDark = currentUrl === '/fr/tarifs/';
</script>

<div class="transition-colors duration-500" class:dark-mode={isDark} class:light-mode={!isDark}>
  <div>
    <div class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between py-6">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span class="sr-only">Hirehive Recruiting software</span>
              {#if isDark}
                <img class="h-8 w-auto sm:h-10" src="/assets/LogoDark.png" alt="" />
              {:else}
                <img class="h-8 w-auto sm:h-10" src="/assets/Logo.svg" alt="" />
              {/if}
            </a>
          </div>
          <div class="-mr-2 -my-2 lg:hidden">
            <button
              on:click={() => toggleMobileMenu()}
              type="button"
              class="rounded-md p-2 inline-flex items-center justify-center  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              class:dark-mode={isDark}
              class:light-mode={!isDark}
              aria-expanded="false">
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav class="hidden lg:flex lg:flex-1 justify-center">
            <div>
              <button
                type="button"
                on:click={() => (featuresMenuOpen = !featuresMenuOpen)}
                class="group inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
                class:text-blue-500={featuresMenuOpen && !isDark}
                class:text-white={featuresMenuOpen && isDark}
                aria-expanded="false"
                ><span>Fonctionnalités</span>
                <svg
                  class="text-gray-500 ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  ><path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" /></svg
                ></button>

              {#if featuresMenuOpen}
                <div
                  use:clickOutside={() => (featuresMenuOpen = false)}
                  transition:slide={{ duration: 350 }}
                  class="absolute z-50 mt-8 transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 w-full bg-white">
                  <div class="w-full" class:dark-mode={isDark} class:light-mode={!isDark}>
                    <div
                      class="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                      <a
                        href="/recruiting-features/find-candidates"
                        class="-m-3 p-3 flex flex-col justify-between rounded-lg transition ease-in-out duration-150 {isDark
                          ? 'hover:bg-gray-800'
                          : 'hover:bg-gray-50'}"
                        ><div class="flex md:h-full lg:flex-col">
                          <div class="flex-shrink-0">
                            <div
                              class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-navy text-white sm:h-12 sm:w-12">
                              <svg
                                class="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                ><path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                          </div>
                          <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                            <div>
                              <p class="text-base font-medium text-gray-900">Trouvez des candidats</p>
                              <p class="mt-1 text-sm">
                                Touchez un public plus large grâce à la publication automatisée.
                              </p>
                            </div>
                            <p class="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
                              Apprendre encore plus <span aria-hidden="true">→</span>
                            </p>
                          </div>
                        </div>
                      </a>

                      <a
                        href="/recruiting-features/manage-applications"
                        class="-m-3 p-3 flex flex-col justify-between rounded-lg transition ease-in-out duration-150 {isDark
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
                              <p class="text-base font-medium {isDark ? 'text-white' : 'text-gray-900'}">
                                Gérer des applications
                              </p>
                              <p class="mt-1 text-sm">
                                Faites passer vos candidats à travers un pipeline d'embauche clair.
                              </p>
                            </div>
                            <p class="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
                              Apprendre encore plus<span aria-hidden="true">→</span>
                            </p>
                          </div>
                        </div>
                      </a>

                      <a
                        href="/recruiting-features/assess-candidates"
                        class="-m-3 p-3 flex flex-col justify-between rounded-lg transition ease-in-out duration-150 {isDark
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
                              <p class="text-base font-medium {isDark ? 'text-white' : 'text-gray-900'}">
                                Évaluer les candidats
                              </p>
                              <p class="mt-1 text-sm">
                                Ajoutez un nombre illimité d'utilisateurs à votre équipe de recrutement pour un
                                recrutement collaboratif.
                              </p>
                            </div>
                            <p class="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
                              Apprendre encore plus<span aria-hidden="true">→</span>
                            </p>
                          </div>
                        </div>
                      </a>

                      <a
                        href="/recruiting-features/analyse-reports"
                        class="-m-3 p-3 flex flex-col justify-between rounded-lg transition ease-in-out duration-150 {isDark
                          ? 'hover:bg-gray-800'
                          : 'hover:bg-gray-50'}">
                        <div class="flex md:h-full lg:flex-col">
                          <div class="flex-shrink-0">
                            <div
                              class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-yellow-400 text-navy sm:h-12 sm:w-12">
                              <svg
                                class="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                  d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                              </svg>
                            </div>
                          </div>
                          <div class="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                            <div>
                              <p class="text-base font-medium {isDark ? 'text-white' : 'text-gray-900'}">
                                Analyser les rapports
                              </p>
                              <p class="mt-1 text-sm">
                                Passez en revue les données et prenez des décisions de recrutement éclairées basées sur
                                les données.
                              </p>
                            </div>
                            <p class="mt-2 text-sm font-medium text-blue-500 lg:mt-4">
                              Apprendre encore plus<span aria-hidden="true">→</span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class={isDark ? 'bg-gray-800' : 'bg-gray-50'}>
                    <div
                      class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                      <div class="flow-root">
                        <a
                          href="#"
                          class="-m-3 p-3 flex items-center rounded-md text-base font-medium transition ease-in-out duration-150
                                    {isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}
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
                          <span class="ml-3 {isDark ? 'text-white ' : 'text-gray-900'}"
                            >Regardez HireHive en 90 secondes</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              {/if}
            </div>

            <a
              href="/tarifs"
              class="text-base font-medium rounded-md px-6 inline-flex items-center capitalize"
              class:text-white={currentUrl === '/fr/tarifs/'}>
              tarifs
            </a>

            <a
              href="/blog"
              class="text-base font-medium rounded-md px-6 inline-flex items-center capitalize"
              class:text-blue-500={currentUrl === '/fr/blog/'}>
              Blog
            </a>
          </nav>
          <div class="hidden lg:flex items-center justify-end space-x-6 lg:flex-1 lg:w-0">
            <a
              href="#"
              class="whitespace-nowrap text-base font-medium border bg-white  py-2 px-4 rounded-md {isDark
                ? 'text-white bg-opacity-10 border-transparent'
                : 'text-gray-500'}">
              Connexion
            </a>
            {#if !isHomePage}
              <a
                href="https://my.hirehive.io/register"
                class="whitespace-nowrap border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex items-center justify-center text-base font-medium text-white bg-blue-500">
                Inscription
              </a>
            {/if}
          </div>
        </div>
      </div>

      {#if mobileMenuOpen}
        <div
          use:clickOutside={() => closeMobileMenu()}
          transition:slide={{ duration: 350 }}
          class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-40">
          <div
            class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50"
            class:dark-mode={isDark}
            class:light-mode={!isDark}>
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <a href="/">
                  {#if isDark}
                    <img class="h-8 w-auto " src="/assets/LogoDark.png" alt="" />
                  {:else}
                    <img class="h-8 w-auto " src="/assets/Logo.svg" alt="" />
                  {/if}
                </a>
                <div class="-mr-2">
                  <button
                    on:click={() => (mobileMenuOpen = false)}
                    type="button"
                    class="rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500
                              {isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-500 hover:text-gray-500'}">
                    <span class="sr-only">Close menu</span>
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <a
                    href="/[('Navbar.features.findCandidates.currentUrl')}"
                    class="-m-3 p-3 flex items-center rounded-md {isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}">
                    <div
                      class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-yellow-400 text-gray-900 sm:h-12 sm:w-12">
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
                    <span class="ml-3 text-base font-medium {isDark ? 'text-white' : 'text-gray-900'}">
                      Trouvez des candidats
                    </span>
                  </a>

                  <a
                    href="/[('Navbar.features.manageApplications.currentUrl')}"
                    class="-m-3 p-3 flex items-center rounded-md {isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}">
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
                    <span class="ml-3 text-base font-medium {isDark ? 'text-white' : 'text-gray-900'}">
                      Gérer des applications
                    </span>
                  </a>
                  <a
                    href="/[('Navbar.features.assessCandidates.currentUrl')}"
                    class="-m-3 p-3 flex items-center rounded-md {isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}">
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span class="ml-3 text-base font-medium {isDark ? 'text-white' : 'text-gray-900'}">
                      Évaluer les candidats
                    </span>
                  </a>
                  <a
                    href="/[('Navbar.features.analyseReports.currentUrl')}"
                    class="-m-3 p-3 flex items-center rounded-md {isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}">
                    <div
                      class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-yellow-500 text-white sm:h-12 sm:w-12">
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <span class="ml-3 text-base font-medium {isDark ? 'text-white' : 'text-gray-900'}">
                      Analyser les rapports
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div class="py-6 px-5 space-y-6">
              <div class="grid grid-cols-2 gap-y-4 gap-x-8">
                {#each currentUrls as { name, path, active, href }, i}
                  <a
                    {href}
                    class="rounded-md px-6 inline-flex items-center text-lg font-bold capitalize {isDark
                      ? 'text-gray-300'
                      : 'text-gray-500'}"
                    class:text-blue-500={active && !isDark}
                    class:text-white={active && isDark}>
                    {name}
                  </a>
                {/each}
              </div>
              <div>
                <a
                  href="#"
                  class="w-full bg-blue-500 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700">
                  Inscription
                </a>
                <p class="mt-6 text-center text-base font-medium {isDark ? 'text-white' : 'text-gray-500'}">
                  Existing customer?
                  <a href="#" class="text-blue-500"> Log in </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
