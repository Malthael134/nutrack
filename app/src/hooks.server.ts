import { sequence } from '@sveltejs/kit/hooks';
import { handle as authenticationHandle } from './auth';
import { redirect, type RequestEvent } from '@sveltejs/kit';
import { db, users } from '$lib/server/db';
import { eq } from 'drizzle-orm';

/**
 * Checks wether or not a user of a request event is signed in.
 * @param event The hooks Request Event
 * @returns The user
 * @throws `redirect` if the user is not signed in.
 */
async function checkSignedIn(event: RequestEvent): Promise<typeof users.$inferSelect> {
    const session = await event.locals.auth();
    const user = await db.query.users.findFirst({
        where: eq(users.id, session?.user?.id ?? ''),
    });

    if (!user) {
        throw redirect(303, '/auth/signin');
    }

    return user;
}

/**
 * Handles the authorization of protected routes.
 *
 * Should come after the `auth` handle from **Auth.js**, or protected route access will always be unauthorized.
 *
 * @type {import('@sveltejs/kit').Handle}
 */
const authorizationHandle: import('@sveltejs/kit').Handle = async ({ event, resolve }) => {
    if (event.url.pathname.startsWith('/admin')) {
        const user = await checkSignedIn(event);
    }

    return await resolve(event);
};

/** @type {import('@sveltejs/kit').Handle} */
export const handle: import('@sveltejs/kit').Handle = sequence(
    authenticationHandle,
    authorizationHandle,
);
