import { db, nutrients as nutrientsTable } from '@/lib/server/db'

export async function load({  }) {
    const nutrients = await db.select().from(nutrientsTable)

    return {
        nutrients,
    }
}