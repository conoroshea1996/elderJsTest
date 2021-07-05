<script>
  import Accordion from './Accordion.svelte';
  import AccordionItem from './AccordionItem.svelte';
  const openChatSupport = () => {
    Beacon('open');
    Beacon('navigate', '/ask/message/');
  };
</script>

<!-- FAQs -->
<div class="max-w-7xl mx-auto py-12 sm:py-16">
  <h1 class="text-center text-3xl text-gray-900 sm:text-4xl">Frequently asked questions</h1>
  <div class="grid grid-cols-1 lg:grid-cols-2 mt-8">
    <div class="col-span-1 px-4">
      <dl class="mt-6 space-y-4 divide-y divide-gray-200">
        <h3 class="text-gray-500 font-bold font-rozanonva">General</h3>
        <Accordion allowMultiple>
          <AccordionItem let:isActive open={true}>
            <div slot="accordion_item_activation">
              <dt class="text-lg py-4" class:border-b={!isActive} class:border-gray-200={!isActive}>
                <button
                  type="button"
                  class="text-left w-full flex justify-between items-start text-gray-500"
                  aria-expanded={isActive}>
                  <span class="font-medium text-gray-900 text-lg"> Will my team need training? </span>
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
                  We focus on simplicity and ease of use. That’s why all you need to get started with HireHive is a 20
                  minute online demo and you’re good to go. We also have a support team ready to answer your questions
                  through our chat facility within HireHive and an extensive support centre.
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
                  <span class="font-medium text-gray-900 text-lg"> How does migration work? </span>
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
                  When you’ve created an account and added your jobs, your account manager will set up a call with you
                  to discuss the next steps for the migration. Once we know what we’re working with, this process
                  usually happens pretty quickly.
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
                  <span class="font-medium text-gray-900 text-lg"> How long does account set up take? </span>
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
                  Account set up usually takes no longer than 15 minutes. All you need to do is add your jobs, set up
                  your team and create your careers page and you’re ready to go. You will also have an account manager
                  to help you through this process.
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
                    What about data protection laws and where is HireHive based?
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
                  **PlaceHolder** We focus on simplicity and ease of use. That’s why all you need to get started with
                  HireHive is a 20 minute online demo and you’re good to go. We also have a support team ready to answer
                  your questions through our chat facility within HireHive and an extensive support centre.
                </p>
              </dd>
            </div>
          </AccordionItem>
        </Accordion>
      </dl>
    </div>

    <div class="col-span-1 px-4">
      <dl class="mt-6 space-y-4 divide-y divide-gray-200">
        <h3 class="text-gray-500 font-bold font-rozanonva">Pricing Plans</h3>
        <Accordion allowMultiple>
          <AccordionItem let:isActive>
            <div slot="accordion_item_activation">
              <dt class="text-lg py-4" class:border-b={!isActive} class:border-gray-200={!isActive}>
                <button
                  type="button"
                  class="text-left w-full flex justify-between items-start text-gray-500"
                  aria-expanded={isActive}>
                  <span class="font-medium text-gray-900 text-lg"> Can I try HireHive? </span>
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
                  Sure! We know decisions like this take time so we offer a 14 free trial. During this trial you can use
                  all features of the software, get support and have as many users signed up from your company as you
                  like.
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
                  <span class="font-medium text-gray-900 text-lg"> Can I switch plans?</span>
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
                  Things change – we get that. So you can easily change plans when and if you need to. You next invoice
                  will then be prorated depending on the number of days you were on each plan.
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
                    We’re doing a lot of hiring and need extra jobs, is this possible?
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
                  Absolutely. If you think you need more job slots you can contact us on newjobs@hirehive.com.
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
                    Subscriptions are based on active jobs. What does ‘active jobs’ actually mean?
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
                  Active jobs are the number of jobs that you can accept applications for at any one time. Once you have
                  finished hiring for one job you can close/archive this job and open a new one. All information
                  relating to a closed/archived job is stored within the system so you don’t lose any information.
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
                  <span class="font-medium text-gray-900 text-lg"> How much will HireHive cost my company? </span>
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
                  You can choose a pricing plan that suits you. Whether you have three, five or fifty open positions we
                  have the right plan for you.
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
  <h1 class="text-center text-3xl font-bold text-gray-900 ">Haven’t found an answer to your question?</h1>
  <h2 class="text-center font-medium text-gray-500 pt-8">
    <span class="text-blue-500 cursor-pointer">Contact Us</span> Contact Us here so we can help you.
  </h2>
</div>
