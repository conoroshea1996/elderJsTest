<script>
  import FrBlogPage from '../../components/FRBlogPage.svelte';
  export let data, helpers;
</script>

<FrBlogPage hydrate-client={{ blogs: data.blogs, activeCategory: data.category }} />
