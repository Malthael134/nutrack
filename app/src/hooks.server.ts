import type { Handle } from '@sveltejs/kit';
import { parse } from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
    const cookies = parse(event.request.headers.get('cookie') || '');
    const colorScheme = cookies['prefers-color-scheme'];

    
    // Need to rework at some point. `html.classList` may not be empty which would break the current code
    const response = await resolve(event, {
        transformPageChunk: async ({ html }) => colorScheme === 'dark' ? html.replace('<html', `<html class=\"dark\"`) : html,
    });

    // if (colorScheme === 'dark') {
    //     response.headers.set('Set-Cookie', `prefers-color-scheme=dark; Path=/; HttpOnly`);
    //     response.body = response.body.replace('<html', '<html class="dark"');
    // }

    return response;
};