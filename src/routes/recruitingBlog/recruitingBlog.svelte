<script>
  import BlogPage from '../../components/BlogPage.svelte';

  // grab page number from layout
  let pageNumber = 1;
  const pageSize = 10;
  let totalPages;

  export let data, helpers;
</script>

{#if data.categoryBlogs && !data.searchBlogs}
  <BlogPage hydrate-client={{ blogs: data.categoryBlogs, activeCategory: data.category }} />
{/if}
{#if data.searchBlogs}
  <BlogPage hydrate-client={{ blogs: data.searchBlogs, activeCategory: data.category }} />
{/if}
