<script>
  import FeaturesCard from '../../components/FeaturesCard.svelte';
  import FeaturesPanel from '../../components/FeaturesPanel/FeaturesPanel.svelte';
  import SignUpCta from '../../components/SignUpCta.svelte';

  export let request;
</script>

<div class="bg-yello-500 relative">
  <img class="absolute inset-0 h-full w-full object-fill" src="/assets/AnalyseReportsBackground.png" alt="" />
  <div class="mx-auto max-w-5xl py-14  sm:pt-16 lg:pt-20 lg:pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      <div class="z-10 px-2 text-gray-900">
        <p class="mt-4 tracking-tight text-gray-500 font-medium sm:mt-5 lg:mt-6">Hire</p>
        <h1 class="mt-6 text-5xl font-bold max-w-xl">Analyse reports</h1>
        <p class="mt-8">
          Track and analyse all recruiting data within HireHive. Review data and make informed data driven recruiting
          decisions. Take manual data entry out of recruiting compliance.
        </p>
      </div>
    </div>
  </div>
</div>

<div id="features" class="max-w-7xl mx-auto">
  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Recruiting analytics & detailed reports
      </h2>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Track application sources</p>
          <p class="mt-3 text-base text-gray-500">
            Find out where your candidates are coming from and what channels are performing best.
          </p>
          <p class="mt-3 text-base text-gray-500">
            Get detailed information for specific jobs and see your conversion rate of applications.
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/TrackApplicationSources.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Progress reports</p>

          <p class="mt-3 text-base text-gray-500">
            See where your candidates are at. Select a job and date range and get detailed information on how many
            candidates are at each stage of the hiring process.
          </p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline">Read more </a>
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
        <h2 class="text-xl font-extrabold text-gray-900 my-4">Candidate export and advanced hiring data reports</h2>

        <p class="my-4 text-base text-gray-500">
          Want to continue working with your data in Excel? No problem, easily export all candidate data to a .csv file.
        </p>

        <p class="my-4 text-base text-gray-500">
          US companies that meet certain criteria are required to submit an EEO-1 report each year. HireHive helps you
          automate this process and allows you to review and export all data collected.
        </p>
      </div>

      <div class="px-6 bg-yellow-100">
        <img class="mx-auto" src="/assets/CandidateExport.png" alt="" />
      </div>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Recruitment Compliance Reports</h2>

      <p class="mt-3 max-w-3xl mx-auto text-lg text-gray-500 sm:mt-4">
        Take manual data entry out of recruiting compliance
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->
      <div class="w-full lg:w-1/2 rounded-lg overflow-hidden border items-stretch border-gray-100">
        <div class="flex flex-col">
          <div class="bg-white p-6 flex flex-col justify-between">
            <div class="px-10">
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 mt-2">EEO and OFCCP</p>
                <p class="mt-3 text-base text-gray-500">
                  If your organisation has more than 15+ staff in the USA or you’re a contractor or subcontractor for
                  the US government, you will need to comply with the EEO laws and OFCCP regulations.
                </p>
                <p class="mt-3 text-base text-gray-500">
                  With HireHive you can collect and track your hiring data, to automatically create compliance reports.
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
                <p class="text-xl font-semibold text-gray-900 mt-2">Collecting data</p>
                <p class="mt-3 text-base text-gray-500">
                  Setting up your company for the EEO survey and including OFCCP reports is just a simple switch in your
                  account settings.
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Then each time you post a job with HireHive your company careers site will display an Equal
                  Opportunity Employer disclaimer at the bottom of your site. Candidates will have the option to fill
                  out the voluntary EEO survey immediately after applying for a job.
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
              <p class="text-xl font-semibold text-gray-900 mt-2">Automated Hiring Compliance Reports</p>

              <p class="mt-3 text-base text-gray-500">
                HireHive stores the data submitted by your candidates and hiring teams to produce compliant reports.
                View these reports within HireHive, or export your data into a .csv format.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<FeaturesPanel hydrate-client={{ url: request.permalink }} />

<SignUpCta />
