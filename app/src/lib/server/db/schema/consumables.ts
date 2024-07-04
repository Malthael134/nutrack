import { integer, serial, text } from "drizzle-orm/pg-core";
import { createTable } from "./helpers";
import { nutrients } from "./nutrients";

export const consumables = createTable('consumable', {
    id: serial('id').primaryKey().notNull(),
    title: text('title').notNull(),
    nutrientId: integer('nutrient_id').notNull().references(() => nutrients.id)
})