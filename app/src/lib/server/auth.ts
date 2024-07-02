import { Lucia } from 'lucia';
import { dev } from '$app/environment';
import { GitHub } from 'arctic';
import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import { db } from '@/hooks.server';
import { user, session } from '$lib/db/schema';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';

const adapter = new DrizzlePostgreSQLAdapter(db, session, user);

export const github = new GitHub(GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET);

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            // set to `true` when using HTTPS
            secure: !dev,
        },
    },
    getUserAttributes: (data) => ({
        username: data.username,
        email: data.email,
        isAdmin: data.isAdmin,
    }),
});

declare module 'lucia' {
    interface Register {
        Lucia: typeof lucia;
        // DatabaseSessionAttributes: DatabaseSessionAttributes;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}

// interface DatabaseSessionAttributes {
// }

interface DatabaseUserAttributes {
    username: string;
    email: string;
    isAdmin: boolean;
}
