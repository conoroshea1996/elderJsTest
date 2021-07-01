<script>
  export let data, request; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;
</script>

<div class="relative ">
  <div class="relative shadow-xl pt-16 pb-28">
    <img class="absolute inset-0 h-full w-full object-cover" src="/assets/textBackground.png" alt="" />

    <div class="relative max-w-6xl mx-auto px-4">
      <div class="max-w-2xl text-gray-900">
        <h1 class="text-3x py-6 text-5xl">
          {frontmatter.title}
        </h1>
        <p class="text-lg">
          {frontmatter.description}
        </p>
      </div>
    </div>
  </div>
</div>

<div class="py-8">
  <div class="max-w-6xl mx-auto px-4">
    <div class="max-w-2xl text-gray-900 prose prose-xl prose-yellow">
      {@html html}
    </div>
  </div>
</div>
