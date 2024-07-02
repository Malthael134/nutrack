<script>

    import { page } from "$app/stores";

</script>
{#if $page.data.session}

Welcome back, {$page.data.session?.user?.name}!
{:else}
Welcome!
{/if}