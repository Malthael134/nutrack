import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { db } from '$lib/server/db';
import { AUTH_GITHUB_ID, AUTH_GITHUB_SECRET } from '$env/static/private';
import { accounts, authenticators, sessions, users } from '$lib/server/db/schema';

export const { handle, signIn, signOut } = SvelteKitAuth({
    adapter: DrizzleAdapter(db, {
        accountsTable: accounts,
        usersTable: users,
        authenticatorsTable: authenticators,
        sessionsTable: sessions,
    }),
    providers: [GitHub({ clientId: AUTH_GITHUB_ID, clientSecret: AUTH_GITHUB_SECRET })],
});
