<script>
  import FeaturesCard from '../../components/FeaturesCard.svelte';
</script>

<div class="bg-yellow-500 relative">
  <img class="absolute inset-0 h-full w-full object-fill" src="/assets/AnalyseReportsBackground.png" alt="" />
  <div class="mx-auto max-w-5xl py-14  sm:pt-16 lg:pt-20 lg:pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      <div class="z-10 px-2 text-gray-900">
        <p class="mt-4 tracking-tight text-gray-500 font-medium sm:mt-5 lg:mt-6">
          $_('analyseReportsFeaturePage.subHeading')}
        </p>
        <h1 class="mt-6 text-5xl font-bold max-w-xl">$_('analyseReportsFeaturePage.heading')}</h1>

        <p class="mt-8">$_('analyseReportsFeaturePage.info')}</p>
      </div>
    </div>
  </div>
</div>

<div id="features" class="max-w-7xl mx-auto">
  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        $_('analyseReportsFeaturePage.Analytics.title')}
      </h2>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">$_('analyseReportsFeaturePage.Analytics.Track.title')}</p>
          <p class="mt-3 text-base text-gray-500">$_('analyseReportsFeaturePage.Analytics.Track.description')}</p>
          <p class="mt-3 text-base text-gray-500">$_('analyseReportsFeaturePage.Analytics.Track.descriptionTwo')}</p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/TrackApplicationSources.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('analyseReportsFeaturePage.Analytics.Reports.title')}
          </p>

          <p class="mt-3 text-base text-gray-500">$_('analyseReportsFeaturePage.Analytics.Reports.description')}</p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> $_('ReadMore')} </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/ProgressReports.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>

  <!-- Section -->
  <div class="mt-4 py-12">
    <div
      class="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-12 border border-gray-100 overflow-hidden rounded-lg">
      <div class="p-12">
        <h2 class="text-xl font-extrabold text-gray-900 my-4">$_('analyseReportsFeaturePage.Export.title')}</h2>

        <p class="my-4 text-base text-gray-500">$_('analyseReportsFeaturePage.Export.description')}</p>

        <p class="my-4 text-base text-gray-500">$_('analyseReportsFeaturePage.Export.descriptionTwo')}</p>
      </div>

      <div class="px-6 bg-yellow-100">
        <img class="mx-auto" src="/assets/CandidateExport.png" alt="" />
      </div>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        $_('analyseReportsFeaturePage.Compliance.title')}
      </h2>

      <p class="mt-3 max-w-3xl mx-auto text-lg text-gray-500 sm:mt-4">
        $_('analyseReportsFeaturePage.Compliance.subHeading')}
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->
      <div class="w-full lg:w-1/2 rounded-lg overflow-hidden border items-stretch border-gray-100">
        <div class="flex flex-col">
          <div class="bg-white p-6 flex flex-col justify-between">
            <div class="px-10">
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 mt-2">
                  $_('analyseReportsFeaturePage.Compliance.EEO.title')}
                </p>
                <p class="mt-3 text-base text-gray-500">$_('analyseReportsFeaturePage.Compliance.EEO.description')}</p>
                <p class="mt-3 text-base text-gray-500">
                  $_('analyseReportsFeaturePage.Compliance.EEO.descriptionTwo')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full lg:w-1/2">
        <div class="flex flex-col rounded-lg overflow-hidden border items-stretch border-gray-100">
          <div class="bg-white p-6 flex flex-col justify-between">
            <div class="px-10">
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 mt-2">
                  $_('analyseReportsFeaturePage.Compliance.CollectData.title')}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  $_('analyseReportsFeaturePage.Compliance.CollectData.description')}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  $_('analyseReportsFeaturePage.Compliance.CollectData.descriptionTwo')}
                </p>
              </div>
            </div>
          </div>
          <div class="rounded-b-lg mt-4" />
        </div>
      </div>
    </div>
    <div class="w-full mt-12">
      <div class="flex flex-col rounded-lg overflow-hidden border items-stretch border-gray-100">
        <div class="bg-white p-6 flex flex-col justify-between">
          <div class="px-10">
            <div class="block mt-2">
              <p class="text-xl font-semibold text-gray-900 mt-2">
                $_('analyseReportsFeaturePage.Compliance.Automate.title')}
              </p>

              <p class="mt-3 text-base text-gray-500">
                $_('analyseReportsFeaturePage.Compliance.Automate.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
