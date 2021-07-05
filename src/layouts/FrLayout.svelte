<script>
  import FrNavbar from '../components/FrNavbar.svelte';
  import FrFooter from '../components/FrFooter.svelte';
  export let templateHtml, settings, request;
</script>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;

  /* Avenir Font 400 500 800 */
  @font-face {
    font-family: 'Inter var';
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    font-named-instance: 'Regular';
    src: url('/fonts/Inter-roman.var.woff2?v=3.18') format('woff2');
  }

  /* Rozanova Geo */
  @font-face {
    font-family: 'Rozanova GEO';
    src: url('/fonts/RozanovaGEOBold.otf') format('opentype');
    font-weight: 700;
  }

  h1 {
    @apply font-rozanonva;
    font-weight: 700;
  }

  body {
    @apply font-sans;
  }

  .dark-mode {
    @apply bg-gray-900 text-gray-500;
  }
  .light-mode {
    @apply bg-white text-gray-500;
  }

  blockquote {
    position: relative;
    border: none;
    padding-top: 4.5rem;
    padding-left: 0 !important;
  }

  blockquote p {
    @apply font-rozanonva font-bold;
  }

  .highlight {
    @apply bg-yellow-400;
  }
  blockquote::after {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    background-image: url('/assets/quotes.png');
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    content: '';
  }
  blockquote p:first-of-type::before {
    content: none !important;
  }

  @tailwind utilities;
</style>

<svelte:head>
  <script type="text/javascript">
    let scrolled = false;
    !(function (e, t, n) {
      function a() {
        if (scrolled) return;
        setTimeout(() => {
          var e = t.getElementsByTagName('script')[0],
            n = t.createElement('script');
          (n.type = 'text/javascript'),
            (n.async = !0),
            (n.src = 'https://beacon-v2.helpscout.net'),
            e.parentNode.insertBefore(n, e);
        }, 2000);
        scrolled = true;
      }
      if (
        ((e.Beacon = n = function (t, n, a) {
          e.Beacon.readyQueue.push({ method: t, options: n, data: a });
        }),
        (n.readyQueue = []),
        'complete' === t.readyState)
      )
        return a();
      e.attachEvent ? e.attachEvent('onscroll', a) : e.addEventListener('scroll', a, !1);
    })(window, document, window.Beacon || function () {});
  </script>
  <script type="text/javascript">
    window.Beacon('init', '8fdc3c1c-da31-425b-b542-802054cfc09f');
  </script>
</svelte:head>

<FrNavbar hydrate-client={{ preload: true, currentUrl: request.permalink }} />

{@html templateHtml}

<FrFooter />
