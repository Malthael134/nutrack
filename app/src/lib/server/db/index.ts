import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema/authenticators';

const pgConn = postgres(DATABASE_URL);
export const db = drizzle(pgConn, { schema });

export { accounts } from './schema/accounts'
export { sessions } from './schema/sessions'
export { users } from './schema/users'
export { authenticators } from './schema/authenticators'