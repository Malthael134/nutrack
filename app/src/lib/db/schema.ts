import { pgTableCreator, serial, varchar } from 'drizzle-orm/pg-core';

// Mutli-App DB configuration
export const createTable = pgTableCreator((name) => `nutrack_${name}`);

export const users = createTable("user", {
    id: serial('id').notNull().primaryKey(),
    name: varchar('name', { length: 20 }).notNull().unique()
})