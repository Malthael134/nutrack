import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './src/lib/db/schema.ts',
    dialect: 'postgresql',
    out: './migrations',
    dbCredentials: {
        url: process.env.DATABASE_URL ?? '',
    },
    // Mutli-App DB configuration
    tablesFilter: ['nutrack_*'],
    verbose: true,
    strict: true,
});
