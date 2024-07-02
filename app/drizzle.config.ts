import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './src/lib/server/db/schema/*',
    dialect: 'postgresql',
    out: './migrations',
    dbCredentials: {
        // @ts-ignore
        url: process.env.DATABASE_URL ?? '',
    },
    // Mutli-App DB configuration
    tablesFilter: ['nutrack_*'],
    verbose: true,
    strict: true,
});
