<script>
  import FeaturesCard from '../../components/FeaturesCard.svelte';
  import FrFeaturesPanel from '../../components/FeaturesPanel/FrFeaturesPanel.svelte';

  export let request;
</script>

<div class="bg-yello-500 relative">
  <img class="absolute inset-0 h-full w-full object-fill" src="/assets/AssessCandidatesBackground.png" alt="" />
  <div class="mx-auto max-w-5xl py-14  sm:pt-16 lg:pt-20 lg:pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      <div class="z-10 px-2 text-gray-900">
        <p class="mt-4 tracking-tight text-gray-500 font-medium sm:mt-5 lg:mt-6">Embaucher</p>
        <h1 class="mt-6 text-5xl font-bold max-w-xl">Évaluer les candidats</h1>

        <p class="mt-8">
          Organisez des entretiens téléphoniques, en ligne ou dans vos bureaux en toute simplicité, et invitez vos
          collègues à y assister. Gardez une trace du feedback donné au candidat par tous les membres de l’équipe pour
          vous aider à prendre les décisions de recrutement. Ajoutez un nombre illimité d’utilisateurs à votre équipe de
          recrutement pour un recrutement collaboratif. Partagez en toute simplicité le profil d’un candidat avec les
          membres de votre équipe.
        </p>
      </div>
    </div>
  </div>
</div>

<div id="features" class="max-w-7xl mx-auto">
  <!-- Section -->
  <div class="mt-4 py-12">
    <div class="text-center py-12">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Collaboration</h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Partagez en toute simplicité le profil d’un candidat avec les membres de votre équipe.
      </p>
    </div>
    <div
      class="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-12 border border-gray-100 overflow-hidden rounded-lg">
      <div class="p-12">
        <h2 class="text-xl font-extrabold text-gray-900 my-4">Partagez des candidats</h2>

        <p class="my-4 text-base text-gray-500">
          Vous pouvez partager le profil d’un candidat avec des membres de votre équipe via email. Un lien unique
          permettant à la personne de consulter le profil du candidat sera envoyé.
        </p>

        <p class="my-4 text-base text-gray-500">
          Les utilisateurs externes à HireHive en possession de ce lien unique peuvent consulter le profil du candidat
          et ajouter des commentaires.
        </p>

        <p class="my-4 text-base text-gray-500">L’accès au profil du candidat peut être révoqué à tout moment.</p>
      </div>

      <div class="px-6 bg-yellow-100">
        <img class="mx-auto" src="/assets/ShareCandidate.png" alt="" />
      </div>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Planification d’entretiens</h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Organisez des entretiens téléphoniques, en ligne ou dans vos bureaux en toute simplicité, et invitez vos
        collègues à y assister.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">
            Organisez des entretiens téléphoniques, en ligne ou dans vos bureaux
          </p>

          <p class="mt-3 text-base text-gray-500">Organisez tous vos entretiens via HireHive.</p>
          <p class="mt-3 text-base text-gray-500">
            Définissez une date et la durée de l’entretien. Ajoutez des commentaires à destination de vos collègues.
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/SetupInterview.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Invitations personnalisées</p>

          <p class="mt-3 text-base text-gray-500">
            Envoyez des invitations personnalisées au candidat ainsi qu’à vos collègues. Notre outil s’intègre
            parfaitement avec les calendriers Google et Outlook, pas besoin de configuration.
          </p>
          <p class="mt-3 text-base text-gray-500">
            Les participants ajoutent l’événement à leur propre calendrier pour recevoir une notification le jour de
            l’entretien.
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
      <h2 class="text-xl font-extrabold text-gray-900 my-4">Consultez votre agenda en un coup d’oeil</h2>

      <p class="my-4 text-base text-gray-500">
        Voyez rapidement qui a accepté l’invitation pour l’entretien dans le profil du candidat et dans votre page
        Agenda.
      </p>

      <p class="my-4 text-base text-gray-500">
        Rassemblez tous les entretiens personnels et de l’entreprise au même endroit.
      </p>
    </div>

    <div class="px-6 bg-yellow-100">
      <img class="mx-auto" src="/assets/AgendaAtAGlance.png" alt="" />
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl max-w-2xl text-center mx-auto tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Fiches de feedback
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Gardez une trace du feedback donné au candidat par tous les membres de l’équipe pour vous aider à prendre les
        décisions de recrutement.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Obtenez un feedback</p>

          <p class="mt-3 text-base text-gray-500">
            Créez des fiches de feedback personnalisées que vous pouvez faire remplir par les responsables de
            recrutement et par les autres personnes présentes lors de l’entretien.
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/GetFeedback.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Feedback sauvegardé</p>

          <p class="mt-3 text-base text-gray-500">
            Toutes les informations sont stockées dans le profil du candidat, ce qui permet un accès facile à toutes les
            informations nécessaires pour prendre votre décision.
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
        Gérez votre équipe de recrutement
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Ajoutez un nombre illimité d’utilisateurs à votre équipe de recrutement pour un recrutement collaboratif.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Equipe de recrutement</p>

          <p class="mt-3 text-base text-gray-500">
            Recruter de manière collaborative est extrêmement important pour toutes les entreprises, c’est pourquoi vous
            pouvez ajouter autant d’utilisateurs que vous le souhaitez à votre compte pour prendre les meilleures
            décisions de recrutement possibles.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-3">
            <a href="#" class="hover:underline">Lire la suite </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/CollabrativeHiring.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Contrôlez l'accès des utilisateurs</p>

          <p class="mt-3 text-base text-gray-500">
            Nous savons qu’il est important de garder certaines informations privées, c’est pourquoi nous avons mis en
            place différents niveaux d’accès pour les utilisateurs de HireHive.
          </p>
          <p class="text-sm font-medium text-blue-500 mt-3">
            <a href="#" class="hover:underline">Lire la suite </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/ControlUserPermissions.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>
</div>

<FrFeaturesPanel hydrate-client={{ url: request.permalink }} />
