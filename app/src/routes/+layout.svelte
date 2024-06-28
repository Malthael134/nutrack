<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	onMount(() => {
		console.log('mounted!');
		console.log('cookie:', document.cookie);
		if (
			document.cookie === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			console.log('using theme: dark');
			document.documentElement.classList.add('dark');
		} else {
			console.log('using theme: light');
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<slot />
