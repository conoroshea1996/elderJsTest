<script>
  import FeaturesCard from '../../components/FeaturesCard.svelte';
  import FRFeaturesPanel from '../../components/FRFeaturesPanel.svelte';
  export let request;
</script>

<div class="bg-yello-500 relative">
  <img class="absolute inset-0 h-full w-full object-fill" src="/assets/AnalyseReportsBackground.png" alt="" />
  <div class="mx-auto max-w-5xl py-14  sm:pt-16 lg:pt-20 lg:pb-28">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
      <div class="z-10 px-2 text-gray-900">
        <p class="mt-4 tracking-tight text-gray-500 font-medium sm:mt-5 lg:mt-6">Embaucher</p>
        <h1 class="mt-6 text-5xl font-bold max-w-xl">Statistiques et Analyse des données</h1>

        <p class="mt-8">
          Rassemblez et analysez toutes les données du recrutement dans HireHive. Examinez les données et utilisez-les
          pour prendre vos décisions de recrutement.
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
        Rapports détaillés et analyse des données
      </h2>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Tracez les sources des candidatures</p>
          <p class="mt-3 text-base text-gray-500">
            Découvrez d’où proviennent vos candidats et quels canaux sont les plus performants.
          </p>
          <p class="mt-3 text-base text-gray-500">
            Obtenez des informations détaillées pour chaque annonce et étudiez votre taux de conversion des
            candidatures.
          </p>
        </svelte:fragment>

        <svelte:fragment slot="image">
          <img class="w-full object-fill h-full" src="/assets/TrackApplicationSources.png" alt="" />
        </svelte:fragment>
      </FeaturesCard>

      <FeaturesCard>
        <svelte:fragment slot="text">
          <p class="text-xl font-semibold text-gray-900 mt-2">Rapports d’activité</p>

          <p class="mt-3 text-base text-gray-500">
            Voyez à quelle étape se trouvent vos candidats. Sélectionnez une annonce et une plage de dates et obtenez
            des informations détaillées sur combien de candidats se trouvent à chaque étape du processus de recrutement.
          </p>
          <p class="text-sm font-medium text-blue-500 mt-2">
            <a href="#" class="hover:underline">Lire la suite </a>
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
        <h2 class="text-xl font-extrabold text-gray-900 my-4">Export des candidats et rapports avancés</h2>

        <p class="my-4 text-base text-gray-500">
          Vous souhaitez continuer à travailler sur vos données avec Excel ? Pas de problème, vous pouvez facilement
          exporter toutes les données candidats sur un fichier .csv.
        </p>

        <p class="my-4 text-base text-gray-500">
          Les entreprises américaines qui répondent à un certain nombre de critères doivent soumettre un rapport EEO-1
          tous les ans. HireHive vous permet d’automatiser ce processus et vous permet d’examiner et d’exporter toutes
          les données collectées.
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
      <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Rapports de conformité</h2>

      <p class="mt-3 max-w-3xl mx-auto text-lg text-gray-500 sm:mt-4">
        Plus besoin de collecter les données manuellement pour être en conformité.
      </p>
    </div>
    <div class="mt-12 px-4 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 lg:max-w-none">
      <!-- Card -->
      <div class="w-full lg:w-1/2 rounded-lg overflow-hidden border items-stretch border-gray-100">
        <div class="flex flex-col">
          <div class="bg-white p-6 flex flex-col justify-between">
            <div class="px-10">
              <div class="block mt-2">
                <p class="text-xl font-semibold text-gray-900 mt-2">EEO et OFCCP</p>
                <p class="mt-3 text-base text-gray-500">
                  Si votre entreprise a plus de 15 employés aux Etats-Unis ou si vous êtes un contractant ou
                  sous-traitant du gouvernement des Etats-Unis, vous devrez vous conformer aux lois EEO et aux
                  régulations OFCCP.
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Avec HireHive, vous pouvez collecter et garder une trace de toutes vos données de recrutement, pour
                  créer automatiquement des rapports de conformité.
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
                <p class="text-xl font-semibold text-gray-900 mt-2">Collecter des données</p>
                <p class="mt-3 text-base text-gray-500">
                  Pour configurer votre compte pour le EEO et inclure les rapports OFCCP, il vous suffit de le
                  sélectionner dans les paramètres de votre compte.
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Ensuite, chaque fois que vous publierez une annonce avec HireHive, votre site carrière affichera un
                  “Equal Opportunity Employer disclaimer” en bas de votre site. Les candidats auront la possibilité de
                  remplir ce sondage EEO de manière volontaire immédiatement après avoir postulé à l’annonce.
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
              <p class="text-xl font-semibold text-gray-900 mt-2">Rapports automatisés</p>

              <p class="mt-3 text-base text-gray-500">
                HireHive stocke les données soumises par vos candidats et équipes de recrutement pour créer des rapports
                de conformité. Vous pouvez les consulter dans votre compte HireHive, ou exporter vos données dans un
                fichier au format .csv.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<FRFeaturesPanel hydrate-client={{ url: request.permalink }} />
