import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: vercel(),
    security: {
        checkOrigin: true
    },
    integrations: [tailwind(), react()],
    experimental: {
        actions: true
    }
});