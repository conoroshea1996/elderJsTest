<script>
  let activePricing = {
    currency: 'USD',
    billing: 'mo',
  };

  //   const currencyTypes = {
  //     euro: "EUR",
  //     dollar: "USD",
  //     pound: "GBP",
  //   };

  const pricePlans = {
    USD: {
      starterHive: {
        mo: 49,
        yr: 490,
      },
      bigHive: {
        mo: 99,
        yr: 990,
      },
      superHive: {
        mo: 149,
        yr: 1490,
      },
      megaHive: {
        mo: 249,
        yr: 2490,
      },
      enterprise: {
        mo: 349,
        yr: 3490,
      },
    },

    EUR: {
      starterHive: {
        mo: 45,
        yr: 450,
      },
      bigHive: {
        mo: 95,
        yr: 950,
      },
      superHive: {
        mo: 140,
        yr: 1400,
      },
      megaHive: {
        mo: 235,
        yr: 2350,
      },
      enterprise: {
        mo: 335,
        yr: 3350,
      },
    },

    GBP: {
      starterHive: {
        mo: 39,
        yr: 390,
      },
      bigHive: {
        mo: 79,
        yr: 790,
      },
      superHive: {
        mo: 120,
        yr: 1200,
      },
      megaHive: {
        mo: 195,
        yr: 1950,
      },
      enterprise: {
        mo: 300,
        yr: 3000,
      },
    },
  };

  export let prices;

  $: currencySymbol = activePricing.currency === 'USD' ? '$' : activePricing.currency === 'EUR' ? '€' : '£';

  $: prices = {
    starter: `${currencySymbol} ${pricePlans[activePricing.currency]['starterHive'][activePricing.billing]}`,
    big: `${currencySymbol} ${pricePlans[activePricing.currency]['bigHive'][activePricing.billing]}`,
    super: `${currencySymbol} ${pricePlans[activePricing.currency]['superHive'][activePricing.billing]}`,
    mega: `${currencySymbol} ${pricePlans[activePricing.currency]['megaHive'][activePricing.billing]}`,
    enterprise: `${currencySymbol} ${pricePlans[activePricing.currency]['enterprise'][activePricing.billing]}`,
  };
</script>

