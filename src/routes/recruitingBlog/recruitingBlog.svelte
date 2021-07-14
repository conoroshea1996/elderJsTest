<script>
  import BlogPage from '../../components/BlogPage.svelte';

  export let data;
</script>

<BlogPage hydrate-client={{ blogs: data.blogs, activeCategory: data.category }} />
