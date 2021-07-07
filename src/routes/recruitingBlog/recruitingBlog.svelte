<script>
  import BlogPage from '../../components/BlogPage.svelte';

  // grab page number from layout
  let pageNumber = 1;
  const pageSize = 10;
  let totalPages;

  export let data, helpers;
</script>

{#if data.blogs && !data.searchBlogs}
  <BlogPage hydrate-client={{ blogs: data.blogs, activeCategory: data.category }} />
{/if}

<BlogPage hydrate-client={{ blogs: data.searchBlogs, activeCategory: data.category }} />
