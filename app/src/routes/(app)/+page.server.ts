export const actions = {
    add_intake: async ({ request, locals }) => {
        const session = await locals.auth()
        if (!session) {
            return { success: false, reason: "You're not logged in." }
        }
        const data = await request.formData()
    }
}