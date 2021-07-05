<script>
  import FeaturesCard from '../../components/FeaturesCard.svelte';
  import FeaturesPanel from '../../components/FeaturesPanel/FeaturesPanel.svelte';

  export let request;
</script>

<div class="bg-yello-500 relative">
  <img class="absolute inset-0 h-full w-full object-fill" src="/assets/AssessCandidatesBackground.png" alt="" />
  <div class="mx-auto max-w-5xl py-14  sm:pt-16 lg:pt-20 lg:pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      <div class="z-10 px-2 text-gray-900">
        <p class="mt-4 tracking-tight text-gray-500 font-medium sm:mt-5 lg:mt-6">Hire</p>
        <h1 class="mt-6 text-5xl font-bold max-w-xl">Assess candidates</h1>
        <p class="mt-8">
          Easily set up phone, online or on-site interviews and invite attendees from across your organisation. Keep
          track of candidate feedback from all team members for informative hiring decisions. Add unlimited users to
          your hiring team for collaborative hiring. Easily share a candidate’s profile with team members.
        </p>
      </div>
    </div>
  </div>
</div>

<div id="features" class="max-w-7xl mx-auto">
  <!-- Section -->
  <div class="mt-4 py-12">
    <div class="text-center py-12">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Team Collaboration</h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Easily share a candidate’s profile with team members.
      </p>
    </div>
    <div
      class="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-12 border border-gray-100 overflow-hidden rounded-lg">
      <div class="p-12">
        <h2 class="text-xl font-extrabold text-gray-900 my-4">Sharing a candidate</h2>

        <p class="my-4 text-base text-gray-500">
          You can share a candidate’s profile with team members via email. This will send a unique link which allows the
          person to view the candidates profile.
        </p>

        <p class="my-4 text-base text-gray-500">
          External users with this unique link can view the candidate’s profile and add notes.
        </p>

        <p class="my-4 text-base text-gray-500">Access can be revoked from the candidate’s profile at any time.</p>
      </div>

      <div class="px-6 bg-yellow-100">
        <img class="mx-auto" src="/assets/ShareCandidate.png" alt="" />
      </div>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Interview scheduling software</h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Easily set up phone, online or on-site interviews and invite attendees from across your organisation.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Set up phone, online or on-site interviews</p>

          <p class="mt-3 text-base text-gray-500">Organise and manage all interviews within HireHive.</p>
          <p class="mt-3 text-base text-gray-500">
            Arrange a date and time frame. Add relevant notes for your colleagues to review.
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/SetupInterview.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Personalised invites with interview schedule tool</p>

          <p class="mt-3 text-base text-gray-500">
            Send personalised invites to candidate and colleagues. Seamless integration with Google and Outlook
            calendars – no need for any set up.
          </p>
          <p class="mt-3 text-base text-gray-500">
            Attendees add event to their own calendar to be reminded on the day of the interview.
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
      <h2 class="text-xl font-extrabold text-gray-900 my-4">View your agenda at a glance</h2>

      <p class="my-4 text-base text-gray-500">
        See who has accepted the interview invite in the candidate’s profile and in your new Agenda page.
      </p>

      <p class="my-4 text-base text-gray-500">Keep track of all company and personal interviews in one place.</p>
    </div>

    <div class="px-6 bg-yellow-100">
      <img class="mx-auto" src="/assets/AgendaAtAGlance.png" alt="" />
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl max-w-2xl text-center mx-auto tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Track Hiring Decisions – Record scorecards & feedback
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Keep track of candidate feedback from all team members for informative hiring decisions.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Personalised invites with interview schedule tool</p>

          <p class="mt-3 text-base text-gray-500">
            Set up customised scorecards and feedback forms that hiring managers and other interviewers can complete.
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/GetFeedback.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Save feedback</p>

          <p class="mt-3 text-base text-gray-500">
            All information is stored in the candidate’s profile allowing for easy access to all information required to
            make a hiring decision.
          </p>
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
        Manage your hiring team
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Keep track of candidate feedback from all team members for informative hiring decisions.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Collaborative Hiring Team</p>

          <p class="mt-3 text-base text-gray-500">
            Collaborative hiring is hugely important in all organisations which is why you can add as many people to
            your account as you need to make the best hiring decisions.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-3">
            <a href="#" class="hover:underline"> Read more </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/CollabrativeHiring.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            Control user permissions with hiring <br /> management
          </p>

          <p class="mt-3 text-base text-gray-500">
            We know that it’s important to keep some information private which is why we have set up different user
            access levels on HireHive.
          </p>
          <p class="text-sm font-medium text-blue-500 mt-3">
            <a href="#" class="hover:underline"> Read more </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/ControlUserPermissions.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>
</div>

<FeaturesPanel hydrate-client={{ url: request.permalink }} />
