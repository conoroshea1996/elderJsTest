<script>
  import BlogPage from '../../components/BlogPage.svelte';

  // grab page number from layout
  let pageNumber = 1;
  const pageSize = 10;
  let totalPages;

  export let data, helpers;
</script>

{#if data.search}
  {data.search}
{/if}
<BlogPage hydrate-client={{ blogs: data.blogs, activeCategory: data.category }} />
