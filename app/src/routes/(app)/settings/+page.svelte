<script lang="ts">
    import { page } from "$app/stores";
    import { signOut } from "@auth/sveltekit/client";

    export let data;
</script>

<div>Color Scheme: {data.colorScheme}</div>

{#if $page.data.session}
    <button type="button" on:click={() => signOut()}>Sign out</button>
{/if}