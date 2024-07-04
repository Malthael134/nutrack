import { pgEnum, pgTableCreator } from 'drizzle-orm/pg-core';

export const createTable = pgTableCreator((name) => `nutrack_${name}`);

/**
 * # Measurement Type
 *
 * This enum is used to store information about something that can
 * be of one of the following types. The measurement type can be:
 * ```
 * mass     = gram
 * volume   = liter
 * quantity = amount in pieces
 * ```
 *
 * It should be stored with double precision, meaning 64-bit or a float8 (bytes).
 */
export const measurementType = pgEnum('measurement_type', ['mass', 'volume', 'quantity']);
