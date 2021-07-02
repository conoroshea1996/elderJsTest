<script>
  import FeaturesCard from '../../components/FeaturesCard.svelte';
</script>

<div class="bg-yello-500 relative">
  <img class="absolute inset-0 h-full w-full object-fill" src="/assets/ManageApplicationBackground.png" alt="" />
  <div class="mx-auto max-w-5xl py-14  sm:pt-16 lg:pt-20 lg:pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      <div class="z-10 px-2 text-white">
        <p class="mt-4 tracking-tight font-medium sm:mt-5 lg:mt-6">$_('manageApplicationsFeaturePage.subHeading')}</p>
        <h1 class="mt-6 text-5xl font-bold max-w-xl">$_('manageApplicationsFeaturePage.heading')}</h1>

        <p class="mt-8">$_('manageApplicationsFeaturePage.info')}</p>
      </div>
    </div>
  </div>
</div>

<div id="features" class="max-w-7xl mx-auto">
  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        $_('manageApplicationsFeaturePage.Track.title')}
      </h2>
      <p class="mt-3 max-w-3xl mx-auto text-lg text-gray-500 sm:mt-4">
        $_('manageApplicationsFeaturePage.Track.subHeading')}
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('manageApplicationsFeaturePage.Track.Source.title')}
          </p>
          <p class="mt-3 text-base text-gray-500">$_('manageApplicationsFeaturePage.Track.Source.description')}</p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> $_('ReadMore')} </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/ApplicationSource.png" alt="Track Application Source" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('manageApplicationsFeaturePage.Track.Reports.title')}
          </p>

          <p class="mt-3 text-base text-gray-500">$_('manageApplicationsFeaturePage.Track.Reports.description')}</p>
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
        $_('manageApplicationsFeaturePage.Referrals.title')}
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        $_('manageApplicationsFeaturePage.Referrals.subHeading')}
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('manageApplicationsFeaturePage.Referrals.EmployeeReferral.title')}
          </p>
          <p class="mt-3 text-base text-gray-500">
            $_('manageApplicationsFeaturePage.Referrals.EmployeeReferral.description')}
          </p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> $_('ReadMore')} </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/ReferralSoftware.png" alt="Referral Software" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('manageApplicationsFeaturePage.Referrals.TrackingReferral.title')}
          </p>

          <p class="mt-3 text-base text-gray-500">
            $_('manageApplicationsFeaturePage.Referrals.TrackingReferral.description')}
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> $_('ReadMore')} </a>
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
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        $_('manageApplicationsFeaturePage.Portal.title')}
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        $_('manageApplicationsFeaturePage.Portal.subHeading')}
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('manageApplicationsFeaturePage.Portal.CandidatePortal.title')}
          </p>
          <p class="mt-3 text-base text-gray-500">
            $_('manageApplicationsFeaturePage.Portal.CandidatePortal.description')}
          </p>
          <p class="mt-3 text-base text-gray-500">
            $_('manageApplicationsFeaturePage.Portal.CandidatePortal.descriptionTwo')}
          </p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> $_('ReadMore')} </a>
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
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('manageApplicationsFeaturePage.Referrals.TrackingReferral.title')}
          </p>

          <p class="mt-3 text-base text-gray-500">
            $_('manageApplicationsFeaturePage.Referrals.TrackingReferral.description')}
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> $_('ReadMore')} </a>
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
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        $_('manageApplicationsFeaturePage.CV.title')}
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        $_('manageApplicationsFeaturePage.CV.subHeading')}
      </p>
    </div>

    <div
      class="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-12 border border-gray-100 overflow-hidden rounded-lg my-12">
      <div class="p-12">
        <h2 class="text-xl font-extrabold text-gray-900 my-4">$_('manageApplicationsFeaturePage.CV.Parsing.title')}</h2>

        <p class="my-4 text-base text-gray-500">$_('manageApplicationsFeaturePage.CV.Parsing.description')}</p>

        <p class="my-4 text-base text-gray-500">$_('manageApplicationsFeaturePage.CV.Parsing.descriptionTwo')}</p>
      </div>

      <div class="px-6 bg-gray-100">
        <!-- <img class="mx-auto" src="/assets/AgendaAtAGlance.png" alt="" /> -->
      </div>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        $_('manageApplicationsFeaturePage.ManageCandidates.title')}
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        $_('manageApplicationsFeaturePage.ManageCandidates.subHeading')}
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto grid grid-cols-1 lg:grid-cols-2  gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('manageApplicationsFeaturePage.ManageCandidates.Pipeline.title')}
          </p>
          <p class="mt-3 text-base text-gray-500">
            $_('manageApplicationsFeaturePage.ManageCandidates.Pipeline.description')}
          </p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> $_('ReadMore')} </a>
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
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('manageApplicationsFeaturePage.ManageCandidates.Database.title')}
          </p>

          <p class="mt-3 text-base text-gray-500">
            $_('manageApplicationsFeaturePage.ManageCandidates.Database.description')}
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> $_('ReadMore')} </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/DuplicateFlagging.png" alt="Flag Duplicate applications" />
        </svelte:fragment>
      </FeaturesCard>
      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('manageApplicationsFeaturePage.ManageCandidates.InDept.title')}
          </p>

          <p class="mt-3 text-base text-gray-500">
            $_('manageApplicationsFeaturePage.ManageCandidates.InDept.description')}
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> $_('ReadMore')} </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/DuplicateFlagging.png" alt="Flag Duplicate applications" />
        </svelte:fragment>
      </FeaturesCard>
      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('manageApplicationsFeaturePage.ManageCandidates.Communication.title')}
          </p>

          <p class="mt-3 text-base text-gray-500">
            $_('manageApplicationsFeaturePage.ManageCandidates.Communication.description')}
          </p>
          <p class="mt-3 text-base text-gray-500">
            $_('manageApplicationsFeaturePage.ManageCandidates.Communication.descriptionTwo')}
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
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        $_('manageApplicationsFeaturePage.Multilingual.title')}
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        $_('manageApplicationsFeaturePage.Multilingual.subHeading')}
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row  gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('manageApplicationsFeaturePage.Multilingual.Languages.title')}
          </p>
          <p class="mt-3 text-base text-gray-500">
            $_('manageApplicationsFeaturePage.Multilingual.Languages.description')}
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
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('manageApplicationsFeaturePage.Multilingual.Multi.title')}
          </p>

          <p class="mt-3 text-base text-gray-500">
            $_('manageApplicationsFeaturePage.Multilingual.Multi.description')}
          </p>
          <p class="mt-3 text-base text-gray-500">
            $_('manageApplicationsFeaturePage.Multilingual.Multi.descriptionTwo')}
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline"> $_('ReadMore')} </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/DuplicateFlagging.png" alt="Flag Duplicate applications" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>
</div>
