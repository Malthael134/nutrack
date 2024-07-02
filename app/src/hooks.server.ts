import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '$lib/db/schema';
import type { Handle } from '@sveltejs/kit';
import { lucia } from '$lib/server/auth';

const pgConn = postgres(DATABASE_URL);
export const db = drizzle(pgConn, { schema });

export const handle: Handle = async ({ event, resolve }) => {
    const sessionId = event.cookies.get(lucia.sessionCookieName);
    if (!sessionId) {
        event.locals.user = null;
        event.locals.session = null;
        return resolve(event);
    }

    const { session, user } = await lucia.validateSession(sessionId);
    if (session && session.fresh) {
        const sessionCookie = lucia.createSessionCookie(session.id);
        event.cookies.set(sessionCookie.name, sessionCookie.value, {
            path: '.',
            ...sessionCookie.attributes,
        });
    }

    event.locals.user = user;
    event.locals.session = session;

    return resolve(event);
};
