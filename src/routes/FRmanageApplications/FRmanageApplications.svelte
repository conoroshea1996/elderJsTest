<script>
  import FeaturesCard from '../../components/FeaturesCard.svelte';
  import FrFeaturesPanel from '../../components/FRFeaturesPanel.svelte';

  export let request;
</script>

<div class="bg-gray-900 relative">
  <img class="absolute inset-0 h-full w-full object-fill" src="/assets/ManageApplicationBackground.png" alt="" />
  <div class="mx-auto max-w-5xl py-14  sm:pt-16 lg:pt-20 lg:pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      <div class="z-10 px-2 text-white">
        <p class="mt-4 tracking-tight font-medium sm:mt-5 lg:mt-6">Embaucher</p>
        <h1 class="mt-6 text-5xl font-bold max-w-xl">Gestion des candidatures</h1>
        <p class="mt-8">
          Ayez une vision claire de la provenance des candidatures que vous avez reçues avec notre suivi de la
          provenance de chaque candidature. Recevoir des candidatures d’agences de recrutement est très simple avec
          HireHive et son espace dédié et spécialement créé pour les recruteurs externes.
        </p>
      </div>
    </div>
  </div>
</div>

<div id="features" class="max-w-7xl mx-auto">
  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Provenance des candidatures</h2>
      <p class="mt-3 max-w-3xl mx-auto text-lg text-gray-500 sm:mt-4">
        Ayez une vision claire de la provenance des candidatures que vous avez reçues avec notre suivi de la provenance
        de chaque candidature.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Source des candidatures</p>
          <p class="mt-3 text-base text-gray-500">
            L’une des choses les plus difficiles à surveiller durant le processus de recrutement est la provenance de
            vos candidatures. C’est pourquoi toutes les candidatures qui sont capturées dans HireHive sont complètement
            tracées.
          </p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline">Lire la suite </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/ApplicationSource.png" alt="Track Application Source" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Rapports statistiques avancés</p>

          <p class="mt-3 text-base text-gray-500">
            Lorsque vous avez besoin d’informations plus précises sur les plateformes sur lesquelles vos annonces ont
            été vues ou sur la provenance de vos candidatures, vous avez accès à des rapports statistiques et
            analytiques avancés dans notre tableau de bord Reports.
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
        Promouvoir et gérer les cooptations
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Un espace campagne de cooptation vous permet de promouvoir et de gérer les cooptations d’employés.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Espace Employés</p>
          <p class="mt-3 text-base text-gray-500">
            Créez des campagnes de cooptation et invitez vos employés à se connecter à leur propre espace de cooptation.
            Mettez un système de récompense en place pour les entretiens et les embauches pour encourager vos employés à
            partager les campagnes.
          </p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline">Lire la suite </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/ReferralSoftware.png" alt="Referral Software" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Suivi des cooptations</p>

          <p class="mt-3 text-base text-gray-500">
            Toutes les cooptations réalisées par vos employés sont signalées dans HireHive, et les candidats ayant été
            cooptés sont différenciés des autres puisqu’un encadré “Referred” apparaîtra dans votre tableau de bord.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline">Lire la suite </a>
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
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Espace recruteur externe</h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Recevoir des candidatures d’agences de recrutement est très simple avec HireHive et son espace dédié et
        spécialement créé pour les recruteurs externes.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Espace recruteurs</p>
          <p class="mt-3 text-base text-gray-500">
            Invitez des recruteurs externes à votre entreprise à soumettre des candidats pour des emplois qui leur sont
            spécifiquement attribués via l’espace agence de recrutement.
          </p>
          <p class="mt-3 text-base text-gray-500">
            Chaque utilisateur aura son propre code d’accès à l’espace et aura la possibilité de suivre la progression
            de ses candidats.
          </p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline">Lire la suite </a>
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
          <p class="text-xl font-semibold text-gray-900 mt-2">Suivi des cooptations</p>

          <p class="mt-3 text-base text-gray-500">
            Toutes les cooptations réalisées par vos employés sont signalées dans HireHive, et les candidats ayant été
            cooptés sont différenciés des autres puisqu’un encadré “Referred” apparaîtra dans votre tableau de bord.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline">Lire la suite </a>
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
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Analyse des CV</h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Vous voulez ajouter un candidat à HireHive ? Avec notre option “glisser-déposer” pour importer les CV, vous
        n’aurez pas à ajouter manuellement les différentes informations des candidats, ce qui vous fera gagner du temps.
      </p>
    </div>

    <div
      class="space-y-4 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-12 border border-gray-100 overflow-hidden rounded-lg my-12">
      <div class="p-12">
        <h2 class="text-xl font-extrabold text-gray-900 my-4">Ajoutez facilement des candidats</h2>

        <p class="my-4 text-base text-gray-500">
          Vous pouvez tout simplement glisser-déposer les CV des candidats dans HireHive et notre outil d’analyse se
          chargera du reste.
        </p>

        <p class="my-4 text-base text-gray-500">
          Notre outil d’analyse va extraire les informations du CV pour compléter le profil du candidat.
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
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Traitez les candidatures</h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Déplacez vos candidats le long d’un pipeline du recrutement, depuis le stade de "New" jusqu’à "Rejected".
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto grid grid-cols-1 lg:grid-cols-2  gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Pipeline du recrutement</p>
          <p class="mt-3 text-base text-gray-500">
            Chaque candidat qui postule à l’une de vos annonces apparaîtra automatiquement dans l’étape “Nouveau” du
            pipeline. Vous pouvez ensuite examiner leur candidature et les déplacer le long du processus de recrutement,
            qui est clairement illustré dans le pipeline.
          </p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline">Lire la suite </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/HiringPipeline.png" alt="Hiring Pipeline" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Créez une base de données</p>

          <p class="mt-3 text-base text-gray-500">
            Chaque candidature qui arrive dans HireHive est stockée dans notre propre base de données centralisée. Cette
            base de données est entièrement consultable en utilisant des filtres, des mots-clés et des termes de
            recherche Booléenne
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline">Lire la suite </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/CreateDatabase.png" alt="Flag Duplicate applications" />
        </svelte:fragment>
      </FeaturesCard>
      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Profils candidats détaillés</p>

          <p class="mt-3 text-base text-gray-500">
            Un profil complet est créé pour chaque candidat qui arrive dans HireHive. Ce profil rassemble la candidature
            (CV et lettre de motivation), ainsi que les informations basiques, comme les coordonnées/informations de
            contact, et le poste actuel du candidat.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline">Lire la suite </a>
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
          <p class="text-xl font-semibold text-gray-900 mt-2">Communication simplifiée</p>

          <p class="mt-3 text-base text-gray-500">
            Une communication avec les candidats simplifiée, et qui est intégrée à tous les fournisseurs de messagerie
            électronique.
          </p>
          <p class="mt-3 text-base text-gray-500">
            Envoyez et recevez des mails dans HireHive et répondez aux mails des candidats via votre propre fournisseur
            de messagerie.
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
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Le Recrutement Multilingue</h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Vous avez des bureaux dans différents endroits ? Si vous recrutez dans différentes langues, HireHive peut vous
        aider.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row  gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Recrutez dans plusieurs langues</p>
          <p class="mt-3 text-base text-gray-500">
            HireHive est un ATS multilingue, avec lequel vous pouvez créer des formulaires de candidature multilingues,
            et laisser à vos candidats la possibilité de postuler dans la langue de leur choix.
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
          <p class="text-xl font-semibold text-gray-900 mt-2">Recrutement dans plusieurs bureaux</p>

          <p class="mt-3 text-base text-gray-500">
            Choisissez la langue souhaitée lors de la création de votre annonce, et le questionnaire de candidature sera
            automatiquement publié dans cette langue.
          </p>
          <p class="mt-3 text-base text-gray-500">
            Assignez des membres responsables de recrutement à des offres d’emploi selon leur localisation pour gérer
            tout votre recrutement avec un seul compte.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline">Lire la suite </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/MultiOfficeHiring.png" alt="Flag Duplicate applications" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>
</div>

<FrFeaturesPanel hydrate-client={{ url: request.permalink }} />
