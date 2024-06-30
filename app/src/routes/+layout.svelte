<script lang="ts">
	import '../app.css';
	import { serialize } from 'cookie';
	import { onMount } from 'svelte';

	/** Client only */
	function prefersDarkMode(): boolean {
		return window.matchMedia(`(prefers-color-scheme: dark)`).matches;
	}

	onMount(() => {
		if (prefersDarkMode() && !document.cookie.includes('prefers-color-scheme=')) {
			document.documentElement.classList.add('dark');
		}
		document.cookie = serialize('prefers-color-scheme', prefersDarkMode() ? 'dark' : 'light', {
			path: '/'
		});
	});
</script>

<slot />
