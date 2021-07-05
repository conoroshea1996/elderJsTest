<script>
  import SignUpCta from '../../components/SignUpCta.svelte';
  import BlogNavigation from '../../components/Blog/BlogNavigation.svelte';

  export let data, request; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;
</script>

<svelte:head>
  {#if frontmatter.customjs}
    {#each frontmatter.customjs as js}
      <script src={js} async charset="utf-8"></script>
    {/each}
  {/if}
</svelte:head>

<BlogNavigation hydrate-client={{ blogCategoriesForBlog: frontmatter.categories }} />

<div class="min-h-screen">
  <div class="relative overflow-hidden">
    <main class="bg-gray-50">
      <div class="lg:overflow-hidden py-16 sm:py-28 mx-auto max-w-5xl px-4">
        <div class="">
          <div>
            <h3 class="text-gray-500 capitalize py-4">
              {frontmatter.categories.join(' | ')}
            </h3>
            <h1 class="text-gray-900 text-5xl font-bold py-4">
              {frontmatter.title}
            </h1>
            <img
              class="rounded-lg w-full object-cover"
              src="{frontmatter.coverImage}?nf_resize=smartcrop&w=1000&h=600"
              alt={frontmatter.title} />
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 py-4">
            <div class="flex lg:hidden justify-start col-span-1 py-4">
              <div class="flex-shrink-0">
                <a href="#">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="images/author/{frontmatter.author}.png"
                    alt={frontmatter.author} />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  {frontmatter.authorName}
                </p>
                <div class="flex space-x-1 text-sm text-gray-500 border-b border-gray-100 pb-2">
                  <p class="text-gray-500">
                    **Review Content** Customer Success Agent at <span class="text-yellow-400">HireHive</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-span-1">
              {#if frontmatter.blogIntro}
                {@html frontmatter.blogIntro}
              {/if}
            </div>

            <div class="hidden lg:flex justify-end col-span-1 ">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="images/author/{frontmatter.author}.png"
                  alt={frontmatter.author} />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  {frontmatter.authorName}
                </p>
                <div class="flex space-x-1 text-sm text-gray-500 border-b border-gray-100 pb-2">
                  <p class="text-gray-500">
                    **Review Content** <br /> Customer Success <br />
                    Agent at <span class="text-yellow-400">HireHive</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <div class="py-14 max-w-5xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 ml-auto">
        <div class="col-span-1">
          <div class="prose prose-xl prose-yellow">
            {@html html}
          </div>
        </div>

        <div class="col-span-1 flex justify-end self-start relative">
          <div class="bg-gray-50 p-6 rounded-md w-full lg:w-9/12 lg:absolute left-1/2">
            <div style="">
              <h1 for="NewsLetter" class="text-gray-500 font-extrabold uppercase text-sm">
                Subscribe to our Monthly newsletter
              </h1>
              <form
                class="mt-6 sm:flex justify-center"
                name="blogNewsletter"
                id="blogNewsletter"
                data-netlify="true"
                method="POST"
                data-netlify-honeypot="honeypot">
                <input
                  class="w-full placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs border border-gray-300 rounded-md px-2"
                  type="email"
                  name="email"
                  placeholder="Enter your email" />
                <input type="hidden" name="honeypot" tabindex="-1" autocomplete="off" />
                <input type="hidden" name="form-name" value="blogNewsletter" />
                <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-navy py-16">
    <div class="max-w-5xl mx-auto lg:flex lg:items-center lg:justify-between px-4">
      <h2 class="text-1xl font-bold tracking-tight text-white sm:text-3xl font-rozanonva">
        <span class="text-yellow-400"> Arrange a product tour today </span> and start using <br /> recruiting software
        that helps you find and hire <br /> the best candidates.
      </h2>
      <div class="mt-8 flex lg:mt-0 items-center lg:flex-shrink-0">
        <button
          class="bg-blue-500 rounded-md inline-flex items-center ml-10 px-3 py-2 border border-transparent bg-transparent text-white text-lg">
          Try It For Free
        </button>
      </div>
    </div>
  </div>

  <div class="pt-24 pb-20 max-w-5xl mx-auto px-4">
    <h1 class="text-gray-500 text-5xl">Read also</h1>
    <div class="grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8 my-8 mx-auto">
      {#each data.ReadAlsoBlogs as { frontmatter, slug }}
        <div class="relative col-span-1 lg:col-span-2 rounded-md">
          <a href="/{slug}" class="flex flex-col overflow-hidden">
            <div class="flex-shrink-0">
              <img
                loading="lazy"
                class="h-48 w-full object-cover rounded-lg"
                src="{frontmatter.coverImage}?nf_resize=fit&w=350&h=350"
                alt={frontmatter.slug} />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-500 capitalize">
                  {frontmatter.categories.map((c) => c.replace(/-/g, ' ')).join(' | ')}
                </p>
                <div href="#" class="block mt-2">
                  <h1 class="text-gray-900">
                    {frontmatter.title}
                  </h1>
                </div>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>

<SignUpCta hydrate-client={{ isLightGray: true }} />
