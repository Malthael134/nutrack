<script lang="ts">
    import '../app.css';
    import { serialize } from 'cookie';
    import { onMount } from 'svelte';
    import {
        default as UserSettingsStore,
        type UserSettings as UserSettings
    } from '$lib/stores/settings';
    import { browser } from '$app/environment';
    export let data: import('./$types').LayoutServerData;
    const { colorScheme } = data;
    UserSettingsStore.update((settings) => ({ ...settings, colorScheme }));

    UserSettingsStore.subscribe((v) => {
        if (browser) {
            console.log('user settings store updated to:', v);
            document.cookie = serialize('prefers-color-scheme', v.colorScheme, {
                path: '/'
            });
        }
    });

    onMount(() => {
        if (!document.cookie.includes('prefers-color-scheme=')) {
            document.cookie = serialize('prefers-color-scheme', 'system', {
                path: '/'
            });
        }
    });
</script>

<span id="page-wrapper" class={$UserSettingsStore.colorScheme}>
    <slot />
</span>
