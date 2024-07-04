import { serial, varchar } from 'drizzle-orm/pg-core';
import { createTable, measurementType } from './helpers';

export const nutrients = createTable('nutrient', {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 50 }).notNull(),
    measurementType: measurementType('measurement_type').notNull(),
});
