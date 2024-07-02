import { signIn } from '@/auth.js'
import type { Session } from '@auth/sveltekit'
import { redirect } from '@sveltejs/kit'

/** @type {import('./$types.js').PageServerLoad} */
export async function load(event): Promise<{session: Session}> {
    const session = await event.locals.auth()

    if (!session) {
        redirect(302, '/auth/signin')
    }

    return {
        session: session,
    }
}