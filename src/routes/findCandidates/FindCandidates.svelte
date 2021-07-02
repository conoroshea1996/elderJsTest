<script>
  import FeaturesCard from '../../components/FeaturesCard.svelte';
</script>

<div class=" bg-gray-900 relative">
  <img class="absolute inset-0 h-full w-full object-fill" src="/assets/featuresBackground.png" alt="" />
  <div class="mx-auto max-w-5xl py-14  sm:pt-16 lg:pt-20 lg:pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      <div class="z-10 px-2">
        <p class="mt-4 tracking-tight text-gray-500 font-medium sm:mt-5 lg:mt-6">
          $_("findCandidatesFeaturePage.subHeading")}
        </p>
        <h1 class="mt-6 text-white text-5xl font-bold max-w-xl">$_("findCandidatesFeaturePage.heading")}</h1>

        <p class="mt-8 text-white">@html $_('findCandidatesFeaturePage.info')}</p>
      </div>
    </div>
  </div>
</div>

<div id="features" class="max-w-7xl mx-auto">
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Post to job boards</h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Reach a wider audience with automated posting to major job boards including Indeed, Simply Hired and Glassdoor.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <div class="w-full flex-1">
        <div class="flex flex-col rounded-lg overflow-hidden border items-stretch border-gray-100">
          <div class="bg-white p-6 flex flex-col justify-between">
            <div class="px-10">
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 mt-2">Post to major job boards</p>
                <p class="mt-3 text-base text-gray-500">
                  With HireHive you can automatically post your jobs to the best free &amp; paid job boards to get a
                  wider audience for each job posting.
                </p>
                <p class="text-sm font-medium text-blue-500 mt-3"><a href="#" class="hover:underline">Read more</a></p>
              </div>
            </div>
          </div>
          <div class="rounded-b-lg mt-4">
            <img class="w-full object-cover" src="/assets/PostToJobBoards.png" alt="" style="height: 440px;" />
          </div>
        </div>
      </div>
      <div class="w-full flex-1">
        <div class="flex flex-col rounded-lg overflow-hidden border items-stretch border-gray-100">
          <div class="bg-white p-6 flex flex-col justify-between">
            <div class="px-10">
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 mt-2">Track activity with job posting site</p>
                <p class="mt-3 text-base text-gray-500">
                  All applications are captured and fully tracked within HireHive job board posting software allowing
                  you to accurately measure your Return On Investment for each platform.
                </p>
                <p class="text-sm font-medium text-blue-500 mt-3"><a href="#" class="hover:underline">Read more</a></p>
              </div>
            </div>
          </div>
          <div class="rounded-b-lg mt-4">
            <img class="w-full object-cover" src="/assets/TrackActivity.png" alt="" style="height: 440px;" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Post jobs to social media</h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Reach a wider candidate pool with easy and intuitive social media posting directly from your HireHive dashboard.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <div class="w-full flex-1">
        <div class="flex flex-col rounded-lg overflow-hidden border items-stretch border-gray-100">
          <div class="bg-white p-6 flex flex-col justify-between">
            <div class="px-10">
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 mt-2">Job posting to social channels</p>
                <p class="mt-3 text-base text-gray-500">
                  HireHive connects with your Linkedin, Twitter and Facebook accounts so you can easily share a company
                  or personal update about your job.
                </p>
                <p class="text-sm font-medium text-blue-500 mt-3"><a href="#" class="hover:underline">Read more</a></p>
              </div>
            </div>
          </div>
          <div class="rounded-b-lg mt-4">
            <img class="w-full object-fill h-full" src="/assets/PostToSocials.png" alt="" />
          </div>
        </div>
      </div>
      <div class="w-full flex-1">
        <div class="flex flex-col rounded-lg overflow-hidden border items-stretch border-gray-100">
          <div class="bg-white p-6 flex flex-col justify-between">
            <div class="px-10">
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 mt-2">Social Recruiting Reports and Analytics</p>
                <p class="mt-3 text-base text-gray-500">
                  HireHive fully tracks the social performance of your job postings on all platforms allowing you to get
                  a full overview of this from your Reports.
                </p>
                <p class="text-sm font-medium text-blue-500 mt-3"><a href="#" class="hover:underline">Read more</a></p>
              </div>
            </div>
          </div>
          <div class="rounded-b-lg mt-4">
            <img class="w-full object-fill" src="/assets/ReportsAndAnalytics.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Accept applications online</h2>
      <p class="mt-3 max-w-3xl mx-auto text-lg text-gray-500 sm:mt-4">
        Accepting applications online with HireHive couldn't be easier. There are two options:
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <div class="w-full flex-1">
        <div class="flex flex-col rounded-lg overflow-hidden border items-stretch border-gray-100">
          <div class="bg-white p-6 flex flex-col justify-between">
            <div class="px-10">
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 mt-2">Fully hosted careers page</p>
                <p class="mt-3 text-base text-gray-500">
                  For a quick and easy solution you can use the fully hosted careers page provided by HireHive. This can
                  be customised with your logo and images, text and videos and you can then simply link to this page
                  from your own website.
                </p>
              </div>
            </div>
          </div>
          <div class="rounded-b-lg mt-4">
            <img class="w-full object-fill" src="/assets/FullyHostedCareersPage.png" alt="" />
          </div>
        </div>
      </div>
      <div class="w-full flex-1">
        <div class="flex flex-col rounded-lg overflow-hidden border items-stretch border-gray-100">
          <div class="bg-white p-6 flex flex-col justify-between">
            <div class="px-10">
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 mt-2">Integrate with your own website</p>
                <p class="mt-3 text-base text-gray-500">
                  For a more advanced option you can copy and paste the widget job listing code into your own careers
                  page.
                </p>
                <p class="mt-3 text-base text-gray-500">
                  This will display the jobs using an iFrame and ensures a seamless application process for the
                  candidate as they never leave your website.
                </p>
              </div>
            </div>
          </div>
          <div class="rounded-b-lg mt-4">
            <img class="w-full object-fill" src="/assets/IntergrateWithOwnWebsite.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Custom hiring application process
      </h2>
      <p class="mt-3 max-w-3xl mx-auto text-lg text-gray-500 sm:mt-4">
        Each job is different and you require different information to make an informed hiring decision. For this reason
        HireHive application forms can be customised to help you get the most relevant information from each
        application.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <div class="w-full flex-1">
        <div class="flex flex-col rounded-lg overflow-hidden border items-stretch border-gray-100">
          <div class="bg-white p-6 flex flex-col justify-between">
            <div class="px-10">
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 mt-2">Application questions</p>
                <p class="mt-3 text-base text-gray-500">
                  Add more information to the detailed application form if required. A default application form is
                  created each time a job is created which asks the candidate to provide their name, email address and
                  basic contact information as well as their CV/Resume and cover letter.
                </p>
                <p class="text-sm font-medium text-blue-500 mt-3"><a href="#" class="hover:underline">Read more</a></p>
              </div>
            </div>
          </div>
          <div class="rounded-b-lg mt-4">
            <img class="w-full object-fill" src="/assets/ApplicationQuestions.png" alt="" />
          </div>
        </div>
      </div>
      <div class="w-full flex-1">
        <div class="flex flex-col rounded-lg overflow-hidden border items-stretch border-gray-100">
          <div class="bg-white p-6 flex flex-col justify-between">
            <div class="px-10">
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 mt-2">Customised hiring application questions</p>
                <p class="mt-3 text-base text-gray-500">
                  You can also customise this application form and add questions about experience, certain skills and
                  ask for additional files to support the candidate’s application.
                </p>
                <p class="text-sm font-medium text-blue-500 mt-3"><a href="#" class="hover:underline">Read more</a></p>
              </div>
            </div>
          </div>
          <div class="rounded-b-lg mt-4">
            <img class="w-full object-fill" src="/assets/CustomiseApplicationQuestions.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- <DiscoverFeatures />
    
    <SignUpCta /> -->
