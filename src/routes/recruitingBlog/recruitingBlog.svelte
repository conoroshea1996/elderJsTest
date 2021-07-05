<script>
  import BlogPage from '../../components/Blog/BlogPage.svelte';

  // grab page number from layout
  let pageNumber = 1;
  const pageSize = 10;
  let totalPages;

  export let data, helpers;
</script>

<BlogPage hydrate-client={{ blogs: data.blogs, activeCategory: data.category }} />
