import { db } from '@/hooks.server';
import { user } from '@/lib/db/schema';
import { github, lucia } from '@/lib/server/auth';
import { redirect, type RequestEvent } from '@sveltejs/kit';
import { OAuth2RequestError } from 'arctic';
import { and, eq } from 'drizzle-orm';
import { generateId } from 'lucia';

export async function GET(event: RequestEvent) {
    const code = event.url.searchParams.get('code');
    const state = event.url.searchParams.get('state');

    const storedState = event.cookies.get('github_oauth_state') ?? null;
    if (!code || !state || !storedState || state !== storedState) {
        return new Response(null, {
            status: 400,
        });
    }

    console.log('got /auth/callback/github');

    try {
        const tokens = await github.validateAuthorizationCode(code);

        const githubUserResponse = await fetch('https://api.github.com/user', {
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`,
            },
        });

        const githubUser: GitHubUser = await githubUserResponse.json();

        const existingUser = await db.query.user.findFirst({
            where: and(eq(user.provider, 'github'), eq(user.providerId, githubUser.id)),
        });

        if (existingUser) {
            const session = await lucia.createSession(existingUser.id, {});
            const sessionCookie = lucia.createSessionCookie(session.id);
            event.cookies.set(sessionCookie.name, sessionCookie.value, {
                path: '.',
                ...sessionCookie.attributes,
            });
        } else {
            const githubEmailResponse = await fetch('https://api.github.com/user/emails', {
                headers: {
                    Authorization: `Bearer ${tokens.accessToken}`,
                },
            });

            /**
             * All of the users GitHub emails
             * @type {GitHubEmail[]}
             */
            const githubEmails: GitHubEmail[] = await githubEmailResponse.json();

            /**
             * The users primary GitHub email
             * @type {GitHubEmail | undefined}
             */
            const primary: GitHubEmail | undefined = githubEmails.find((entry) => entry.primary);

            if (primary) {
                const userId = generateId(40);
                const nameParts = githubUser.name.split(' ');
                let lastName: string | undefined;
                if (nameParts.length >= 1) {
                    lastName = nameParts.slice(1).join(' ');
                }
                await db.insert(user).values({
                    id: userId,
                    provider: 'github',
                    providerId: githubUser.id,
                    email: primary.email,
                    firstName: nameParts[0] ?? '',
                    lastName: lastName ?? '',
                });
                const session = await lucia.createSession(userId, {});
                const sessionCookie = lucia.createSessionCookie(session.id);
                event.cookies.set(sessionCookie.name, sessionCookie.value, {
                    path: '.',
                    ...sessionCookie.attributes,
                });
            }
        }
        return new Response(null, {
            status: 302,
            headers: {
                Location: '/',
            },
        });
    } catch (error) {
        // console.log('error', error);
        // specified error message depends on provider
        if (error instanceof OAuth2RequestError) {
            return new Response(JSON.stringify({
                error: { ...error },
                code,
                state,
                storedState,
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        console.log(error)
        return new Response(null, {
            status: 500,
        });
    }
}

type GitHubUser = {
    id: string;
    login: string;
    avatar_url: string;
    name: string;
};

type GitHubEmail = {
    email: string;
    primary: boolean;
    verified: boolean;
    visibility: string | null;
};
