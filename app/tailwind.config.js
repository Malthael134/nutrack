import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: [
		'variant',
		[
			// IF config == 'light':
			//     USE(theme.light)
			// ELIF config == 'dark':
			//     USE(theme.dark)
			'&:is(.dark *)',
			// ELIF prefers == 'dark' && config != 'light':
			//     USE(theme.dark)
			'@media (prefers-color-scheme: dark) { &:not(.light *) }'
			// If the config is not specified and the user does not prefer 'dark' -> user prefers light
			// ELSE:
			//     USE(theme.light)
		]
	],
	theme: {
		extend: {
			colors: {}
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};
