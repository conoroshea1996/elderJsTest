<script>
  /** @slot {{ isActive: boolean  }} accordion_item_activation */
  /** @slot {{ isActive: boolean  }} accordion_item_content */
  import { getContext } from 'svelte';
  import { ACCORDION_KEY } from './Accordion.svelte';
  import { slide } from 'svelte/transition';
  const { activeItems, listItemRegister, allowMultiple } = getContext(ACCORDION_KEY);
  const accordionItemId = $listItemRegister;
  $listItemRegister++;
  /**
   * If the accordion item should be open by default
   * If allowMultiply is set to false last AccordionItem  with open will be open
   * @type {Boolean}
   */
  export let open = false;
  const handleItemClick = () => {
    if (allowMultiple) {
      if ($activeItems.includes(accordionItemId)) {
        $activeItems = $activeItems.filter((i) => i != accordionItemId);
      } else {
        $activeItems = [...$activeItems, accordionItemId];
      }
    } else {
      $activeItems = accordionItemId;
    }
  };
  if (open) {
    if (allowMultiple) {
      $activeItems = [...$activeItems, accordionItemId];
    } else {
      $activeItems = accordionItemId;
    }
  }
  $: isActive =
    (allowMultiple && $activeItems.includes(accordionItemId)) || (!allowMultiple && $activeItems === accordionItemId);
</script>

<div on:click={() => handleItemClick()}>
  <slot {isActive} name="accordion_item_activation" />
</div>

{#if isActive}
  <div transition:slide>
    <slot {isActive} name="accordion_item_content" />
  </div>
{/if}
