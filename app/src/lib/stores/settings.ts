import { writable } from 'svelte/store';

const userSettings = writable<{ colorScheme: 'light' | 'dark' | 'system' }>({
	colorScheme: 'system'
});

export default userSettings;
