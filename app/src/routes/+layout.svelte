<script lang="ts">
	import '../app.css';
	import { serialize } from 'cookie';
	import type { LayoutServerData } from './$types';
	import { onMount } from 'svelte';
	export let data: LayoutServerData;

	/** Client only */
	function prefersDarkMode(): boolean {
		return window.matchMedia(`(prefers-color-scheme: dark)`).matches;
	}

	onMount(() => {
		if (prefersDarkMode() && !document.cookie.includes('prefers-color-scheme=')) {
			document.documentElement.classList.add('dark')
		}
		let cookies: Record<string, string> = {
			prefersColorScheme: serialize('prefers-color-scheme', prefersDarkMode() ? 'dark' : 'light', {
				path: '/'
			})
		};
		for (const c in cookies) {
			// console.log(cookies[c]);
		}
		document.cookie = cookies.prefersColorScheme;
	});
</script>

<slot />
