import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { accounts } from './schema/accounts';
import { sessions } from './schema/sessions';
import { users } from './schema/users';
import { authenticators } from './schema/authenticators';
import { nutrients } from './schema/nutrients';

const schema = {
    accounts,
    sessions,
    users,
    authenticators,
    nutrients,
};

const pgConn = postgres(DATABASE_URL);
export const db = drizzle(pgConn, { schema });
export { accounts, sessions, users, authenticators, nutrients };
