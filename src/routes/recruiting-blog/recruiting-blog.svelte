<script>
  import BlogNavigation from '../../components/BlogNavigation.svelte';
  import BlogPage from '../../components/BlogPage.svelte';

  // grab page number from layout
  let pageNumber = 1;
  const pageSize = 10;
  let totalPages;
  let filteredPosts = [];
  let displayPosts = [];

  const paginate = (posts) => {
    // make deep copy so we can mutate categories
    var postToShow = posts.slice(0, pageNumber * pageSize);
    return postToShow;
  };

  const getTotalPages = (posts) => {
    totalPages = Math.round(posts.length / pageSize);
  };

  export let data, helpers;

  let blogCategories = [
    {
      display: 'All',
      value: null,
    },
    {
      display: 'Strategy',
      value: 'recruiting-strategy',
    },
    {
      display: 'Culture & Branding',
      value: 'culture-branding',
    },
    {
      display: 'Social',
      value: 'social-recruiting',
    },
    {
      display: 'Remote Hiring',
      value: 'remote-hiring',
    },
    {
      display: 'Compliance & Data',
      value: 'compliance-and-data',
    },
    {
      display: 'Infographics',
      value: 'infographics',
    },
    {
      display: 'Events',
      value: 'hr-events-and-people',
    },
    {
      display: 'Updates',
      value: 'hirehive-updates',
    },
    {
      display: 'Guides',
      value: 'Guides',
    },
  ];
</script>

<BlogPage hydrate-client={{ blogs: data.blogs, activeCategory: data.category }} />
