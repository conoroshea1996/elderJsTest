<script>
  import FeaturesCard from '../../components/FeaturesCard.svelte';
  import FeaturesPanel from '../../components/FeaturesPanel.svelte';
  import SignUpCta from '../../components/SignUpCta.svelte';

  export let request;
</script>

<div class="bg-yello-500 relative">
  <img class="absolute inset-0 h-full w-full object-fill" src="/assets/ManageApplicationBackground.png" alt="" />
  <div class="mx-auto max-w-5xl py-14  sm:pt-16 lg:pt-20 lg:pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      <div class="z-10 px-2 text-white">
        <p class="mt-4 tracking-tight font-medium sm:mt-5 lg:mt-6">Hire</p>
        <h1 class="mt-6 text-5xl font-bold max-w-xl">Manage candidate applications</h1>
        <p class="mt-8">
          Get a clear view of where your candidates are coming from with our source tracking for every application.
          Accept candidates from recruitment/staffing agencies with our portal for external recruiters.
        </p>
      </div>
    </div>
  </div>
</div>
<div id="features" class="max-w-7xl mx-auto">
  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Track Applications – ATS</h2>
      <p class="mt-3 max-w-3xl mx-auto text-lg text-gray-500 sm:mt-4">
        Get a clear view of where your candidates are coming from with our source tracking for every application.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Source of applications</p>
          <p class="mt-3 text-base text-gray-500">
            One of the hardest things to keep track of in the recruitment process is where your applications are coming
            from. This is why all applications that are captured within HireHive are fully tracked through an applicant
            tracking system (ATS).
          </p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> Read more </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/ApplicationSource.png" alt="Track Application Source" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">In depth reports</p>

          <p class="mt-3 text-base text-gray-500">
            When you require further information on where your jobs are being seen and where your applications are
            coming from you can dive into in-depth reports and analytics from our dashboard.
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/InDeptReports.png" alt="In Dept Reports" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Boost and track employee referrals
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        An employee referrals portal allows you to boost and manage your employee referrals.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Employee Referrals Software</p>
          <p class="mt-3 text-base text-gray-500">
            Set up referral campaigns for relevant jobs and invite employees to log in to their own referral portal.
            Create rewards for interview and for hire to encourage sharing of campaigns.
          </p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> Read more </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/ReferralSoftware.png" alt="Referral Software" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Employee Referrals Tracking</p>

          <p class="mt-3 text-base text-gray-500">
            All employee referrals are fully tracked within HireHive with each referred candidate flagged in the
            dashboard.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> Read more </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/ReferralTracking.png" alt="Referral Tracking" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">External recruiter portal</h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Accepting candidates from recruitment/staffing agencies is easy with HireHive with the specially designed portal
        for external recruiters.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Recruiter Candidate Portal</p>
          <p class="mt-3 text-base text-gray-500">
            Invite external recruiters to submit candidates for specifically allocated jobs via the agency portal.
          </p>
          <p class="mt-3 text-base text-gray-500">
            Each user will get their own portal log in and will be able to track the progress of their candidates
          </p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> Read more </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img
            class="w-full object-fill h-full"
            src="/assets/RecruiterCandidatePortal.png"
            alt="Recruiter Candidate Portal" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Employee Referrals Tracking</p>

          <p class="mt-3 text-base text-gray-500">
            All employee referrals are fully tracked within HireHive with each referred candidate flagged in the
            dashboard.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> Read more </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/DuplicateFlagging.png" alt="Flag Duplicate applications" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">CV/Resume parsing</h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Need to add a candidate to HireHive? With our 'drag and drop' CV import option you won't have to manually add
        the candidates data saving you time.
      </p>
    </div>

    <div
      class="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-12 border border-gray-100 overflow-hidden rounded-lg my-12">
      <div class="p-12">
        <h2 class="text-xl font-extrabold text-gray-900 my-4">Easily add candidates with resume parsing software</h2>

        <p class="my-4 text-base text-gray-500">
          Simply drag and drop the candidates CV/resume file into HireHive and our parsing tool will do the rest.
        </p>

        <p class="my-4 text-base text-gray-500">
          Our parsing tool will pull information from the CV/resume and the candidate’s profile is complete.
        </p>
      </div>

      <div class="bg-gray-100">
        <img class="w-full object-fill" src="/assets/CvParsing.png" alt="" />
      </div>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Manage candidates</h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Move your candidates through a clear hiring pipeline from New to Hired/Rejected.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto grid grid-cols-1 lg:grid-cols-2  gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Hiring pipeline process</p>
          <p class="mt-3 text-base text-gray-500">
            Each candidate that applies will automatically appear in the ‘New’ stage of the recruiting pipeline.
            Candidates can then be reviewed and moved through the hiring process which is clearly reflected in the
            pipeline.
          </p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> Read more </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/HiringPipeline.png" alt="Hiring Pipeline" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Create a database</p>

          <p class="mt-3 text-base text-gray-500">
            Each application that comes into HireHive is stored in your own centralised database. This database is fully
            searchable using filters, keywords and Boolean search terms.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> Read more </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/CreateDatabase.png" alt="Flag Duplicate applications" />
        </svelte:fragment>
      </FeaturesCard>
      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">In depth candidate management profiles</p>

          <p class="mt-3 text-base text-gray-500">
            An in depth profile is created for each candidate that comes into HireHive. This profile contains the
            application (CV/Resume and cover letter) as well as the basic details such as the contact information and
            the current job of the candidate.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> Read more </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img
            class="w-full object-fill"
            src="/assets/CandidateManagementProfiles.png"
            alt="Manage Candidate Profiles" />
        </svelte:fragment>
      </FeaturesCard>
      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Steamlined communication</p>

          <p class="mt-3 text-base text-gray-500">
            Easy candidate communication which integrates with all email providers.
          </p>
          <p class="mt-3 text-base text-gray-500">
            Send and receive emails through HireHive and reply to candidate emails via your own email provider.
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/StreamlinedCommunication.png" alt="StreamLinedCommunication" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Multilingual Hiring</h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Have offices in various locations? If you are hiring in languages other than English HireHive can help.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row  gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Hire in different languages</p>
          <p class="mt-3 text-base text-gray-500">
            HireHive is a multilingual ATS so you can set up multilingual job application pages allowing your candidates
            to apply in whatever language you choose.
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img
            class="w-full object-fill h-full"
            src="/assets/HireInDifferentLanguages.png"
            alt="Hire In different Languages" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Multi office hiring</p>

          <p class="mt-3 text-base text-gray-500">
            Set the language for your job posting and the application form will automatically be set to that language.
          </p>
          <p class="mt-3 text-base text-gray-500">
            Assign hiring team members to jobs based on their location to manage all recruitment within one account.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> Read more </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/MultiOfficeHiring.png" alt="Flag Duplicate applications" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>
</div>

<FeaturesPanel hydrate-client={{ url: request.permalink }} />

<SignUpCta />
