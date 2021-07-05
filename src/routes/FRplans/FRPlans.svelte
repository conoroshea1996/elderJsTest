<script>
  import Frfaq from '../../components/FAQ/FRFAQ.svelte';
  import FRPricingPlans from '../../components/Plans/FRPricingPlans.svelte';
</script>

<FRPricingPlans hydrate-client={{}} />

<div class="max-w-2xl mx-auto bg-white py-16 sm:px-6 lg:max-w-7xl lg:px-4">
  <h1 class="text-center text-4xl pb-16">Comparaison des fonctionnalités</h1>
  <div class="space-y-24 lg:hidden">
    <section>
      <div class="px-4 mb-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Entrée</h2>
        <p class="mt-4">
          <span class="text-4xl font-bold font-rozanonva text-gray-900">€ 45</span>
          <span class="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a
          href="#"
          class="mt-6 block border border-gray-800 rounded-md bg-gray-900 w-full py-2 text-sm font-medium text-white text-center hover:bg-gray-900"
          >Publier 3 emplois</a>
      </div>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Caractéristiques essentielles</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Page des carrières de marque</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Intégration du Job Board</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Références d'employés</th>
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
              >Formulaires de rétroaction</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Utilisateurs illimités</th>
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
              >Base de données de candidats illimitée</th>
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
          >Fonctionnalités avancées</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Planification des entretiens</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Formulaires de candidature multilingues</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Accès à l'API Jobs</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Intégrations</th>
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
          >Service et assistance</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Service</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Centre d'aide</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Assistance par chat</th>
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
              >Gestionnaire de compte dédié</th>
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
              >Importation de données standard</th>
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
          >Sécurité</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Sécurité</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Sécurité et conformité GDPR</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Collecte de données EEO</th>
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
              >Authentification à deux facteurs</th>
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
          >Publier 3 emplois</a>
      </div>
    </section>
    <section>
      <div class="px-4 mb-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Gros</h2>
        <p class="mt-4">
          <span class="text-4xl font-bold font-rozanonva text-gray-900">€ 95</span>
          <span class="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a
          href="#"
          class="mt-6 block border border-gray-800 rounded-md bg-gray-900 w-full py-2 text-sm font-medium text-white text-center hover:bg-gray-900"
          >Publier 6 emplois</a>
      </div>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Caractéristiques essentielles</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Page des carrières de marque</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Intégration du Job Board</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Références d'employés</th>
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
              >Formulaires de rétroaction</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Utilisateurs illimités</th>
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
              >Base de données de candidats illimitée</th>
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
          >Fonctionnalités avancées</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Planification des entretiens</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Formulaires de candidature multilingues</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Accès à l'API Jobs</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Intégrations</th>
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
          >Service et assistance</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Service</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Centre d'aide</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Assistance par chat</th>
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
              >Gestionnaire de compte dédié</th>
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
              >Importation de données standard</th>
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
          >Sécurité</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Sécurité</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Sécurité et conformité GDPR</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Collecte de données EEO</th>
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
              >Authentification à deux facteurs</th>
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
          >Publier 6 emplois</a>
      </div>
    </section>
    <section>
      <div class="px-4 mb-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Super</h2>
        <p class="mt-4">
          <span class="text-4xl font-bold font-rozanonva text-blue-500">€ 140</span>
          <span class="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a
          href="#"
          class="mt-6 block border border-blue-500 rounded-md bg-blue-500 w-full py-2 text-sm font-medium text-white text-center"
          >Publier 12 emplois</a>
      </div>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Caractéristiques essentielles</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Page des carrières de marque</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Intégration du Job Board</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Références d'employés</th>
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
              >Formulaires de rétroaction</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Utilisateurs illimités</th>
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
              >Base de données de candidats illimitée</th>
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
          >Fonctionnalités avancées</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Planification des entretiens</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Formulaires de candidature multilingues</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Accès à l'API Jobs</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Intégrations</th>
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
          >Service et assistance</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Service</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Centre d'aide</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Assistance par chat</th>
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
              >Gestionnaire de compte dédié</th>
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
              >Importation de données standard</th>
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
          >Sécurité</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Sécurité</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Sécurité et conformité GDPR</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Collecte de données EEO</th>
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
              >Authentification à deux facteurs</th>
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
          >Publier 12 emplois</a>
      </div>
    </section>
    <section>
      <div class="px-4 mb-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Méga</h2>
        <p class="mt-4">
          <span class="text-4xl font-bold font-rozanonva text-gray-900">€ 235</span>
          <span class="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a
          href="#"
          class="mt-6 block border border-gray-800 rounded-md bg-gray-900 w-full py-2 text-sm font-medium text-white text-center hover:bg-gray-900"
          >Publier 20 emplois</a>
      </div>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Fonctionnalités avancées</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Page des carrières de marque</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Intégration du Job Board</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Références d'employés</th>
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
              >Formulaires de rétroaction</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Utilisateurs illimités</th>
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
              >Base de données de candidats illimitée</th>
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
          >Fonctionnalités avancées</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Planification des entretiens</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Formulaires de candidature multilingues</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Accès à l'API Jobs</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Intégrations</th>
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
          >Service et assistance</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Service</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Centre d'aide</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Assistance par chat</th>
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
              >Gestionnaire de compte dédié</th>
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
              >Importation de données standard</th>
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
          >Sécurité</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Sécurité</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Sécurité et conformité GDPR</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Collecte de données EEO</th>
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
              >Authentification à deux facteurs</th>
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
          >Publier 20 emplois</a>
      </div>
    </section>
    <section>
      <div class="px-4 mb-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">Entreprise</h2>
        <p class="mt-4">
          <span class="text-4xl font-bold font-rozanonva text-gray-900">€ 335</span>
          <span class="text-base font-medium text-gray-500">/mo</span>
        </p>
        <a
          href="#"
          class="mt-6 block border border-gray-800 rounded-md bg-gray-900 w-full py-2 text-sm font-medium text-white text-center hover:bg-gray-900"
          >Contactez-nous</a>
      </div>
      <table class="w-full">
        <caption class="border-t border-gray-100 py-3 px-4 text-sm font-bold font-rozanonva text-gray-900 text-left"
          >Caractéristiques essentielles</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Page des carrières de marque</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Intégration du Job Board</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Références d'employés</th>
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
              >Formulaires de rétroaction</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Utilisateurs illimités</th>
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
              >Base de données de candidats illimitée</th>
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
          >Fonctionnalités avancées</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Feature</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Included</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Planification des entretiens</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Formulaires de candidature multilingues</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Accès à l'API Jobs</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Intégrations</th>
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
          >Service et assistance</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Service</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Centre d'aide</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Assistance par chat</th>
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
              >Gestionnaire de compte dédié</th>
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
              >Importation de données standard</th>
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
          >Sécurité</caption>
        <thead
          ><tr
            ><th class="sr-only font-rozanonva font-bold" scope="col">Sécurité</th>
            <th class="sr-only font-rozanonva font-bold" scope="col">Support</th></tr
          ></thead>
        <tbody
          ><tr
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row"
              >Sécurité et conformité GDPR</th>
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
            ><th class="py-5 px-4 text-sm font-normal text-gray-500 text-left" scope="row">Collecte de données EEO</th>
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
              >Authentification à deux facteurs</th>
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
          >Contactez-nous</a>
      </div>
    </section>
  </div>
  <div class="hidden lg:block">
    <table class="w-full h-px table-fixed">
      <caption class="sr-only font-rozanonva font-bold">Pricing plan comparison</caption>
      <thead
        ><tr class="border-t border-gray-100"
          ><th class="py-3 pl-3 w-1/4  text-sm font-extrabold text-gray-900 text-left" scope="col"
            >Caractéristiques essentielles</th>
          <th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Entrée</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Gros</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Super</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Méga</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Entreprise</th></tr
        ></thead>
      <tbody
        ><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left " scope="row"
            >Page des carrières de marque</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left " scope="row"
            >Intégration du Job Board</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left " scope="row"
            >Références d'employés</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left " scope="row"
            >Formulaires de rétroaction</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left " scope="row"
            >Utilisateurs illimités</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left " scope="row"
            >Base de données de candidats illimitée</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr>
        <tr class="border-t border-gray-100"
          ><td class="py-3 pl-4 w-1/4 text-sm font-extrabold text-gray-900 text-left">Fonctionnalités avancées</td>
          <th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Entrée</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Gros</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Super</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Méga</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Entreprise</th></tr>
        <tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row"
            >Planification des entretiens</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row"
            >Formulaires de candidature multilingues</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Accès à l'API Jobs</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Intégrations</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr>
        <tr class="border-t border-gray-100"
          ><td class="py-3 pl-4 w-1/4 text-sm font-extrabold text-gray-900 text-left">Service et assistance</td>
          <th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Entrée</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Gros</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Super</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Méga</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Entreprise</th></tr>
        <tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Centre d'aide</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row">Assistance par chat</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row"
            >Gestionnaire de compte dédié</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row"
            >Importation de données standard</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr>
        <tr class="border-t border-gray-100"
          ><td class="py-3 pl-4 w-1/4  text-sm font-extrabold text-gray-900 text-left">Sécurité</td>
          <th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Entrée</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Gros</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Super</th><th
            class="py-3 pl-4 text-sm font-medium text-gray-900 text-left"
            scope="col">Méga</th
          ><th class="py-3 pl-4 text-sm font-medium text-gray-900 text-left" scope="col">Entreprise</th></tr>
        <tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row"
            >Sécurité et conformité GDPR</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row"
            >Collecte de données EEO</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr><tr class="hover:bg-gray-50 rounded-md"
          ><th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left" scope="row"
            >Authentification à deux facteurs</th>
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
            <span class="sr-only font-rozanonva font-bold">Included in Entrée Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Gros Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Méga Hive</span></td
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
            <span class="sr-only font-rozanonva font-bold">Included in Entreprise Hive</span></td>
        </tr></tbody>
      <tfoot
        ><tr class="text-white"
          ><th class="sr-only font-rozanonva font-bold" scope="row">Choose your plan</th>
          <td class="pt-5 px-6"
            ><a href="#" class="block w-full bg-gray-900 text-sm font-medium text-center py-2 rounded-md"
              >Publier 3 emplois</a
            ></td>
          <td class="pt-5 px-6"
            ><a href="#" class="block w-full bg-gray-900 text-sm font-medium text-center py-2 rounded-md"
              >Publier 6 emplois</a
            ></td>
          <td class="pt-5 px-6"
            ><a href="#" class="block w-full bg-blue-500 text-sm font-medium text-center py-2 rounded-md"
              >Publier 12 emplois</a
            ></td>
          <td class="pt-5 px-6"
            ><a href="#" class="block w-full bg-gray-900 text-sm font-medium text-center py-2 rounded-md"
              >Publier 20 emplois</a
            ></td>
          <td class="pt-5 px-6"
            ><a href="#" class="block w-full bg-gray-900 text-sm font-medium text-center py-2 rounded-md"
              >Contactez-nous</a
            ></td
          ></tr
        ></tfoot>
    </table>
  </div>
</div>

<!-- <FAQ  /> -->
<Frfaq hydrate-client={{}} />
