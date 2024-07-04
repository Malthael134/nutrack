import { db } from '@/lib/server/db/index.js';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types.js').PageServerLoad} */
export async function load(event) {
    const session = await event.locals.auth();

    if (!session) {
        redirect(302, '/auth/signin');
    }

    const user = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.id, session.user?.id ?? ''),
    });

    return {
        user,
    };
}
