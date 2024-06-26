import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv"

// Load environment variables into process.env
dotenv.config({ path: '../.env' })

console.log('DATABASE_URL =', process.env.DATABASE_URL)

export default defineConfig({
    schema: "./server/database/schema.ts",
    dialect: "postgresql",
    out: "./server/database/migrations",
    dbCredentials: {
        url: process.env.DATABASE_URL ?? "",
    },
    tablesFilter: ["nutrack_*"],
});
