import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: [
		'variant',
		[
			// IF prefers == 'dark' && config != 'light':
			//     USE(theme.dark)
			'@media (prefers-color-scheme: dark) { &:not(.light *) }',
			// ELIF config == 'dark':
			//     USE(theme.dark)
			'&:is(.dark *)'
			// ELSE:
			//     USE(theme.light)
			// ...
		]
	],
	theme: {
		extend: {
			colors: {}
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};
