<script>
    import { page } from '$app/stores';
    import { signIn, signOut } from '@auth/sveltekit/client';
</script>

{#if $page.data.session}
    <p>You're signed in as {$page.data.session.user?.email}</p>
    <button on:click={() => signOut()} class="hover:underline">Sign out</button>
{:else}
    <button on:click={() => signIn('github')} class="hover:underline">Sign in with github</button>
{/if}
