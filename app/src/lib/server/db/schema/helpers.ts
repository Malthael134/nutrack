import { pgEnum, pgTableCreator } from 'drizzle-orm/pg-core';

export const createTable = pgTableCreator((name) => `nutrack_${name}`);
