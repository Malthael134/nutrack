export const ssr = true;

/** @type {import("./$types.js").LayoutServerLoad} */
export async function load({ cookies }) {
	type ColorSchemePreference = 'light' | 'dark' | 'system';
	let colorScheme: ColorSchemePreference;

	switch (cookies.get('prefers-color-scheme')) {
		// Prefers light mode
		case 'light':
			colorScheme = 'light';
			break;
		// Prefers dark mode
		case 'dark':
			colorScheme = 'dark';
			break;
		// No color scheme defined
		case undefined:
			colorScheme = 'system';
			break;
		// Any other case
		default:
			colorScheme = 'system';
			break;
	}

	console.log(colorScheme);
	return {
		colorScheme: colorScheme
	};
}
