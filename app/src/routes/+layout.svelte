<script lang="ts">
	import '../app.css';
	import { serialize } from 'cookie';
	import { onMount } from 'svelte';
	import UserSettingsStore from '$lib/stores/settings';
	export let data: import('./$types').LayoutServerData;
	const { colorScheme } = data;

	UserSettingsStore.update((settings) => ({ ...settings, colorScheme }));

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
