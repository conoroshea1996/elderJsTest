<script>
export let imageSrc;
</script>


{#if !imageSrc.includes(".gif")}
    @@picture src={imageSrc} /@@
    {:else}
    <img src={imageSrc}>
{/if}
