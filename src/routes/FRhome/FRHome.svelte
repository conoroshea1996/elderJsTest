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
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto"><h1 class="text-center text-7xl font-bold">Embaucher en toute simplicité</h1></div>
    <div class="max-w-2xl mx-auto">
      <h2 class="text-center text-2xl text-gray-500 mt-8">
        HireHive est un logiciel de recrutement qui vous aide à trouver et à embaucher les meilleurs candidats pour
        vous.
      </h2>
    </div>
    <div class="w-full max-w-sm mx-auto mt-8 max-w-lg">
      <div class="mt-1 flex rounded-md shadow-sm">
        <div class="relative flex items-stretch flex-grow focus-within:z-10">
          <input
            type="text"
            name="email"
            id="email"
            class="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-6 sm:text-sm border-2 border-blue-500 py-2"
            placeholder="Adresse e-mail professionnelle" />
        </div>
        <button
          class="-ml-px relative inline-flex items-center space-x-2 px-2 py-1 lg:px-4 lg:py-4 border border-blue-500 text-sm font-medium rounded-r-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          ><span>Commencer le sentier gratuit</span></button>
      </div>
    </div>
    <div class="flex justify-between text-gray-500 mt-8 text-sm max-w-2xl mx-auto">
      <div class="inline-flex items-center">
        <svg
          class="h-5 w-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span>Totalement gratuit pendant 14 jours</span>
      </div>
      <div class="inline-flex items-center">
        <svg
          class="h-5 w-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span>Aucune carte de crédit nécessaire</span>
      </div>
      <div class="inline-flex items-center">
        <svg
          class="h-5 w-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span>Commencez en 5 minutes</span>
      </div>
    </div>
    <div>
      <div class="relative mt-8">
        <img class="block mx-auto" src="/assets/heroImage.png" alt="heroImage" loading="lazy" />
        <button
          type="button"
          class="absolute bg-white border bottom-0 font-medium inline-flex items-center px-4 py-2 sm:px-9 sm:py-4 right-1/2 rounded-full shadow-md text-gray-900 transform translate-x-1/2 translate-y-1/2 focus:outline-none"
          ><img class="-ml-1 mr-2 h-8 w-8" src="/assets/Play.svg" alt="play" />
          <span class="text-lg font-medium">Regardez: HireHive en 90 secondes</span></button>
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
    <h1 class="text-center text-5xl font-bold">Votre processus de recrutement complet en un seul endroit</h1>
  </div>
  <div class="max-w-1xl mx-auto">
    <h2 class="text-center text-xl text-gray-500 mt-4">
      Trouvez les bons candidats pour votre entreprise ou agence pour vous aider à grandir. <br /> Publiez des offres et
      gérez toutes vos embauches en un seul endroit
    </h2>
  </div>
</div>

