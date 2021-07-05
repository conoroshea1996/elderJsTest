<script>
  import FeaturesCard from '../../components/FeaturesCard.svelte';
  import FeaturesPanel from '../../components/FeaturesPanel.svelte';
  import FrFeaturesPanel from '../../components/FRFeaturesPanel.svelte';
  import SignUpCta from '../../components/SignUpCta.svelte';

  export let request;
</script>

<div class=" bg-gray-900 relative">
  <img class="absolute inset-0 h-full w-full object-fill" src="/assets/featuresBackground.png" alt="" />
  <div class="mx-auto max-w-5xl py-14  sm:pt-16 lg:pt-20 lg:pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      <div class="z-10 px-2">
        <p class="mt-4 tracking-tight text-gray-500 font-medium sm:mt-5 lg:mt-6">Embaucher</p>
        <h1 class="mt-6 text-white text-5xl font-bold max-w-xl">Trouver et attirer des candidats</h1>
        <p class="mt-8 text-white">
          La première étape du processus de recrutement est de faire en sorte que votre annonce soit vue par le plus
          grand nombre de candidats possible et de faire passer le message.
        </p>
      </div>
    </div>
  </div>
</div>
<div id="features" class="max-w-7xl mx-auto">
  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Publiez sur les job boards</h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Atteignez une audience plus large avec la publication automatique de vos offres sur les principaux job boards
        dont Indeed, Simply Hired et Glassdoor.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->
      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Publiez sur les principaux job boards</p>
          <p class="mt-3 text-base text-gray-500">
            Avec HireHive, vous pouvez diffuser automatiquement vos annonces sur les principaux job boards gratuits :
            Indeed, Glassdoor, Simply Hired, afin d’atteindre une audience plus large pour toutes vos offres d’emploi.
          </p>
          <p class="text-sm font-medium text-blue-500 mt-3">
            <a href="#" class="hover:underline"> Lire la suite </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img style="height: 440px;" class="w-full object-cover" src="/assets/PostToJobBoards.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Suivi des candidatures</p>
          <p class="mt-3 text-base text-gray-500">
            Toutes les candidatures sont capturées dans HireHive, ce qui vous permet de mesurer avec précision votre ROI
            pour chaque plateforme.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-3">
            <a href="#" class="hover:underline"> Lire la suite </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img style="height: 440px;" class="w-full object-cover" src="/assets/TrackActivity.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Publiez vos annonces sur les réseaux sociaux
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
        Atteignez davantage de candidats avec une publication sur les réseaux sociaux facile et intuitive, directement
        depuis votre tableau de bord HireHive.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Diffusez vos offres sur les réseaux sociaux</p>
          <p class="mt-3 text-base text-gray-500">
            Vous pouvez connecter votre compte HireHive à vos comptes LinkedIn, Twitter et Facebook, de façon à pouvoir
            partager en toute simplicité des nouveautés concernant votre offre d’emploi.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-3">
            <a href="#" class="hover:underline"> Lire la suite</a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/PostToSocials.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Rapports statistiques et analyse des données</p>
          <p class="mt-3 text-base text-gray-500">
            HireHive trace la performance de votre annonce sur toutes les plateformes, et vous pouvez retrouver toutes
            ces données dans vos rapports statistiques.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-3">
            <a href="#" class="hover:underline"> Lire la suite </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/ReportsAndAnalytics.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Recevoir des candidatures</h2>
      <p class="mt-3 max-w-3xl mx-auto text-lg text-gray-500 sm:mt-4">
        Recevoir des candidatures avec HireHive ne pourrait pas être plus simple. Vous avez le choix entre deux options
        :
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Une page carrières hébergée par HireHive</p>
          <p class="mt-3 text-base text-gray-500">
            Pour une solution rapide et facile à mettre en place, vous pouvez utiliser une page carrières complètement
            hébergée fournie par HireHive.
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/FullyHostedCareersPage.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Intégration à votre site corporate</p>
          <p class="mt-3 text-base text-gray-500">
            Pour une option plus avancée, vous pouvez copier/coller le code du widget listant vos différentes offres
            d’emploi dans votre propre page carrières.
          </p>

          <p class="mt-3 text-base text-gray-500">
            Cette option vous permettra de lister vos différentes annonces en utilisant un iFrame, et vous garantit un
            processus de candidature continu pour les candidats puisqu’ils ne quittent jamais votre site Internet.
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/IntergrateWithOwnWebsite.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>

  <!-- Section -->
  <div class="relative py-12 mt-8">
    <div class="text-center">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Processus de candidature personnalisé
      </h2>
      <p class="mt-3 max-w-3xl mx-auto text-lg text-gray-500 sm:mt-4">
        EChaque poste est différent et vous avez besoin d’informations bien particulières pour être en mesure de prendre
        une décision de recrutement en toute connaissance de cause. C’est pour cette raison que les formulaires de
        candidatures de HireHive peuvent être personnalisés, afin de vous aider à obtenir les informations dont vous
        avez besoin sur chaque candidat.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Questions du formulaire de candidature</p>

          <p class="mt-3 text-base text-gray-500">
            Un formulaire de candidature par défaut est utilisé à chaque fois qu’une annonce est créée, et vous pouvez y
            ajouter des champs si vous avez besoin de davantage d’informations. Ce formulaire par défaut demande au
            candidat de fournir son nom, son adresse mail, des informations de contact basiques ainsi que son CV et sa
            lettre de motivation.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-3">
            <a href="#" class="hover:underline"> Lire la suite </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/ApplicationQuestions.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Questions personnalisées</p>
          <p class="mt-3 text-base text-gray-500">
            Vous pouvez également personnaliser ce formulaire de candidature et ajouter des questions concernant
            l’expérience du candidat, certaines compétences ou encore demander des documents complémentaires pour
            étoffer la candidature.
          </p>

          <p class="text-sm font-medium text-blue-500 mt-3">
            <a href="#" class="hover:underline"> Lire la suite </a>
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill" src="/assets/CustomiseApplicationQuestions.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>
    </div>
  </div>
</div>

<FrFeaturesPanel hydrate-client={{ url: request.permalink }} />

<SignUpCta />