<div class="bg-gray-900">
  <div class="max-w-7xl mx-auto pt-24 pb-16 px-4">
    <div class="sm:flex sm:flex-col sm:align-center">
      <h1 class="text-5xl text-white sm:text-center">Pricing Plans</h1>
      <p class="mt-5 text-xl text-gray-500 sm:text-center">
        Recruiting software that helps you find and hire the best candidates. <br /> Choose from any of our pricing plans
        that work to fit you as you grow.
      </p>
      <div class="relative mt-6 bg-white bg-opacity-10 rounded-lg p-1 flex self-center sm:mt-8 text-white">
        <button
          type="button"
          on:click={() => (activePricing.billing = 'mo')}
          class:bg-white={activePricing.billing == 'mo'}
          class:text-gray-700={activePricing.billing == 'mo'}
          class="relative rounded-md shadow-sm py-2 w-1/2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 sm:w-auto sm:px-8 bg-white text-gray-700"
          >Monthly Billing</button>
        <button
          type="button"
          on:click={() => (activePricing.billing = 'yr')}
          class:bg-white={activePricing.billing == 'yr'}
          class:text-gray-700={activePricing.billing == 'yr'}
          class="ml-0.5 relative border border-transparent rounded-md py-2 w-1/2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 sm:w-auto sm:px-8"
          >Yearly Billing</button>
      </div>
    </div>
    <div
      class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-5 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-5">
      <div class="border border-gray-700 rounded-lg divide-y divide-gray-700">
        <div class="px-5 py-6">
          <h2 class="text-md leading-6 font-medium text-gray-500">Starter</h2>
          <h2 class="mt-4 text-xl text-white">3 Active Jobs</h2>
          <p class="mt-8">
            <span class="text-4xl font-bold font-rozanonva text-white">
              {prices.starter}
            </span>
            <span class="text-base font-medium text-gray-500">
              /{activePricing.billing}
            </span>
          </p>
          <a
            href="#"
            class="mt-8 block w-full bg-gray-700 border border-transparent rounded-md py-2 text-sm font-medium text-white text-center"
            >Get Started</a>
        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-xs font-bold font-rozanonva text-white tracking-wide uppercase">WHAT'S INCLUDED:</h3>
          <ul class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">All essential features</p>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Help Centre</p>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Chat support</p>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Security and GDPR compliance</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="border border-gray-700 rounded-lg divide-y divide-gray-700">
        <div class="px-5 py-6">
          <h2 class="text-md leading-6 font-medium text-gray-500">Big</h2>
          <h2 class="mt-4 text-xl text-white">6 Active Jobs</h2>
          <p class="mt-8">
            <span class="text-4xl font-bold font-rozanonva text-white">
              {prices.big}
            </span>
            <span class="text-base font-medium text-gray-500">
              /{activePricing.billing}
            </span>
          </p>
          <a
            href="#"
            class="mt-8 block w-full bg-gray-700 border border-transparent rounded-md py-2 text-sm font-medium text-white text-center"
            >Get Started</a>
        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-xs font-bold font-rozanonva  text-white tracking-wide uppercase">
            ALL STARTER FEATURES, PLUS:
          </h3>
          <ul class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">EEO data collection</p>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Interview scheduling</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="border border-gray-700 rounded-lg divide-y divide-gray-200 bg-white bg-opacity-10">
        <div class="px-5 py-6">
          <h2 class="text-md leading-6 font-medium text-gray-500">Super</h2>
          <h2 class="mt-4 text-xl text-white">12 Active Jobs</h2>
          <p class="mt-8">
            <span class="text-4xl font-bold font-rozanonva text-white">
              {prices.super}
            </span>
            <span class="text-base font-medium text-gray-500">
              /{activePricing.billing}
            </span>
          </p>
          <a
            href="#"
            class="mt-8 block w-full bg-blue-500 border border-transparent rounded-md py-2 text-sm font-medium text-white text-center"
            >Get Started</a>
        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-xs font-bold font-rozanonva  text-white tracking-wide uppercase">ALL BIG FEATURES, PLUS:</h3>
          <ul class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Multilingual application forms</p>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Agency portal</p>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Jobs API access</p>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Two factor authentication</p>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Integrations</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="border border-gray-700 rounded-lg divide-y divide-gray-700">
        <div class="px-5 py-6">
          <h2 class="text-md leading-6 font-medium text-gray-500">Mega</h2>
          <h2 class="mt-4 text-xl text-white">20 Active Jobs</h2>
          <p class="mt-8">
            <span class="text-4xl font-bold font-rozanonva text-white">
              {prices.mega}
            </span>
            <span class="text-base font-medium text-gray-500">
              /{activePricing.billing}
            </span>
          </p>
          <a
            href="#"
            class="mt-8 block w-full bg-gray-700 border border-transparent rounded-md py-2 text-sm font-medium text-white text-center"
            >Get Started</a>
        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-xs text-white tracking-wide uppercase">ALL SUPER FEATURES, PLUS:</h3>
          <ul class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Multilingual application forms</p>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Agency portal</p>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Jobs API access</p>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Two factor authentication</p>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Integrations</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="border border-gray-700 rounded-lg divide-y divide-gray-700">
        <div class="px-5 py-6">
          <h2 class="text-md leading-6 font-medium text-gray-500">Enterprise</h2>
          <h2 class="mt-4 text-xl text-white">Over 20 Active Jobs</h2>
          <p class="mt-8">
            <span class="text-4xl font-bold font-rozanonva text-white">
              {prices.enterprise}
            </span>
            <span class="text-base font-medium text-gray-500">
              /{activePricing.billing}
            </span>
          </p>
          <a
            href="#"
            class="mt-8 block w-full bg-gray-700 border border-transparent rounded-md py-2 text-sm font-medium text-white text-center"
            >Contact Us</a>
        </div>
        <div class="pt-6 pb-8 px-6">
          <h3 class="text-xs font-bold font-rozanonva  text-white tracking-wide uppercase">ALL MEGA FEATURES, PLUS</h3>
          <ul class="mt-6 space-y-4">
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Dedicated account manager</p>
            </li>
            <li class="flex space-x-3">
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <p class="text-white">Data import</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
