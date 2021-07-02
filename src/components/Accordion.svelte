<script context="module">
  export const ACCORDION_KEY = {};
</script>

<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  /**
   * Specify if there can be more than one accordion item open at once
   * @type {Boolean}
   */
  export let allowMultiple = false;
  /**
   * classes to be applied on to the wrapper component for the accordion
   */
  export let klass = '';
  const startingValue = allowMultiple ? [] : null;
  const activeItems = writable(startingValue);
  const listItemRegister = writable(0);
  setContext(ACCORDION_KEY, {
    activeItems,
    listItemRegister,
    allowMultiple,
  });
</script>

<div class={klass}>
  <slot />
</div>
