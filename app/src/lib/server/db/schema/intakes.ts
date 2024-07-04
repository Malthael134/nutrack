import { integer, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { createTable } from './helpers';
import { users } from './users';
import { consumables } from './consumables';
import { relations } from 'drizzle-orm';

export const intakes = createTable('intake', {
    id: serial('id').primaryKey().notNull(),
    userId: text('user_id').references(() => users.id, { onDelete: 'cascade' }),
    consumableId: integer('consumable_id').references(() => consumables.id),
    date: timestamp('date').notNull().defaultNow()
});

export const intakesRelations = relations(intakes, ({ many }) => ({
    consumable: many(consumables)
}))
