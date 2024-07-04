import { serial, text } from "drizzle-orm/pg-core";
import { createTable } from "./helpers";

export const nutrients = createTable('nutrient', {
    id: serial('id').primaryKey().notNull(),
    title: text('title').notNull(),
    unit: text('unit').notNull()
})