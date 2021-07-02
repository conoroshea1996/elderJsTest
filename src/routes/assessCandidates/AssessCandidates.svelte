<script>
  import FeaturesCard from '../../components/FeaturesCard.svelte';
</script>

<div class="bg-yellow-500 relative">
  <img class="absolute inset-0 h-full w-full object-fill" src="/assets/AssessCandidatesBackground.png" alt="" />
  <div class="mx-auto max-w-5xl py-14  sm:pt-16 lg:pt-20 lg:pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      <div class="z-10 px-2 text-gray-900">
        <p class="mt-4 tracking-tight text-gray-500 font-medium sm:mt-5 lg:mt-6">
          $_('assessCandidatesFeaturePage.subHeading')}
        </p>
        <h1 class="mt-6 text-5xl font-bold max-w-xl">$_('assessCandidatesFeaturePage.heading')}</h1>

        <p class="mt-8">$_('assessCandidatesFeaturePage.info')}</p>
      </div>
    </div>
  </div>
</div>

<div id="features" class="max-w-7xl mx-auto">
  <!-- Section -->
  <div class="mt-4 py-12">
    <div class="text-center py-12">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        $_('assessCandidatesFeaturePage.Team.heading')}
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        $_('assessCandidatesFeaturePage.Team.subHeading')}
      </p>
    </div>
    <div
      class="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-12 border border-gray-100 overflow-hidden rounded-lg">
      <div class="p-12">
        <h2 class="text-xl font-extrabold text-gray-900 my-4">$_('assessCandidatesFeaturePage.Team.share.title')}</h2>

        <p class="my-4 text-base text-gray-500">$_('assessCandidatesFeaturePage.Team.share.description')}</p>

        <p class="my-4 text-base text-gray-500">$_('assessCandidatesFeaturePage.Team.share.descriptionTwo')}</p>

        <p class="my-4 text-base text-gray-500">$_('assessCandidatesFeaturePage.Team.share.descriptionThree')}</p>
      </div>

      <div class="px-6 bg-yellow-100">
        <img class="mx-auto" src="/assets/ShareCandidate.png" alt="" />
      </div>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        $_('assessCandidatesFeaturePage.Scheduling.heading')}
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        $_('assessCandidatesFeaturePage.Scheduling.subHeading')}
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('assessCandidatesFeaturePage.Scheduling.Setup.title')}
          </p>

          <p class="mt-3 text-base text-gray-500">$_('assessCandidatesFeaturePage.Scheduling.Setup.description')}</p>
          <p class="mt-3 text-base text-gray-500">$_('assessCandidatesFeaturePage.Scheduling.Setup.descriptionTwo')}</p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/SetupInterview.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('assessCandidatesFeaturePage.Scheduling.Invites.title')}
          </p>

          <p class="mt-3 text-base text-gray-500">$_('assessCandidatesFeaturePage.Scheduling.Invites.description')}</p>
          <p class="mt-3 text-base text-gray-500">
            $_('assessCandidatesFeaturePage.Scheduling.Invites.descriptionTwo')}
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/PersonalizeInvites.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>

  <!-- Section -->
  <div
    class="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-12 border border-gray-100 overflow-hidden rounded-lg my-4">
    <div class="p-12">
      <h2 class="text-xl font-extrabold text-gray-900 my-4">$_('assessCandidatesFeaturePage.Agenda.title')}</h2>

      <p class="my-4 text-base text-gray-500">$_('assessCandidatesFeaturePage.Agenda.description')}</p>

      <p class="my-4 text-base text-gray-500">$_('assessCandidatesFeaturePage.Agenda.descriptionTwo')}</p>
    </div>

    <div class="px-6 bg-yellow-100">
      <img class="mx-auto" src="/assets/AgendaAtAGlance.png" alt="" />
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl max-w-2xl text-center mx-auto tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        $_('assessCandidatesFeaturePage.Feedback.title')}
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        $_('assessCandidatesFeaturePage.Feedback.subHeading')}
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">$_('assessCandidatesFeaturePage.Feedback.Get.title')}</p>

          <p class="mt-3 text-base text-gray-500">$_('assessCandidatesFeaturePage.Feedback.Get.description')}</p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/GetFeedback.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">$_('assessCandidatesFeaturePage.Feedback.Save.title')}</p>

          <p class="mt-3 text-base text-gray-500">$_('assessCandidatesFeaturePage.Feedback.Save.description')}</p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/SetFeedback.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl max-w-2xl text-center mx-auto tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        $_('assessCandidatesFeaturePage.ManageTeam.title')}
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        $_('assessCandidatesFeaturePage.ManageTeam.subHeading')}
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('assessCandidatesFeaturePage.ManageTeam.Collaborative.title')}
          </p>

          <p class="mt-3 text-base text-gray-500">
            $_('assessCandidatesFeaturePage.ManageTeam.Collaborative.description')}
          </p>

          <p class="text-sm font-medium text-blue-500 mt-3">
            <a href="#" class="hover:underline"> $_('ReadMore')} </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/CollabrativeHiring.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            $_('assessCandidatesFeaturePage.ManageTeam.Permissions.title')}
          </p>

          <p class="mt-3 text-base text-gray-500">
            $_('assessCandidatesFeaturePage.ManageTeam.Permissions.description')}
          </p>
          <p class="text-sm font-medium text-blue-500 mt-3">
            <a href="#" class="hover:underline"> $_('ReadMore')} </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/ControlUserPermissions.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>
</div>
