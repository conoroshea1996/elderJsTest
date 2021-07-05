<script>
  import FAQ from '../../components/FAQ/FAQ.svelte';
  import PricingPlans from '../../components/PricingPlans.svelte';
</script>

<PricingPlans hydrate-client={{}} />

<div class="max-w-2xl mx-auto bg-white py-16 sm:px-6 lg:max-w-7xl lg:px-4">
  <h1 class="text-center text-4xl pb-16">Feature Comparsion</h1>
  <div class="space-y-24 lg:hidden">
    <section>
      <div class="px-4 mb-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Starter</h2>
        <p class="mt-4">
          <span class="text-4xl font-bold font-rozanonva text-gray-900">$ 49</span>
          <span class="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a
          href="#"
          class="mt-6 block border border-gray-800 rounded-md bg-gray-900 w-full py-2 text-sm font-medium text-white text-center hover:bg-gray-900"
          >Post 3 Jobs</a>
      </div>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Essential Features</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Branded careers page</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Job board integration</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Employee referrals</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Feedback forms</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Unlimited users</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Unlimited candidate database</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Advanced Features</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Interview scheduling</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Multilingual application forms</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Agency portal</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Jobs API access</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Integrations</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Service and support</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Service</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Help centre</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Chat support</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Dedicated account manager
            </th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Standard data import</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Security</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Security</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Security and GDPR compliance</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">EEO data collection</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Two factor authentication</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <div class="px-4 pt-5">
        <a
          href="#"
          class="mt-2 block border border-gray-800 rounded-md bg-gray-900 w-full py-2 text-sm font-medium text-white text-center hover:bg-gray-900"
          >Post 3 Jobs</a>
      </div>
    </section>
    <section>
      <div class="px-4 mb-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Big</h2>
        <p class="mt-4">
          <span class="text-4xl font-bold font-rozanonva text-gray-900">$ 99</span>
          <span class="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a
          href="#"
          class="mt-6 block border border-gray-800 rounded-md bg-gray-900 w-full py-2 text-sm font-medium text-white text-center hover:bg-gray-900"
          >Post 6 Jobs</a>
      </div>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Essential Features</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Branded careers page</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Job board integration</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Employee referrals</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Feedback forms</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Unlimited users</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Unlimited candidate database</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class=" border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Advanced Features</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Interview scheduling</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Multilingual application forms</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Agency portal</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Jobs API access</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Integrations</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Service and support</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Service</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Help centre</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Chat support</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Dedicated account manager
            </th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Standard data import</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class=" border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Security</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Security</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Security and GDPR compliance</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">EEO data collection</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Two factor authentication</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <div class="border-t border-gray-100 px-4 pt-5">
        <a
          href="#"
          class="mt-2 block border border-gray-800 rounded-md bg-gray-900 w-full py-2 text-sm font-medium text-white text-center hover:bg-gray-900"
          >Post 6 Jobs</a>
      </div>
    </section>
    <section>
      <div class="px-4 mb-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Super</h2>
        <p class="mt-4">
          <span class="text-4xl font-bold font-rozanonva text-blue-500">$ 149</span>
          <span class="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a
          href="#"
          class="mt-6 block border border-blue-500 rounded-md bg-blue-500 w-full py-2 text-sm font-medium text-white text-center"
          >Post 12 Jobs</a>
      </div>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Essential Features</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Branded careers page</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Job board integration</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Employee referrals</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Feedback forms</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Unlimited users</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Unlimited candidate database</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Advanced Features</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Interview scheduling</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Multilingual application forms</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Agency portal</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Jobs API access</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Integrations</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Service and support</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Service</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Help centre</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Chat support</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Dedicated account manager
            </th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Standard data import</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Security</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Security</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Security and GDPR compliance</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">EEO data collection</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Two factor authentication</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <div class="border-t border-gray-100 px-4 pt-5">
        <a
          href="#"
          class="mt-2 block border border-blue-500 rounded-md bg-blue-500 w-full py-2 text-sm font-medium text-white text-center"
          >Post 12 Jobs</a>
      </div>
    </section>
    <section>
      <div class="px-4 mb-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Mega</h2>
        <p class="mt-4">
          <span class="text-4xl font-bold font-rozanonva text-gray-900">$ 249</span>
          <span class="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a
          href="#"
          class="mt-6 block border border-gray-800 rounded-md bg-gray-900 w-full py-2 text-sm font-medium text-white text-center hover:bg-gray-900"
          >Post 20 Jobs</a>
      </div>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Advanced Features</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Branded careers page</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Job board integration</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Employee referrals</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Feedback forms</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Unlimited users</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Unlimited candidate database</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Advanced Features</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Interview scheduling</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Multilingual application forms</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Agency portal</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Jobs API access</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Integrations</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Service and support</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Service</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Help centre</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Chat support</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Dedicated account manager
            </th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Standard data import</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Security</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Security</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Security and GDPR compliance</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">EEO data collection</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Two factor authentication</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <div class="border-t border-gray-100 px-4 pt-5">
        <a
          href="#"
          class="mt-2 block border border-gray-800 rounded-md bg-gray-900 w-full py-2 text-sm font-medium text-white text-center hover:bg-gray-900"
          >Post 20 Jobs</a>
      </div>
    </section>
    <section>
      <div class="px-4 mb-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Enterprise</h2>
        <p class="mt-4">
          <span class="text-4xl font-bold font-rozanonva text-gray-900">$ 349</span>
          <span class="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a
          href="#"
          class="mt-6 block border border-gray-800 rounded-md bg-gray-900 w-full py-2 text-sm font-medium text-white text-center hover:bg-gray-900"
          >Contact Us</a>
      </div>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Essential Features</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Branded careers page</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Job board integration</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Employee referrals</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Feedback forms</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Unlimited users</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Unlimited candidate database</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Advanced Features</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Interview scheduling</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Multilingual application forms</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Agency portal</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Jobs API access</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Integrations</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Service and support</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Service</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Help centre</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Chat support</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Dedicated account manager
            </th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Standard data import</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Security</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Security</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Security and GDPR compliance</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">EEO data collection</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Two factor authentication</th>
            <td class="py-5 pr-4"
              ><svg
                class="ml-auto h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                ><path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" /></svg>
              <span class="sr-only font-rozanonva font-bold">Included in Essential</span></td>
          </tr></tbody>
      </table>
      <div class="border-t border-gray-100 px-4 pt-5">
        <a
          href="#"
          class="mt-2 block border border-gray-800 rounded-md bg-gray-900 w-full py-2 text-sm font-medium text-white text-center hover:bg-gray-900"
          >Contact Us</a>
      </div>
    </section>
  </div>
  <div class="hidden lg:block">
    <table class="w-full h-px table-fixed">
      <caption class="sr-only font-rozanonva font-bold">Pricing plan comparison</caption>
      <thead
        ><tr class="border-t border-gray-100"
          ><th class="py-3 pl-3 w-1/4  text-sm font-extrabold text-gray-900 text-left" scope="col"
            >Essential Features</th>
          <th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Starter</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Big</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Super</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Mega</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Enterprise</th></tr
        ></thead>
      <tbody
        ><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left " scope="row">Branded careers page</th>
          <td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left " scope="row"
            >Job board integration</th>
          <td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left " scope="row">Employee referrals</th>
          <td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left " scope="row">Feedback forms</th>
          <td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left " scope="row">Unlimited users</th>
          <td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left " scope="row"
            >Unlimited candidate database</th>
          <td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr>
        <tr class="border-t border-gray-100"
          ><td class="py-3 pl-4 w-1/4 text-sm font-extrabold text-gray-900 text-left">Advanced Features</td>
          <th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Starter</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Big</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Super</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Mega</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Enterprise</th></tr>
        <tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Interview scheduling</th>
          <td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row"
            >Multilingual application forms</th>
          <td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Agency portal</th>
          <td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Jobs API access</th>
          <td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Integrations</th>
          <td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr>
        <tr class="border-t border-gray-100"
          ><td class="py-3 pl-4 w-1/4 text-sm font-extrabold text-gray-900 text-left">Service and support</td>
          <th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Starter</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Big</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Super</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Mega</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Enterprise</th></tr>
        <tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Help centre</th>
          <td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Chat support</th>
          <td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row"
            >Dedicated account manager
          </th>
          <td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Standard data import</th>
          <td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr>
        <tr class="border-t border-gray-100"
          ><td class="py-3 pl-4 w-1/4  text-sm font-extrabold text-gray-900 text-left">Security</td>
          <th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Starter</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Big</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Super</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Mega</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Enterprise</th></tr>
        <tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row"
            >Security and GDPR compliance</th>
          <td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">EEO data collection</th>
          <td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row"
            >Two factor authentication</th>
          <td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Starter Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class=" h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Big Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Super Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Mega Hive</span></td
          ><td class="py-5 px-6"
            ><svg
              class="h-5 w-5 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              ><path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" /></svg>
            <span class="sr-only font-rozanonva font-bold">Included in Enterprise Hive</span></td>
        </tr></tbody>
      <tfoot
        ><tr class="text-white"
          ><th class="sr-only font-rozanonva font-bold" scope="row">Choose your plan</th>
          <td class="pt-5 px-6"
            ><a href="#" class="block w-full bg-gray-900 text-sm font-medium text-center py-2 rounded-md">Post 3 Jobs</a
            ></td>
          <td class="pt-5 px-6"
            ><a href="#" class="block w-full bg-gray-900 text-sm font-medium text-center py-2 rounded-md">Post 6 Jobs</a
            ></td>
          <td class="pt-5 px-6"
            ><a href="#" class="block w-full bg-blue-500 text-sm font-medium text-center py-2 rounded-md"
              >Post 12 Jobs</a
            ></td>
          <td class="pt-5 px-6"
            ><a href="#" class="block w-full bg-gray-900 text-sm font-medium text-center py-2 rounded-md"
              >Post 20 Jobs</a
            ></td>
          <td class="pt-5 px-6"
            ><a href="#" class="block w-full bg-gray-900 text-sm font-medium text-center py-2 rounded-md">Contact Us</a
            ></td
          ></tr
        ></tfoot>
    </table>
  </div>
</div>

<!-- FAQs -->
<FAQ hydrate-client={{}} />
