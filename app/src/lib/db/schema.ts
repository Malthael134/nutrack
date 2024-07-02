import { relations } from 'drizzle-orm';
import {
    boolean,
    pgEnum,
    pgTableCreator,
    varchar,
    primaryKey,
    timestamp,
} from 'drizzle-orm/pg-core';

// Mutli-App DB configuration
export const createTable = pgTableCreator((name) => `nutrack_${name}`);

export const providerEnum = pgEnum('provider', ['github' /* , "google" */]);

export const user = createTable(
    'user',
    {
        id: varchar('id', { length: 100 }).unique().notNull(),
        provider: providerEnum('provider').notNull(),
        providerId: varchar('provider_id', { length: 255 }).notNull(),
        firstName: varchar('first_name', { length: 100 }).notNull(),
        lastName: varchar('last_name', { length: 100 }).notNull(),
        isAdmin: boolean('is_admin').notNull().default(false),
        email: varchar('email', { length: 100 }).notNull().unique(),
    },
    (table) => ({
        pk: primaryKey({ columns: [table.provider, table.providerId] }),
    }),
);

export const userRelations = relations(user, ({ many }) => ({
    session: many(session),
}));

export const session = createTable('session', {
    id: varchar('id', { length: 100 }).primaryKey(),
    userId: varchar('user_id', { length: 100 }).notNull(),
    expiresAt: timestamp('expires_at').notNull(),
});

export const sessionRelations = relations(session, ({ one }) => ({
    user: one(user, {
        fields: [session.userId],
        references: [user.id],
    }),
}));
