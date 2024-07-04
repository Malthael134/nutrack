import { boolean, pgEnum, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { createTable } from './helpers';

export const userStateEnum = pgEnum('user_state', ['active', 'deleted']);

export const users = createTable('user', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text('name'),
    email: text('email').notNull(),
    emailVerified: timestamp('email_verified', { mode: 'date' }),
    image: text('image'),
    state: userStateEnum('state').notNull().default('active'),
    isAdmin: boolean('is_admin').notNull().default(false),
});
