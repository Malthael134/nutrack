import { text, timestamp } from "drizzle-orm/pg-core";
import { createTable } from "./helpers";
import { users } from "./users";

export const sessions = createTable('session', {
    sessionToken: text('sessionToken').primaryKey(),
    userId: text('userId')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade' }),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
});