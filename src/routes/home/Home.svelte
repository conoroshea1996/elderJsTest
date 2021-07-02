<script>
  let youtubeModalOpen = false;

  // use this to show hide certain things
</script>

<!-- {#if youtubeModalOpen}
  <Modal bind:open={youtubeModalOpen} showBackground={false}>
    <div slot="content">
      <iframe
        width="780"
        height="560"
        src="https://www.youtube.com/embed/mYUif4cDFrA?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </Modal>
{/if} -->

<div id="hero-section" class="mt-32">
  <!-- Get widths -->
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-center text-7xl font-bold">Hiring Made Easy</h1>
    </div>
    <div class="max-w-2xl mx-auto">
      <h2 class="text-center text-2xl text-gray-500 mt-8">
        HireHive is recruiting software that helps you find and hire the best candidates for you company
      </h2>
    </div>

    <div class="w-full max-w-sm mx-auto mt-8">
      <!-- will be form -->
      <div class="mt-1 flex rounded-md shadow-sm">
        <div class="relative flex items-stretch flex-grow focus-within:z-10">
          <input
            type="text"
            name="email"
            id="email"
            class="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-6 sm:text-sm border-2 border-blue-500 py-2"
            placeholder="Work email address" />
        </div>
        <button
          class="-ml-px relative inline-flex items-center space-x-2 px-2 py-1 lg:px-4 lg:py-4 border border-blue-500 text-sm font-medium rounded-r-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          ><span>Start free trial</span></button>
      </div>
    </div>

    <div class="flex justify-between text-gray-500 mt-8 text-sm max-w-2xl mx-auto">
      <!-- {#each $json('home.tags') as tag}
        <div class="inline-flex items-center">
          <svg
            class="h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{tag}</span>
        </div>
      {/each} -->
    </div>

    <div>
      <div class="relative mt-8">
        <img class="block mx-auto" src="/assets/heroImage.png" alt="heroImage" loading="lazy" />
        <button
          type="button"
          class="absolute bg-white border bottom-0 font-medium inline-flex items-center px-4 py-2 sm:px-9 sm:py-4 right-1/2 rounded-full shadow-md text-gray-900 transform translate-x-1/2 translate-y-1/2 focus:outline-none">
          <img class="-ml-1 mr-2 h-8 w-8" src="/assets/Play.svg" alt="play" />
          <span class="text-lg font-medium"> [('home.watch')} </span>
        </button>
      </div>
    </div>
  </div>
</div>

<div id="companies-banner" class="max-w-7xl mx-auto py-12 lg:pb-24 lg:pt-32 px-4">
  <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 self-center">
      <img src="/assets/currencyfair.svg" alt="currencyfair" loading="lazy" />
    </div>

    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 self-center">
      <img src="/assets/fire.svg" alt="fire" loading="lazy" />
    </div>

    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 self-center">
      <img src="/assets/bearingpoint.svg" alt="bearingpoint" loading="lazy" />
    </div>

    <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 self-center">
      <img src="/assets/lufthansaintouch.svg" alt="lufthansaintouch" loading="lazy" />
    </div>

    <div class="col-span-2 flex justify-center lg:col-span-1 self-center">
      <img src="/assets/bordbia.svg" alt="bordbia" loading="lazy" />
    </div>
  </div>
</div>

<div id="sub-heading" class="pt-20 px-4 sm:px-6 lg:pb-24 md:pt-32 lg:px-8">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-center text-5xl font-bold">Your full recruitment process in one place</h1>
  </div>
  <div class="max-w-1xl mx-auto">
    <h2 class="text-center text-xl text-gray-500 mt-4">
      Get the right candidates for your company or agency to help you grow. <br /> Post jobs and manage all your hiring in
      one place
    </h2>
  </div>
</div>

<div id="features">
  <div class="py-0 bg-white overflow-hidden lg:py-20">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-14 px-4">
        <div class="relative">
          <h1 class="text-4xl font-bold text-gray-900 tracking-tight">Find Candidates</h1>
          <dl class="mt-10 space-y-10">
            <div class="relative">
              <dt>
                <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                  <svg
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">
                  Auto-post to job boards &amp; social media
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Automatically post jobs to the best free, niche &amp; paid job boards aswell as social media to get a
                wider audience.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                  <svg
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">
                  Create your own fully hosted careers page
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                For a quick and easy solution you can use the fully hosted careers page customised with your logo and
                images, text &amp; videos.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                  <svg
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">
                  Integrate with your own website
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                For a more advanced option you can copy and paste the widget job listing code into your own careers
                page.
              </dd>
            </div>
            <a
              href="/recruiting-features/find-candidates"
              class="inline-flex items-center ml-10 mt-8 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg"
              >Learn More <img
                class="h-2 w-4 ml-4 mt-1"
                src="/assets/arrowRight.svg"
                alt="arrowRight"
                loading="lazy" /></a>
          </dl>
        </div>
        <div class="mt-10 -mx-4 relative rounded-lg overflow-hidden" aria-hidden="true">
          <img class="relative mx-auto object-cover" src="/assets/findCandidates.png" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
  <div class="py-0 bg-white overflow-hidden lg:py-20">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-14 px-4">
        <div class="mt-10 -mx-4 relative pb-10 md:pb-0 overflow-hidden" aria-hidden="true">
          <img class="relative object-fill rounded-lg" src="/assets/ApplicationSource.png" alt="" loading="lazy" />
        </div>
        <div class="relative ">
          <h1 class="text-4xl font-bold text-gray-900 tracking-tight">Manage applications</h1>
          <dl class="mt-10 space-y-10">
            <div class="relative">
              <dt>
                <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                  <svg
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">Track applicants</p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Get a clear view of where your candidates are coming from with our source tracking for every
                application.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                  <svg
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">
                  Boost and track employee referrals
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                An employee referrals portal allows you to boost and manage your employee referrals.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                  <svg
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">External recruiter portal</p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Accepting candidates from recruitment/staffing agencies is easy with the specially designed portal for
                external recruiters.
              </dd>
            </div>
            <a
              href="/recruiting-features/find-candidates"
              class="inline-flex items-center ml-10 mt-8 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg"
              >Learn More <img
                class="h-2 w-4 ml-4 mt-1"
                src="/assets/arrowRight.svg"
                alt="arrowRight"
                loading="lazy" /></a>
          </dl>
        </div>
      </div>
    </div>
  </div>
  <div class="py-0 bg-white overflow-hidden lg:py-20">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-14 px-4">
        <div class="relative">
          <h1 class="text-4xl font-bold text-gray-900 tracking-tight">Assess candidates</h1>
          <dl class="mt-10 space-y-10">
            <div class="relative">
              <dt>
                <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                  <svg
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">
                  Share candidates with your hiring team
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Manager your hiring team and easily share a candidate’s profile with team members.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                  <svg
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">Interview scheduling</p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Easily set up phone, online or on-site interviews and invite attendees from across your organisation.
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                  <svg
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">Scorecards and feedback</p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Keep track of candidate feedback from all team members for informative hiring decisions.
              </dd>
            </div>
            <a
              href="/recruiting-features/assess-candidates"
              class="inline-flex items-center ml-10 mt-8 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg"
              >Learn More <img
                class="h-2 w-4 ml-4 mt-1"
                src="/assets/arrowRight.svg"
                alt="arrowRight"
                loading="lazy" /></a>
          </dl>
        </div>
        <div class="mt-10 -mx-4 relative" aria-hidden="true">
          <img
            class="relative mx-auto rounded-lg"
            width="495"
            src="/assets/SetupInterview.png"
            alt="assessCandidates"
            loading="lazy" />
        </div>
      </div>
    </div>
  </div>
  <div class="py-0 bg-white overflow-hidden lg:py-20">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-14 px-4">
        <div class="mt-10 -mx-4 relative pb-10 md:pb-0" aria-hidden="true">
          <img
            class="relative mx-auto"
            width="495"
            src="/assets/ProgressReports.png"
            alt="analyseReports"
            loading="lazy" />
        </div>
        <div class="relative">
          <h1 class="text-4xl font-bold text-gray-900 tracking-tight">Analyse reports</h1>
          <dl class="mt-10 space-y-10">
            <div class="relative">
              <dt>
                <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                  <svg
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">
                  Recruiting analytics &amp; detailed reports
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Track and analyse all recruiting data within HireHive. Review data and make informed data driven
                recruiting decisions.;
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                  <svg
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">
                  Social Recruiting Reports and Analytics
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                HireHive fully tracks the social performance of your job postings on all platforms allowing you to get a
                full overview of this from your Reports.;
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-start  h-12 w-12 rounded-md bg-white text-gray-900">
                  <svg
                    class="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">
                  Recruitment Compliance Reports
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">Take manual data entry out of recruiting compliance;</dd>
            </div>
            <a
              href="/recruiting-features/analyse-reports"
              class="inline-flex items-center ml-10 mt-8 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg"
              >Learn More <img
                class="h-2 w-4 ml-4 mt-1 rounded-lg"
                src="/assets/arrowRight.svg"
                alt="arrowRight"
                loading="lazy" /></a>
          </dl>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="overview" class="pt-24 px-4">
  <h1 class="text-4xl text-gray-900 font-bold text-center max-w-2xl mx-auto">
    Everything you need to manage <br /> your recruitment process
  </h1>
  <div class="max-w-4xl mx-auto px-4 pt-8 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 px-4">
      <div class="bg-gray-50 p-6 rounded-md">
        <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-full bg-white"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg
            ></span>
        </div>
        <div class="mt-6">
          <h3 class="text-lg text-gray-900 font-rozanonva font-bold">Multilingual Hiring</h3>
          <p class="mt-2 text-base text-gray-500">
            Have offices in various locations? If you are hiring in languages other than English HireHive can help.
          </p>
        </div>
      </div>
      <div class="bg-gray-50 p-6 rounded-md">
        <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-full bg-white"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg
            ></span>
        </div>
        <div class="mt-6">
          <h3 class="text-lg text-gray-900 font-rozanonva font-bold">Collaborative Hiring Team</h3>
          <p class="mt-2 text-base text-gray-500">
            Easily manage your hiring team with varying levels of access to ensure that you can make hiring decisions as
            a team if needed.
          </p>
        </div>
      </div>
      <div class="bg-gray-50 p-6 rounded-md">
        <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-full bg-white"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg
            ></span>
        </div>
        <div class="mt-6">
          <h3 class="text-lg text-gray-900 font-rozanonva font-bold">Custom hiring application process</h3>
          <p class="mt-2 text-base text-gray-500">
            Each job is different and you require different information to make an informed hiring decision. HireHive
            application forms can be customised to help you get the most relevant info from each application.
          </p>
        </div>
      </div>
      <div class="bg-gray-50 p-6 rounded-md">
        <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-full bg-white"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg
            ></span>
        </div>
        <div class="mt-6">
          <h3 class="text-lg text-gray-900 font-rozanonva font-bold">CV/Resume parsing</h3>
          <p class="mt-2 text-base text-gray-500">
            Need to add a candidate to HireHive? With our 'drag and drop' CV import option you won't have to manually
            add the candidates data saving you time.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="customers">
  <div class="flex flex-col justify-center items-center px-4 pt-8 md:pt-0">
    <h1 class="text-4xl text-gray-900 font-bold text-center block">What our customers think</h1>
    <a
      href="/customers"
      class="inline-flex items-center mt-4 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg"
      >Ready our customer stories <img
        class="h-2 w-4 ml-4 mt-1"
        src="/assets/arrowRight.svg"
        alt="arrowRight"
        loading="lazy" /></a>
  </div>
  <section class="max-w-7xl mx-auto relative mt-16 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
    <h2 class="sr-only" id="contact-heading">Contact us</h2>
    <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 px-2 py-6">
      <div class="rounded-2xl bg-yellow-400">
        <div class="relative pt-16 px-6 pb-8 md:px-8 flex flex-col h-full">
          <div class="absolute top-0 inline-block transform -translate-y-6">
            <img src="/assets/customerCharityWater.png" alt="customerCharityWater" loading="lazy" />
          </div>
          <div class="pt-32 flex-grow">
            <img src="/assets/logoCharityWater.svg" alt="logo Charity Water" />
            <div class="relative">
              <div class="my-6">
                <img class="absolute -left-3" src="/assets/quote.svg" loading="lazy" alt="quote" />
              </div>
              <p class="mt-4 text-base text-blue-gray-500">
                HireHive has helped us grow our team and made keeping in contact with all our applicants easy.
              </p>
            </div>
          </div>
          <div class="mt-20">
            <h1 class="font-bold text-base">Nutan Chaudari</h1>
            <p>People Operations Associate at Charity Water</p>
          </div>
        </div>
      </div>
      <div class="rounded-2xl bg-blue-500 text-white">
        <div class="relative pt-16 px-6 pb-8 md:px-8 flex flex-col h-full">
          <div class="absolute top-0 inline-block transform -translate-y-6">
            <img src="/assets/customerBlueface.png" alt="customerCharityWater" loading="lazy" />
          </div>
          <div class="pt-32 flex-grow">
            <img src="/assets/logoBlueface.svg" alt="logo Charity Water" />
            <div class="relative">
              <div class="my-6">
                <img class="absolute -left-3" src="/assets/quote.svg" loading="lazy" alt="quote" />
              </div>
              <p class="mt-4 text-base text-blue-gray-500">
                HireHive gave relevant department heads full visibility on the hiring process and the ability to see
                application progression.
              </p>
            </div>
          </div>
          <div class="mt-20">
            <h1 class="font-bold text-base">Brian Martin</h1>
            <p>General Manager at Blueface</p>
          </div>
        </div>
      </div>
      <div class="rounded-2xl bg-navy text-white">
        <div class="relative pt-16 px-6 pb-8 md:px-8 flex flex-col h-full">
          <div class="absolute top-0 inline-block transform -translate-y-6">
            <img src="/assets/customerBearingPoint.png" alt="customerCharityWater" loading="lazy" />
          </div>
          <div class="pt-32 flex-grow">
            <img src="/assets/logoBearingPoint.svg" alt="logo Charity Water" />
            <div class="relative">
              <div class="my-6">
                <img class="absolute -left-3" src="/assets/quote.svg" loading="lazy" alt="quote" />
              </div>
              <p class="mt-4 text-base text-blue-gray-500">
                We use HireHive as a one stop shop for all candidate information.
              </p>
            </div>
          </div>
          <div class="mt-20">
            <h1 class="font-bold text-base">Sean Fitzgerald</h1>
            <p>Senior Recruiter at Bearing Point</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<div id="stats">
  <div class="relative bg-gray-900 px-4">
    <div class="h-80 absolute bottom-0 sm:bottom-10 xl:inset-0 xl:h-full xl:w-full">
      <div class="h-full xl:grid xl:grid-cols-2">
        <div class="h-full flex items-center xl:relative xl:col-start-2">
          <img height="430px" src="/assets/map.png" loading="lazy" alt="People working on laptops" />
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
      <div class="relative pt-12 pb-96 sm:pt-24 sm:pb-96 xl:col-start-1 xl:pb-24">
        <h2 class="text-sm font-medium tracking-wide uppercase text-yellow-400"><span>Valuable Metrics</span></h2>
        <div class="max-w-md">
          <h1 class="mt-3 text-3xl font-bold text-white">
            We work with amazing companies to help them manage their hiring.
          </h1>
        </div>
        <div class="max-w-lg pr-5">
          <p class="mt-3 text-gray-500">
            We’ve processed over 1 million candidate applications and companies have hired over 10,000 candidates.
          </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          <p>
            <span class="block text-5xl font-bold font-rozanonva font-bold text-white">1M+</span>
            <span class="mt-1 block text-base text-gray-500">Applications</span>
          </p>
          <p>
            <span class="block text-5xl font-bold font-rozanonva font-bold text-white">20k+</span>
            <span class="mt-1 block text-base text-gray-500">Jobs posted</span>
          </p>
          <p>
            <span class="block text-5xl font-bold font-rozanonva font-bold text-white">10k</span>
            <span class="mt-1 block text-base text-gray-500">Candidates hired</span>
          </p>
          <p>
            <span class="block text-5xl font-bold font-rozanonva font-bold text-white">1k+</span>
            <span class="mt-1 block text-base text-gray-500">Happy customers</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="signUp" class="py-20 px-4">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-4xl text-gray-900 font-bold text-center">
      Join over 1,000 companies who streamlined their hiring process with HireHive
    </h1>
  </div>
  <div class="max-w-2xl mx-auto px-1 mt-10">
    <p class="text-center text-gray-900 font-base">
      “We started using HireHive to manage job postings but now <span class="font-rozanonva font-bold">
        it's integral to our <br /> overall recruitment process.”
      </span>
      <span class="text-lg text-gray-500"
        >- Angelique O’Bryan, Director of HR and Operations <br /> at Collective Bias</span>
    </p>
  </div>
  <div class="w-full max-w-sm mx-auto mt-10">
    <form class="mt-1 flex rounded-md shadow-sm" name="signUp" method="POST" data-netlify="true">
      <div class="relative flex items-stretch flex-grow focus-within:z-10">
        <input
          type="email"
          name="email"
          id="email"
          class="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-6 sm:text-sm border-2 border-blue-500 py-2"
          placeholder="Work email address" />
      </div>
      <input type="hidden" name="form-name" value="signUp" />
      <button
        class="-ml-px relative inline-flex items-center space-x-2 px-2 py-1 lg:px-4 lg:py-3 border border-blue-500 text-sm font-medium rounded-r-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        ><span>Try it for free</span></button>
    </form>
  </div>
</div>
