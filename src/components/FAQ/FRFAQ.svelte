<script>
  import Accordion from '../Accordion.svelte';
  import AccordionItem from '../AccordionItem.svelte';
  const openChatSupport = () => {
    Beacon('open');
    Beacon('navigate', '/ask/message/');
  };
</script>

<!-- FAQs -->
<div class="max-w-7xl mx-auto py-12 sm:py-16">
  <h1 class="text-center text-3xl text-gray-900 sm:text-4xl">Questions fréquemment posées</h1>
  <div class="grid grid-cols-1 lg:grid-cols-2 mt-8">
    <div class="col-span-1 px-4">
      <dl class="mt-6 space-y-4 divide-y divide-gray-200">
        <h3 class="text-gray-500 font-bold font-rozanonva">Générale</h3>
        <Accordion allowMultiple>
          <AccordionItem let:isActive open={true}>
            <div slot="accordion_item_activation">
              <dt class="text-lg py-4" class:border-b={!isActive} class:border-gray-200={!isActive}>
                <button
                  type="button"
                  class="text-left w-full flex justify-between items-start text-gray-500"
                  aria-expanded={isActive}>
                  <span class="font-medium text-gray-900 text-lg">
                    Mes collaborateurs auront-ils besoin d’une formation?
                  </span>
                  <span class="h-7 flex items-center">
                    <svg
                      class="rotate-0 h-6 w-6 transform"
                      class:-rotate-180={isActive}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
            </div>

            <div slot="accordion_item_content">
              <dd class="pr-12 pb-2" class:border-b={isActive} class:border-gray-200={isActive}>
                <p class="text-base text-gray-500">
                  Nos principales priorités sont la simplicité et la facilité d’utilisation. La seule chose dont vous
                  avez besoin est d’une démo en ligne de 30 minutes et vous serez prêts à utiliser HireHive. Nous avons
                  également une équipe de support très performante, prête à répondre à toutes vos questions sur le chat
                  intégré à HireHive.
                </p>
              </dd>
            </div>
          </AccordionItem>
          <AccordionItem let:isActive>
            <div slot="accordion_item_activation">
              <dt class="text-lg py-4" class:border-b={!isActive} class:border-gray-200={!isActive}>
                <button
                  type="button"
                  class="text-left w-full flex justify-between items-start text-gray-500"
                  aria-expanded={isActive}>
                  <span class="font-medium text-gray-900 text-lg">Comment la migration fonctionne-t-elle? </span>
                  <span class="h-7 flex items-center">
                    <svg
                      class="rotate-0 h-6 w-6 transform"
                      class:-rotate-180={isActive}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
            </div>

            <div slot="accordion_item_content">
              <dd class="pr-12 pb-2" class:border-b={isActive} class:border-gray-200={isActive}>
                <p class="text-base text-gray-500">
                  Lorsque vous avez créé un compte et publié vos annonces, le chargé de clientèle responsable de votre
                  compte organisera une conversation téléphonique pour discuter avec vous des prochaines étapes de la
                  migration. Une fois que nous savons avec quel outil nous devons travailler, le processus de migration
                  est en général assez rapide.
                </p>
              </dd>
            </div>
          </AccordionItem>
          <AccordionItem let:isActive>
            <div slot="accordion_item_activation">
              <dt class="text-lg py-4" class:border-b={!isActive} class:border-gray-200={!isActive}>
                <button
                  type="button"
                  class="text-left w-full flex justify-between items-start text-gray-500"
                  aria-expanded={isActive}>
                  <span class="font-medium text-gray-900 text-lg">
                    Combien de temps faut-il pour créer un compte?
                  </span>
                  <span class="h-7 flex items-center">
                    <svg
                      class="rotate-0 h-6 w-6 transform"
                      class:-rotate-180={isActive}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
            </div>

            <div slot="accordion_item_content">
              <dd class="pr-12 pb-2" class:border-b={isActive} class:border-gray-200={isActive}>
                <p class="text-base text-gray-500">
                  Généralement, 15 minutes sont suffisantes pour créer un compte. Tout ce que vous avez à faire est
                  d’ajouter vos annonces, inviter vos collaborateurs, créer votre page carrière, et vous êtes fin prêt
                  pour commencer votre recrutement. Un membre de notre équipe sera là pour vous aider tout au long du
                  processus.
                </p>
              </dd>
            </div>
          </AccordionItem>
          <AccordionItem let:isActive>
            <div slot="accordion_item_activation">
              <dt class="text-lg py-4" class:border-b={!isActive} class:border-gray-200={!isActive}>
                <button
                  type="button"
                  class="text-left w-full flex justify-between items-start text-gray-500"
                  aria-expanded={isActive}>
                  <span class="font-medium text-gray-900 text-lg">
                    Qu’en est-il des lois concernant la protection des données ? Et où l’entreprise HireHive est-elle
                    basée ?
                  </span>
                  <span class="h-7 flex items-center">
                    <svg
                      class="rotate-0 h-6 w-6 transform"
                      class:-rotate-180={isActive}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
            </div>

            <div slot="accordion_item_content">
              <dd class="pr-12 pb-2" class:border-b={isActive} class:border-gray-200={isActive}>
                <p class="text-base text-gray-500">
                  Nous sommes en toute conformité avec les lois Européennes de Protection des Données. Ceci est énoncé
                  pleinement dans notre Politique de Confidentialité et dans nos Conditions Générales d’Utilisation.
                  Notre siège se trouve à Cork, en Irlande.
                </p>
              </dd>
            </div>
          </AccordionItem>
        </Accordion>
      </dl>
    </div>

    <div class="col-span-1 px-4">
      <dl class="mt-6 space-y-4 divide-y divide-gray-200">
        <h3 class="text-gray-500 font-bold font-rozanonva">Abonnements et Tarifs</h3>
        <Accordion allowMultiple>
          <AccordionItem let:isActive>
            <div slot="accordion_item_activation">
              <dt class="text-lg py-4" class:border-b={!isActive} class:border-gray-200={!isActive}>
                <button
                  type="button"
                  class="text-left w-full flex justify-between items-start text-gray-500"
                  aria-expanded={isActive}>
                  <span class="font-medium text-gray-900 text-lg"> Puis-je essayer le logiciel gratuitement? </span>
                  <span class="h-7 flex items-center">
                    <svg
                      class="rotate-0 h-6 w-6 transform"
                      class:-rotate-180={isActive}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
            </div>

            <div slot="accordion_item_content">
              <dd class="pr-12 pb-2" class:border-b={isActive} class:border-gray-200={isActive}>
                <p class="text-base text-gray-500">
                  Bien sûr ! Nous savons pertinemment que des décisions telles que celle-ci prennent du temps, c’est
                  pour cela que nous vous proposons de tester gratuitement notre logiciel pendant 14 jours. Avec cet
                  essai gratuit, vous pouvez utiliser toutes les fonctionnalités du logiciel, obtenir une aide en ligne
                  et inscrire autant d’utilisateurs de votre entreprise que vous le souhaitez.
                </p>
              </dd>
            </div>
          </AccordionItem>
          <AccordionItem let:isActive>
            <div slot="accordion_item_activation">
              <dt class="text-lg py-4" class:border-b={!isActive} class:border-gray-200={!isActive}>
                <button
                  type="button"
                  class="text-left w-full flex justify-between items-start text-gray-500"
                  aria-expanded={isActive}>
                  <span class="font-medium text-gray-900 text-lg"> Puis-je changer d’abonnement?</span>
                  <span class="h-7 flex items-center">
                    <svg
                      class="rotate-0 h-6 w-6 transform"
                      class:-rotate-180={isActive}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
            </div>

            <div slot="accordion_item_content">
              <dd class="pr-12 pb-2" class:border-b={isActive} class:border-gray-200={isActive}>
                <p class="text-base text-gray-500">
                  Nous savons parfaitement que, dans une entreprise, les choses évoluent. C’est pourquoi vous avez la
                  possibilité de changer d’abonnement, quand et si vous en avez besoin. Votre prochaine facture sera
                  recalculée au prorata selon le nombre de jours durant lesquels vous avez utilisé chaque abonnement.
                </p>
              </dd>
            </div>
          </AccordionItem>
          <AccordionItem let:isActive>
            <div slot="accordion_item_activation">
              <dt class="text-lg py-4" class:border-b={!isActive} class:border-gray-200={!isActive}>
                <button
                  type="button"
                  class="text-left w-full flex justify-between items-start text-gray-500"
                  aria-expanded={isActive}>
                  <span class="font-medium text-gray-900 text-lg">
                    Nous recrutons beaucoup et avons besoin d’emplois supplémentaires, est-ce possible?
                  </span>
                  <span class="h-7 flex items-center">
                    <svg
                      class="rotate-0 h-6 w-6 transform"
                      class:-rotate-180={isActive}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
            </div>

            <div slot="accordion_item_content">
              <dd class="pr-12 pb-2" class:border-b={isActive} class:border-gray-200={isActive}>
                <p class="text-base text-gray-500">
                  Tout à fait. Si vous pensez avoir besoin de davantage d’offres actives, vous pouvez nous contacter à <a
                    href="mailto:someone@example.com"
                    class="text-blue-500">
                    newjobs@hirehive.io</a> .
                </p>
              </dd>
            </div>
          </AccordionItem>
          <AccordionItem let:isActive>
            <div slot="accordion_item_activation">
              <dt class="text-lg py-4" class:border-b={!isActive} class:border-gray-200={!isActive}>
                <button
                  type="button"
                  class="text-left w-full flex justify-between items-start text-gray-500"
                  aria-expanded={isActive}>
                  <span class="font-medium text-gray-900 text-lg">
                    La tarification est basée sur les offres actives. Que signifie une ‘‘offre active’’?
                  </span>
                  <span class="h-7 flex items-center">
                    <svg
                      class="rotate-0 h-6 w-6 transform"
                      class:-rotate-180={isActive}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
            </div>

            <div slot="accordion_item_content">
              <dd class="pr-12 pb-2" class:border-b={isActive} class:border-gray-200={isActive}>
                <p class="text-base text-gray-500">
                  Les offres actives sont les offres d’emploi publiées, pour lesquelles vous pouvez recevoir des
                  candidatures à tout moment. Une fois que vous avez terminé le recrutement pour un poste, vous pouvez
                  fermer/archiver cette annonce et en créer une nouvelle. Toutes les données relatives à une annonce
                  clôturée/archivée sont conservées dans le système afin que vous ne perdiez aucune information.
                </p>
              </dd>
            </div>
          </AccordionItem>
          <AccordionItem let:isActive>
            <div slot="accordion_item_activation">
              <dt class="text-lg py-4" class:border-b={!isActive} class:border-gray-200={!isActive}>
                <button
                  type="button"
                  class="text-left w-full flex justify-between items-start text-gray-500"
                  aria-expanded={isActive}>
                  <span class="font-medium text-gray-900 text-lg"> Combien coûte HireHive?</span>
                  <span class="h-7 flex items-center">
                    <svg
                      class="rotate-0 h-6 w-6 transform"
                      class:-rotate-180={isActive}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
            </div>

            <div slot="accordion_item_content">
              <dd class="pr-12 pb-2" class:border-b={isActive} class:border-gray-200={isActive}>
                <p class="text-base text-gray-500">
                  Vous avez la possibilité de choisir l’abonnement qui répond le mieux à vos besoins. Que vous ayez
                  trois, cinq ou cinquante postes à pourvoir, nous avons l’abonnement parfait pour vous.
                </p>
              </dd>
            </div>
          </AccordionItem>
        </Accordion>
      </dl>
    </div>
  </div>
</div>

<div class="max-w-7xl mx-auto py-12 sm:py-16 ">
  <h1 class="text-center text-3xl font-bold text-gray-900 ">Vous n’avez pas trouvé de réponse à votre question?</h1>
  <h2 class="text-center font-medium text-gray-500 pt-8">
    <span class="text-blue-500 cursor-pointer" on:click={() => openChatSupport()}>Contactez-nous</span> Cliquez ici pour
    nous contacter.
  </h2>
</div>
