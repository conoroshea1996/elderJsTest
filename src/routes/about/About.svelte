<script>
  export let data, helpers;
</script>

<svelte:head>
  <title>About the HireHive Team | HireHive Recruiting Software</title>
  <meta
    name="description"
    content="HireHive is user-friendly recruiting software. The HireHive headquarters are located in Cork, Ireland. Learn more about us and our story." />
</svelte:head>

<div class="bg-navy pt-28 pb-48">
  <div class="h-full max-w-3xl mx-auto text-white">
    <h1 class="font-bold text-6xl text-center">Hirehive help busy people hire great people</h1>
    <div class="max-w-xl mx-auto">
      <p class="text-lg pt-4 text-center px-6">
        More than 1 million candidates from around the world have applied to companies via HireHive Recruiting Software.
      </p>
    </div>
  </div>
</div>

<div class="max-w-7xl mx-auto px-4 -mt-36 py-20">
  <img class="w-full object-cover z-30 rounded-md" src="/assets/hirehiveTeam.png" alt="hirehive team" />

  <div class="max-w-xl mx-auto pt-6 text-gray-900">
    <div class="py-6">
      <h1 class="text-3xl font-bold py-6">Our story</h1>
      <p class="text-xl">
        HireHive has been around since 2011. The company started with the aim of making recruitment easier. HireHive was
        one of the first cloud based ATS (applicant tracking software) systems in the market and now has customers in
        562 cities around the world. HireHive is one of the only fully multilingual ATS platforms in the world. Our
        features and integrations allow companies to manage their recruitment process from start to finish.
      </p>
    </div>

    <div>
      <blockquote>Add Quote **Review Content**</blockquote>
      <p class="mt-3 leading-6 text-gray-900 text-xl">
        <span class="font-bold"> <span class="text-yellow-400"> - </span> John Dennehy,</span> Founder at Hirehive
      </p>
    </div>

    <div class="py-6">
      <h1 class="text-3xl font-bold py-6">Our Team</h1>
      <p class="text-xl">
        Our head office is located in Cork, Ireland and the HireHive team is growing quickly to support all our
        customers. Our team more than doubled in 2016 and we are now active in the US and most European markets.
      </p>
      <p class="pt-6 text-xl">
        As a privately owned, founder-led company, we’re able to work fast and respond to our customers’ needs without
        anything else getting in the way.
      </p>
    </div>

    <img class="w-full object-cover z-30 rounded-md" src="/assets/aboutUs.png" alt="hirehive team" />
  </div>
</div>

<div class="relative ">
  <!-- Testimonial card-->
  <div class="relative shadow-xl pt-16 pb-28">
    <img class="absolute inset-0 h-full w-full object-cover" src="/assets/ctaBackgroundAboutUs.png" alt="" />

    <div class="relative max-w-6xl mx-auto px-4">
      <div class="max-w-2xl">
        <h1 class="text-3xl text-white py-6">
          Start using recruiting software that helps <br /> you find and hire the best candidates.
        </h1>

        <div class="mt-8 flex lg:mt-0 items-center lg:flex-shrink-0">
          <button
            class="bg-blue-500 rounded-md inline-flex items-center px-3 py-2 border border-transparent bg-transparent text-white text-lg">
            Try for free
            <svg
              class="h-5 w-5 ml-4 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="max-w-7xl mx-auto pt-20 px-4">
  <div class="text-gray-500">
    <h1 class="text-5xl font-bold py-4">Updates from Hirehive</h1>
    <p class="font-medium">
      For more company news, please visit <a class="text-blue-500" href="/recruiting-blog/hirehive-updates">
        updates
      </a>
    </p>
  </div>

  <div class="grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-8 xl:gap-x-8 my-8 mx-auto">
    {#each data.blogs as { frontmatter, slug }}
      <div class="relative col-span-1 md:col-span-2 rounded-md">
        <a href={slug} class="flex flex-col overflow-hidden">
          <div class="flex-shrink-0">
            <img loading="lazy" class="h-48 w-full object-cover rounded-lg" src="/assets/updates.png" alt="updates" />
          </div>
          <div class="flex-1 bg-white py-4 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-500 capitalize">Updates</p>
              <div href="#" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {frontmatter.title}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>
