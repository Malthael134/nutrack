import { pgEnum, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { createTable } from './helpers';

export const colorScheme = pgEnum('user_color_scheme', ['system', 'light', 'dark']);

export const users = createTable('user', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text('name'),
    email: text('email').notNull(),
    emailVerified: timestamp('email_verified', { mode: 'date' }),
    image: text('image'),
    colorScheme: colorScheme('color_scheme').notNull().default('system'),
});
