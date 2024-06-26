import {
    pgTableCreator,
    serial,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `nutrack_${name}`);

export const users = createTable("user", {
    id: serial("id").primaryKey().notNull(),
    name: varchar("name", { length: 30 }).notNull(),
    createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
});
