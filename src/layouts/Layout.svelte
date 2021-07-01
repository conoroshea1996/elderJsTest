<script>
  import Navbar from '../components/Navbar.svelte';

  export let templateHtml, settings;
</script>

<svelte:head>
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://unpkg.com/@tailwindcss/typography@0.4.x/dist/typography.min.css" />
</svelte:head>

<Navbar hydrate-client={{ preload: true }} />

<div class="container">
  {@html templateHtml}
</div>
<div class="footer">Built with ❤ and <a href="https://elderguide.com/tech/elderjs/">Elder.js</a></div>
