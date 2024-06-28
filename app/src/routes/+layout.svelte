<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { serialize } from 'cookie';
	import type { LayoutServerData } from './$types';
	export let data: LayoutServerData;

	/** Client only */
	function prefersDarkMode(): boolean {
		return window.matchMedia(`(prefers-color-scheme: dark)`).matches;
	}

	function updateThemeClass() {
		if (data.colorScheme === 'dark') {
			document.documentElement.classList.add('dark');
			return
		}
	}

	updateThemeClass()

	onMount(() => {
		updateThemeClass()
		// old way: FOUC (https://en.wikipedia.org/wiki/Flash_of_unstyled_content) problem occurs.
		// Need to use cookies to be able to ssr that shit instead of update on client after initial page load
		// SUCKS
		// if (
		// 	document.cookie === 'dark' ||
		// 	(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		// ) {
		// 	console.log('using theme: dark');
		// 	document.documentElement.classList.add('dark');
		// } else {
		// 	console.log('using theme: light');
		// 	document.documentElement.classList.remove('dark');
		// }
	});
</script>

<slot />
