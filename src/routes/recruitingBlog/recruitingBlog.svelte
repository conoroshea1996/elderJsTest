<script>
  import BlogNavigation from '../../components/BlogNavigation.svelte';
  import BlogPage from '../../components/BlogPage.svelte';

  // grab page number from layout
  let pageNumber = 1;
  const pageSize = 10;
  let totalPages;

  export let data, helpers;
</script>

<!-- Gives out about this -->
<BlogPage hydrate-client={{ blogs: data.blogs, activeCategory: data.category }} />
