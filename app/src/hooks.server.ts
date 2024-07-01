import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from "$lib/db/schema"

const pgConn = postgres(DATABASE_URL);
export const db = drizzle(pgConn, { schema });
