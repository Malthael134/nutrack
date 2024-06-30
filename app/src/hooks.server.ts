import type { Handle } from '@sveltejs/kit';
import { parse } from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = parse(event.request.headers.get('cookie') || '');
	type ColorSchemePreference = 'light' | 'dark' | 'system';
	let colorScheme: ColorSchemePreference;

	switch (cookies['prefers-color-scheme']) {
		// Prefers light mode
		case 'light':
			colorScheme = 'light';
			break;
		// Prefers dark mode
		case 'dark':
			colorScheme = 'dark';
			break;
		// Any other case
		default:
			colorScheme = 'system';
			break;
	}

	console.log(colorScheme);

	const response = await resolve(event, {
		transformPageChunk: async ({ html }) => {
			/// WIP
			// No set preference
			if (colorScheme === 'system') {
				return html;
			}
			const matches = html.match(/<html/)?.[0];
			console.log(matches);

			if (!/<html.*>/.test(html)) {
				// <html> element has no attributes
				console.log('hi');
				return html.replace('<html>', `<html ${colorScheme}>`);
			} else {
				if (colorScheme === 'dark') {
					return html.replace('<html', `<html class=\"dark\"`);
				}
				if (colorScheme === 'light') {
					return html.replace('<html', `<html class=\"light\"`);
				}
			}
		}
		// filterSerializedResponseHeaders: (name, value) => true
	});

	return response;
};

/**
 * Add a class to an element in a HTML string. The class will be only added if the element does not already have the
 * @param {string} htmlString The HTML document as a string.
 * @param {string} element The element name. In case of `<html>` it would be `html`
 * @param {string} className The class that should be added
 * @param {boolean} global Wether or not every element in the html that matches the `element` name should be modified, or only the first element.
 * @returns The modified htmlString
 */
function addClassToElement(
	htmlString: string,
	element: string,
	className: string,
	global: boolean
): string {
	const regex = new RegExp(`<${element}.*?>`, 'i');

	element.replace;

	// No-op
	return element;
}
