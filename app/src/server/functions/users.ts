"use server";

import { db } from "@/server/db";
import { users } from "@/server/db/schema";

export async function getAllUsers(): Promise<(typeof users.$inferSelect)[]> {
    const result = await db.select().from(users);
    return result;
}
