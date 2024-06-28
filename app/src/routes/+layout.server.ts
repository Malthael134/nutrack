// this is basically unused. gotta remove it soon

export const ssr = true;

/** @type {import("./$types.js").LayoutServerLoad} */
export async function load({ cookies }) {
	type ColorSchemePreference = 'light' | 'dark' | 'system';
	let colorScheme: ColorSchemePreference;

	// gotta read them later during render to apply the (class in case it is light or dark theme)
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

	return {
		colorScheme: colorScheme
	};
}
