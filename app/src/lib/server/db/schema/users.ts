import { text, timestamp } from "drizzle-orm/pg-core";
import { createTable } from "./helpers";

export const users = createTable('user', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text('name'),
    email: text('email').notNull(),
    emailVerified: timestamp('emailVerified', { mode: 'date' }),
    image: text('image'),
});