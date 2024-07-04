<script lang="ts">
    import { page } from '$app/stores';
    import { signOut } from '@auth/sveltekit/client';
    import UserSettingsStore from '@/lib/stores/settings.js';
</script>

<div>Signed in as {$page.data.session?.user?.name}</div>
<div>{$page.data.session?.user?.email}</div>
<br />
<div>
    Color Scheme: {$UserSettingsStore.colorScheme === 'system'
        ? 'Auto'
        : $UserSettingsStore.colorScheme === 'light'
          ? 'Light'
          : 'Dark'}
</div>

{#if $page.data.session}
    <button
        type="button"
        on:click={async () => {
            await signOut({ redirect: true, callbackUrl: '/' });
        }}
        class="rounded bg-red-600 p-2 font-semibold text-white hover:bg-opacity-70">Sign out</button
    >
{/if}