<div id="features">
  <div class="py-0 bg-white overflow-hidden lg:py-20">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-14 px-4">
        <div class="relative">
          <h1 class="text-4xl font-bold text-gray-900 tracking-tight">Trouver des candidats</h1>
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
                  Publication automatique sur les sites d'emploi et les médias sociaux
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Publiez automatiquement des offres d'emploi sur les meilleurs sites d'emplois gratuits, de niche et
                rémunérés ainsi que sur les réseaux sociaux pour obtenir un public plus large.
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
                  Créez votre propre page de carrières entièrement hébergée
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Pour une solution rapide et simple, vous pouvez utiliser la page Carrières entièrement hébergée
                personnalisée avec votre logo et vos images, textes et vidéos.
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
                  Intégrez votre propre site Web
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Pour une option plus avancée, vous pouvez copier et coller le code de liste d'emplois du widget dans
                votre propre page Carrières.
              </dd>
            </div>
            <a
              href="/fr/fonctionnalites/provenance-des-candidatures"
              class="inline-flex items-center ml-10 mt-8 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg"
              >Apprendre encore plus <img
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
          <h1 class="text-4xl font-bold text-gray-900 tracking-tight">Gérer des applications</h1>
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
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">Suivre les candidats</p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Obtenez une vue claire de la provenance de vos candidats grâce à notre suivi des sources pour chaque
                candidature.
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
                  Boostez et suivez les références des employés
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Un portail de références d'employés vous permet de booster et de gérer vos références d'employés.
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
                <p class="ml-12 text-lg leading-6 text-gray-900 font-rozanonva font-bold">Portail recruteur externe</p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Accepter des candidats d'agences de recrutement / de dotation est facile avec le portail spécialement
                conçu pour les recruteurs externes.
              </dd>
            </div>
            <a
              href="/fr/fonctionnalites/provenance-des-candidatures"
              class="inline-flex items-center ml-10 mt-8 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg"
              >Apprendre encore plus <img
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
          <h1 class="text-4xl font-bold text-gray-900 tracking-tight">Évaluer les candidats</h1>
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
                  Partagez les candidats avec votre équipe de recrutement
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Gérez votre équipe de recrutement et partagez facilement le profil d'un candidat avec les membres de
                l'équipe.
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
                  Planification des entretiens
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Configurez facilement des entretiens téléphoniques, en ligne ou sur site et invitez des participants de
                toute votre organisation.
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
                  Fiches de pointage et commentaires
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Gardez une trace des commentaires des candidats de tous les membres de l'équipe pour des décisions
                d'embauche informatives.
              </dd>
            </div>
            <a
              href="/fr/fonctionnalites/evaluer-les-candidats"
              class="inline-flex items-center ml-10 mt-8 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg"
              >Apprendre encore plus <img
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
          <h1 class="text-4xl font-bold text-gray-900 tracking-tight">Analyser les rapports</h1>
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
                  Statistiques de recrutement et rapports détaillés
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Suivez et analysez toutes les données de recrutement dans HireHive. Passez en revue les données et
                prenez des décisions de recrutement éclairées basées sur les données.;
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
                  Rapports et analyses de recrutement social
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                HireHive suit entièrement les performances sociales de vos offres d'emploi sur toutes les plateformes,
                ce qui vous permet d'obtenir un aperçu complet de cela à partir de vos rapports.;
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
                  Rapports de conformité de recrutement
                </p>
              </dt>
              <dd class="mt-2 ml-12 text-base text-gray-500">
                Éliminez la saisie manuelle des données de la conformité du recrutement;
              </dd>
            </div>
            <a
              href="//fr/fonctionnalites/rapports-detailles-et-analyse-des-donnees"
              class="inline-flex items-center ml-10 mt-8 px-3 py-2 border border-transparent bg-transparent text-blue-500 text-lg"
              >Apprendre encore plus <img
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
    Tout ce dont vous avez besoin pour gérer <br /> votre processus de recrutement
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
          <h3 class="text-lg text-gray-900 font-rozanonva font-bold">Embauche multilingue</h3>
          <p class="mt-2 text-base text-gray-500">
            Vous avez des bureaux à divers endroits? Si vous embauchez dans des langues autres que l'anglais, HireHive
            peut vous aider.
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
          <h3 class="text-lg text-gray-900 font-rozanonva font-bold">Équipe de recrutement collaborative</h3>
          <p class="mt-2 text-base text-gray-500">
            Gérez facilement votre équipe de recrutement avec différents niveaux d'accès pour vous assurer de pouvoir
            prendre des décisions de recrutement en équipe si nécessaire.
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
          <h3 class="text-lg text-gray-900 font-rozanonva font-bold">Processus de demande d'embauche personnalisé</h3>
          <p class="mt-2 text-base text-gray-500">
            Chaque emploi est différent et vous avez besoin d'informations différentes pour prendre une décision
            d'embauche éclairée. Les formulaires de candidature HireHive peuvent être personnalisés pour vous aider à
            obtenir les informations les plus pertinentes de chaque application.
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
          <h3 class="text-lg text-gray-900 font-rozanonva font-bold">Analyse CV / CV</h3>
          <p class="mt-2 text-base text-gray-500">
            Besoin d'ajouter un candidat à HireHive? Avec notre option d'importation de CV par glisser-déposer, vous
            n'aurez pas à ajouter manuellement les données des candidats, ce qui vous fera gagner du temps.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="customers">
  <div class="flex flex-col justify-center items-center px-4 pt-8 md:pt-0">
    <h1 class="text-4xl text-gray-900 font-bold text-center block">Ce que pensent nos clients</h1>
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
                HireHive nous a aidés à développer notre équipe et à rester en contact avec tous nos candidats
                facilement.
              </p>
            </div>
          </div>
          <div class="mt-20">
            <h1 class="font-bold text-base">Nutan Chaudari</h1>
            <p>Associé aux opérations des personnes chez Charity Water</p>
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
                HireHive a donné aux chefs de service concernés une visibilité complète sur le processus de recrutement
                et la possibilité de voir la progression des candidatures.
              </p>
            </div>
          </div>
          <div class="mt-20">
            <h1 class="font-bold text-base">Brian Martin</h1>
            <p>Directeur général chez Blueface</p>
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
                Nous utilisons HireHive comme un guichet unique pour toutes les informations sur les candidats.
              </p>
            </div>
          </div>
          <div class="mt-20">
            <h1 class="font-bold text-base">Sean Fitzgerald</h1>
            <p>Recruteur senior chez Bearing Point</p>
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
        <h2 class="text-sm font-medium tracking-wide uppercase text-yellow-400">
          <span>Des métriques précieuses</span>
        </h2>
        <div class="max-w-md">
          <h1 class="mt-3 text-3xl font-bold text-white">
            Nous travaillons avec des entreprises formidables pour les aider à gérer leur embauche.
          </h1>
        </div>
        <div class="max-w-lg pr-5">
          <p class="mt-3 text-gray-500">
            Nous avons traité plus d'un million de candidatures et les entreprises ont embauché plus de 10 000
            candidats.
          </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          <p>
            <span class="block text-5xl font-bold font-rozanonva font-bold text-white">1M+</span>
            <span class="mt-1 block text-base text-gray-500">Applications</span>
          </p>
          <p>
            <span class="block text-5xl font-bold font-rozanonva font-bold text-white">20k+</span>
            <span class="mt-1 block text-base text-gray-500">Offres d'emploi publiées</span>
          </p>
          <p>
            <span class="block text-5xl font-bold font-rozanonva font-bold text-white">10k</span>
            <span class="mt-1 block text-base text-gray-500">Candidats embauchés</span>
          </p>
          <p>
            <span class="block text-5xl font-bold font-rozanonva font-bold text-white">1k+</span>
            <span class="mt-1 block text-base text-gray-500">Des clients satisfaits</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
